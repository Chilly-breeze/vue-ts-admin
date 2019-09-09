<template>
  <div ref="mychart" class="chart" :style="{width:chartWidth,height:chartHeight}"></div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Provide } from "vue-property-decorator";
import eCharts from "echarts";
@Component({
  components: {}
})
export default class LoginHeader extends Vue {
  @Prop({ type: String, default: "line" }) readonly chartType!: string;
  @Prop(Object) chartData!: string | null;
  @Provide() chartWidth: string = "";
  @Provide() chartHeight: string = "";

  created() {
    (this as any).chartWidth = `${document.body.offsetWidth * 0.8}px`;
    (this as any).chartHeight = `${document.body.offsetHeight * 0.6}px`;
  }
  mounted() {
    this.drawChart();
  }
  drawChart() {
    //注册实例
    let chart = eCharts.init((this as any).$refs.mychart as HTMLCanvasElement);
    if (chart == undefined) {
      console.log(`echarts init dom is failed`);
      return;
    }
    switch (this.chartType) {
      case "line":
        chart.setOption((this as any).generatorLineOption());
        break;
      case "bar":
        chart.setOption((this as any).generatorBarOption());
        break;
      case "pie":
        chart.setOption((this as any).generatorPieOption());
        break;
    }
  }
  generatorLineOption() {
    return {
      title: {
        text: "近一周学习量",
        subtext: "test",
        x: "center"
      },
      xAxis: {
        type: "category",
        data: (this as any).chartData.xAxis
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: (this as any).chartData.yAxis,
          type: "line",
          smooth: true
        }
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      }
    };
  }
  generatorBarOption() {
    return {
      title: {
        text: "近一周学习量",
        subtext: "test",
        x: "center"
      },
      xAxis: {
        type: "category",
        data: (this as any).chartData.xAxis
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: (this as any).chartData.yAxis,
          type: "bar",
          barWidth: "40%"
        }
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      color: ["#3398DB"]
    };
  }
  generatorPieOption() {
    let pie = [];
    for (const key in (this as any).chartData.xAxis) {
      pie.push({
        value: (this as any).chartData.yAxis[key],
        name: (this as any).chartData.xAxis[key]
      });
    }
    return {
      title: {
        text: "近一周学习量",
        subtext: "test",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: (this as any).chartData.xAxis
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: pie,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
  }
}
</script>

<style scoped>
</style>
