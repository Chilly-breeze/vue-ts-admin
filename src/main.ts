import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/http'
Vue.use(Elementui)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
