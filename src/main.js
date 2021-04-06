import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "@/assets/css/global.css"

Vue.config.productionTip = false;
export const EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
