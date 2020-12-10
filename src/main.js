import Vue from 'vue'
import App from './App.vue'
// import login from './views/login'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
Vue.config.productionTip = false
Vue.use(ElementUI)
// new Vue({
//   router,
//   render: h => h(login)
// }).$mount('#app')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false
