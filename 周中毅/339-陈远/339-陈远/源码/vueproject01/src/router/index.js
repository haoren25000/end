import Vue from "vue";
import VueRouter from "vue-router";
import main from "../views/main.vue";
import classfiy from "../views/classfiy.vue";
import shopcar from "./routes/shopcar";
import loging from "../views/loging.vue";
import good from "../views/good.vue";
import publics from "../router/routes/public";
Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/advertpage"
  },
  {
    path:"/main",
    component:main
  },
  {
    path:"/main/good",
    component:good
  },
  {
    path:"/classfiy",
    component:classfiy
  },
  ...shopcar,
  {
    path:"/loging",
    component:loging
  },
  {
    path:"/my",
    component:()=>import("../views/my.vue")
  },
  ...publics,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
