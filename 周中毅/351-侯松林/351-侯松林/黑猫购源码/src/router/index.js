import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
// 主页
import home from "./routes/home"
// 注册
import login from "./routes/login"
// 登录
import register from "./routes/register"
// 分类
import classify from './routes/classify'
// 个人中心
import person from "./routes/person"
// 详情
import details from "./routes/details"
//搜索
import search from "./routes/search"
// 购物车
import cart from './routes/cart'
// 公共组件
import publics from './routes/public'
// 地址
import address from './routes/address'
// 订单流程
import orderlist from './routes/orderlist'
// 设置
import setress from  './routes/setress'

  const routes = [
    {
      path:'/',
      redirect:'/vertpag'
    },
 
  home, // 首页
  login,//登录页
  register,//注册页
  classify,//分类页
  person,//个人中心
  details,//详情页
  search,//搜索页
  ...cart,//购物车
  ...publics,//公共组件
  ...address,//地址组件
  ...orderlist,//订单组件
  setress,//设置按钮页
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
    console.log("进入路由==>" , to.path);
    console.log("离开路由==>" , from.path);

  
   if(to.path=="/home"){
     next("/home/choiceness")
   }else{
     next()
   }
})
export default router
