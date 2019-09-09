<template>
  <div class="password">
    <LoginHeader>
      <el-form slot="container"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
      >
        <div class="title">
          <h3>找回密码</h3>
        </div>
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="账号">
            <i class="fa fa-user-o" slot="prefix"></i>
          </el-input>
        </el-form-item>
      <el-form-item prop="email">
          <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="邮箱">
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
            <el-button
              @click.native.prevent="handleSubmit"
              :loading="loading"
              type="primary"
              style="width:100%;"
            >确定</el-button>
          </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "../../components/LoginHeader.vue";
@Component({
  components: {
    LoginHeader
  }
})
export default class Password extends Vue {
  @Provide() loading: boolean = false;
  @Provide() ruleForm: { username: string; email: string } = {
    username: "",
    email: ""
  };
  @Provide() rules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      {
        required: true,
        message: "请输入邮箱地址",
        trigger: "blur"
      },
      {
        type: "email",
        message: "请输入正确的邮箱地址",
        trigger: "blur,change"
      }
    ]
  };

  handleSubmit(): void {
    (this.$refs["ruleForm"] as any).validate((valid: boolean) => {
      if (valid) {
        this.loading = true;
        (this as any).$axios
          .post("/api/users/findPwd",this.ruleForm)
          .then((res: any) => {
            this.loading = false;
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push('/login')
          })
          .catch(() => {
            this.loading = false;
          });
      }
    });
  }
}
</script>
<style  lang="scss" scoped>
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

i {
  font-size: 14px;
  margin-left: 8px;
}
</style>

