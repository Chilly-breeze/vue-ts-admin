<template>
  <div class="home">
    <div class="home-body">
      <h4 class="title">凉风的后台管理系统</h4>
      <p class="des">凉风小菜鸡,让每个人都学得懂前端,更有能力的去学习想要学习的内容!</p>
      <el-button @click="learn">进入学习</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Home extends Vue {
  learn(): void {
    // 新窗口打开
    window.open(
     "https://github.com/Chilly-breeze/vue-ts-admin"
    );
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: calc(100% - 54px);
  background: url(../assets/bg.jpg) no-repeat;
  background-size: 100% 100%;
  .home-body {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    padding: 100px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
      font-weight: bold;
      line-height: 60px;
    }
    .des {
      font-size: 18px;
      margin: 40px 0;
    }
  }
}
</style>
