import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Lazyload } from 'vant';


// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Lazyload);


Vue.config.productionTip = false
// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css"

// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";

// 插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;

Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

