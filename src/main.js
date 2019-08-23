import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)

//  Components
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
