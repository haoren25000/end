import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { 
  Tabbar, 
  TabbarItem,
  Swipe, 
  SwipeItem,
  Toast,
  Lazyload,
  NavBar,
  Search,
  Icon
} from 'vant'

Vue
    .use(Tabbar)
    .use(TabbarItem)
    .use(Swipe)
    .use(SwipeItem)
    .use(Toast)
    .use(Lazyload)
    .use(NavBar)
    .use(Search)
    .use(Icon)

import 'lib-flexible'

Vue.use(VueAxios, axios)

//配置请求基础路径
axios.defaults.baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1'

//配置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

//发起请求之前处理
axios.interceptors.request.use(config => {
  
  if (config.method == 'post') {
    let paramsString = '';
    for (let key in config.data) {
      paramsString += key + '=' + config.data[key] + '&'
    }
    config.data = paramsString.slice(0, -1);
  }

  return config;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
