import Vue from 'vue'
// import { IonicVueRouter } from "@ionic/vue";
import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Ionic);

new Vue({
  render: h => h(App),
}).$mount('#app')
