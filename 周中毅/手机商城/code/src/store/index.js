import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import cart from "./cart";
import address from "./address";
import order from "./order";
export default new Vuex.Store({
  state: {
    
    username:null,//用户名
    active:0,
    lists:[
    
  ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,  
    address ,
    order
  }
})
