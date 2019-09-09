<template>
  <div class="layout">
      <div class="scroll"></div>
    <!-- 头部 -->
    <LayoutHeader />

    <!-- 内容 -->
    <Content>
      <Sidebar slot="left"></Sidebar>
      <router-view slot="content"></router-view>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LayoutHeader from "./LayoutHeader.vue";
import Content from "./Content.vue";
import Sidebar from "./Sidebar.vue";
@Component({
  components: {
    LayoutHeader,
    Content,
    Sidebar
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f7f9;
  position: relative;
  .scroll {
      width: 20px;
      height: 100%;
      background: #f5f7f9;
      position:absolute;
      top: 64px;
      right: 0;
  }
}

</style>

