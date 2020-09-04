import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import "./assets/css/base.css"

import "swiper/css/swiper.min.css";


Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
