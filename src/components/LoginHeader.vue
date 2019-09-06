<template>
  <div class="loginHeader">
    <div class="page-center">
      <div class="info">
        <div class="title">
          <img src="@/assets/logo.jpg" alt />
          <span class="title">凉风</span>
        </div>
        <div class="detail">
          <span>凉风小菜鸡,让每个人都学得懂前端,更有能力的去学习想要学习的内容！</span>
        </div>
      </div>
      <!-- 插槽 -->
      <div class="container">
        <slot name="container"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class LoginHeader extends Vue {}
</script>

<style scoped lang="scss">
.loginHeader {
  position: relative;
  top: 100px;
  left: 50%;
  width: 400px;
  // transform: translate(-50%);
  margin-left: -200px;
  .info {
    width: 200px;
    padding-bottom: 10px;
    margin: 0 auto;
    img {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
    .title {
      font-size: 30px;
      font-weight: bold;
      margin-left: 15px;
    }
    .detail {
        margin-top: 5px;
      width: 240px;
      font-size: 12px;
      text-align: center;
      color: #999;
    }
  }

}
  .container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    width: 100%;
    box-sizing: border-box;
  }
</style>
