import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(ElementUI,VueAxios);
Vue.config.productionTip = false;

Axios.defaults.baseURL = 'http://localhost:8888';
Vue.prototype.axios = Axios;

new Vue({
  render: h => h(App),
  store:store,
  router:router
}).$mount('#app')
