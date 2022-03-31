import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '../static/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';
import * as filters from './filters'
import ClickLove from '@/component/Plug-In/ClickLove.js'
import { vueBaberrage, MESSAGE_TYPE } from 'vue-baberrage'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

window.MESSAGE_TYPE = MESSAGE_TYPE
Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.use(vueBaberrage)

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
