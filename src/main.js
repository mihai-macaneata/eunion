import Vue from 'vue'
import App from './App.vue'
import router from './router'

import data from '@/assets/data/menu'

console.log(data)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
