import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';

import 'vant/lib/index.css';
import "swiper/css/swiper.min.css";
// import 'animate.css';
import { Lazyload } from 'vant';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
Vue.use(Lazyload);
Vue.use(Vant);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
