<template>
  <div class="user-info">
    <div class="img-box">
      <h2 class="title">About me</h2>
      <img :src="require('@/assets/'+getUser.key+'.jpg')" alt />
      <h4>{{getUser.username}}</h4>
    </div>
    <div class="info-box">
      <h2 class="title">Account</h2>
      <!-- form -->
      <el-form :model="userData" class="form-box">
        <el-form-item label="用户名">
          <el-input v-model="getUser.username" readonly></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="userData.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="onSubmit"
            :disabled="!userData.pwd"
            type="primary"
            :loading="loading"
          >修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Provide} from 'vue-property-decorator'
import {Getter} from 'vuex-class'
@Component({
    components:{}
})
export default class UserInfo extends Vue{
    @Getter('user') getUser:any;
    @Provide() userData:{username:string;pwd:string;} = {
        username:'',
        pwd:'',
    }
    @Provide() loading:boolean = false;
    onSubmit() {
        this.userData.username = this.getUser.username;
        this.loading = true;
        (this as any).$axios.post('/api/users/changePwd',this.userData).then((res:any)=>{
            this.loading= false;
            this.$message({
                type:'success',
                 message: res.data.msg,
            })
            this.userData.pwd = '';
        }).catch((err:any)=>{
            this.loading = false;
        })
    }
}

</script>  
<style lang="scss" scoped>
.user-info {
  height: calc(100% - 70px);
  display: flex;
  overflow: auto;
  color: #606266;
  .img-box,
  .info-box {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    background: #fff;
    .title {
      border-bottom: 1px solid #dcdfe6;
      padding: 10px;
      text-align: left;
      margin-bottom: 20px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .img-box {
    text-align: center;
    width: 30%;
    margin-right: 10px;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    h4 {
      margin-top: 20px;
      font-size: 16px;
    }
  }
  .info-box {
    flex: 1;
    .form-box {
      padding: 10px;
    }
  }
}
</style>
