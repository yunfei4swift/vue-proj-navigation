import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios	//这行代码实现了全局注册,axios是上面引入的名字,$http像变量名一样的存在,也可以自定义名字
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
