
<template>
    <div>111</div>

</template>

<script>
export default {
  data () {
    const validator = function (rule, value, callBack) {
      // rule当前规则
      // value当前表单项的值
      // callback 回调函数
      // 正常写法
    //   if (value) {
    //     // 正确 勾选了协议
    //     callBack() // 一切OK请继续
    //   } else {
    //     // 不对 没勾选协议
    //     callBack(new Error('您必须同意无条件被我们蒙骗'))
    //   }
      value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗')) // 炫技模式
    }
    return {
      // 表单数据 是一个对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      loginRules: {
        //   决定着校验规则  key(字段名):value(对象数组) => 一个对象就是一个校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      } // 登录规则集合对象
      // 自定义形式去校验
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法 => 方法中传入的一个函数 两个校验参数  是否校验成功/未校验成功的字段
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('校验成功')
        }
      })
    }
  }
}
</script>

<style>

</style>
