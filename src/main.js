import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(VueFire)

let vm = new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(vm)
