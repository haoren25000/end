import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import home from "./routes/home.js";
import classify from "./routes/classify.js";
import shopping from "./routes/shopping.js";
import my from "./routes/my.js";
import search from "./routes/search.js";
import detailpage from "./detail/detailpage1.js";
import order from "./detail/order.js";
import publics from "./routes/publics"
import address from "./routes/address.js";
import allorder from "./routes/allorder.js";




const routes = [
    {path:'/',redirect:'/advertpage'},
    home,//主页
    classify,//分类页
   ...shopping,//购物车
    my, //我的
    search,//搜索页
    detailpage,//详情页
    order, //确认订单
     ...address,//地址
    ...publics,//公共路由
    ...allorder,//全部订单

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  //  scrollBehavior(to,from,saveTop){ if(saveTop){ return saveTop; }else{ return {x:0,y:0} } }, 
  // linkActiveClass:'con'
});

export default router;
