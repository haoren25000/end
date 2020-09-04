import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import cart from "./cart";
import address from "./address";
import search from "./search";





// import address from "./address";
export default new Vuex.Store({
  state: {
    vanTabbar:true,//底部导航
    active: 0,
  },
  mutations: {
   
  },
  actions: {},
  modules: {
    cart,//购物车
  address,//地址,
    search,//搜索
   
  }
});
