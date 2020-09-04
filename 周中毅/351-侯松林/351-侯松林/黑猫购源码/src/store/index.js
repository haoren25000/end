import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 购物数据
import cart from './cart'
// 地址数据
import address from './address'

// 订单数据
import order from './order'

export default new Vuex.Store({
  //数据状态data需要数据状态管理位置
  state: {
    vanTabbar:true,
    username:"",
    active:0,
  //   list:[
  //     {
  //         img:require("../assets/img/list1.jpg"),
  //         fcolor:"K KingMelnn/肯麦依",
  //         caption:"女士2020短款七分袖亚麻外套小西装",
  //         discount:"10元卷",
  //         price:"99"
  //     },
  //       {
  //        img:require("../assets/img/list2.jpg"),
  //         fcolor:"行更远",
  //         caption:"夏季宽松小清新刺绣短袖t恤五分袖",
  //         discount:"5元卷",
  //         price:"48"
  //     },
  //      {
  //         img:require("../assets/img/list3.jpg"),
  //         fcolor:">KSJD/卡斯加德",
  //         caption:"4g移动联通电信全网通电话手表wifi",
  //         discount:"80元卷",
  //         price:"299"
  //     },
  //      {
  //        img:require("../assets/img/list4.jpg"),
  //         fcolor:"行更远",
  //         caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
  //         discount:"80元卷",
  //         price:"299"
  //     },
  //      {
  //        img:require("../assets/img/list6.jpg"),
  //         fcolor:"Adidas/阿迪达斯",
  //         caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
  //         discount:"30元卷",
  //         price:"569"
  //     },
  //      {
  //        img:require("../assets/img/list5.jpg"),
  //         fcolor:"法犀卡",
  //         caption:"万装达举卡潮牌肥四季加大牛仔裤",
  //         discount:"10元卷",
  //         price:"139"
  //     },

      
  // ]
    
  },
  //定义处理data数据的方法
  mutations: {
  
  },
  // 定义处理state数据dstate方法,actions可以用mutaions方法.修改data的数据
  actions: {
  },
  modules: {
    cart,
    address,
    order
  }
})
