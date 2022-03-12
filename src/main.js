import Vue from 'vue'
import App from './App.vue'
import { createAdd } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
createAdd(Add).use(router).$mount('#app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
