<template>
     <div class='login'>
     <el-card class="login-card" style="width:35%;margin-top:7%;margin-left:30%">
         <el-form ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
             <el-form-item prop="mobile">
                 <el-input v-model="loginForm.mobile" placeholder="请输入账号" style="width:100%"></el-input>
             </el-form-item>
                <el-form-item prop="code">
                <!-- <el-input v-model="loginForm.code"  show-password placeholder="请输入密码" style="width:100%"></el-input> -->
                <el-input placeholder="请输入密码" type="password" v-model="loginForm.code" show-password></el-input>
                </el-form-item>
             <el-form-item prop="agree">
                 <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
              <el-form-item>
                  <el-button @click="login"  type="primary" style="width:50%;margin-left:25%">登录</el-button>
              </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // const validator = function (rule, value, callBack) {
    //   value ? callBack() : callBack(new Error('请先阅读本协议'))
    // }
    return {
      loginForm: {
        // input: '',
        mobile: '',
        code: '',
        agree: false // 是否同意协议
      },
      loginRules: {

        mobile: [
          { required: true, message: '请填写账号信息' }
        ],
        code: [
          { required: true, message: '请设置密码' }
        ]

        // mobile: [{ required: true, message: '请输入您的手机号' },
        //   { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],

      }
    }
  },
  methods: {
    login () {
      const that = this
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验成功')
          // 校验成功后 跳转到主页面
          that.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style>

</style>
