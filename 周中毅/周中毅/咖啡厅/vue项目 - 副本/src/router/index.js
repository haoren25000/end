import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['components/home/home'], resolve),
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
  ]
})
