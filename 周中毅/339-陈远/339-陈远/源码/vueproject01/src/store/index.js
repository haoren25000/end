import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import shopcar from "./shopcar"
export default new Vuex.Store({
  state: {
    vanTabbar:true,
  },
  mutations: {},
  actions: {},
  modules: {
    shopcar
  }
});
