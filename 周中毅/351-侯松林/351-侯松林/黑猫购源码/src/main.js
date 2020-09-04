import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共文件
import "./assets/css/base.css"
import "./assets/font/iconfont.css"


// 安装vant包
// $cnpm i vant -S
// $cnpm i babel-plugin-import  -D
import Vant from 'vant'
import "vant/lib/index.css"
Vue.use(Vant)

// 引入插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";

// 引入脚本文件
import "./assets/js/rem"


// 引入动画效果
import 'animate.css'


// 引入axios配置
import axios from "axios";
// 默认路径配置
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.$axios = axios;



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
