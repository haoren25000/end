import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from 'components/header/header'

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


new Vue({
  router,
  store,
  components: {App},
  template: '<App/>'
})
