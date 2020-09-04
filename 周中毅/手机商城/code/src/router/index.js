import Vue from "vue";
import VueRouter from "vue-router";
import home from "./router/home";
import classify from "./router/classify";
import cart from "./router/cart";

import search from "./router/search";
import detalis from "./router/detalis"
import publics from "./router/publics";
import address from "./router/address";
import order from "./router/order";
import nav from "./router/nav"
import person from "./router/person"
Vue.use(VueRouter);

const routes = [
  {path:"/",redirect:"/advertpage"},
 
  home,     //首页
  classify, //分类
  ...cart,     //购物车
        //我的
  search,   //搜索
  detalis,
  ...person,
  ...publics, //公共路由
  ...address,
  ...order,
  ...nav
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
