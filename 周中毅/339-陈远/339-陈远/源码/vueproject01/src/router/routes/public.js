export default [
    {
        path:"/guidepage",
        name:"引导页",
        component:()=>import("../../components/public/guidepage.vue")
    },
    {
        path:"/advertpage",
        name:"广告页",
        component:()=>import("../../components/public/advertpage.vue"),
        beforeEnter: (to, from, next) => {
            // localStorage有数据则进入广告页
            if(localStorage.advertpage){
                next();
            }else{  // 2.没有数据，进入引导页
                localStorage.advertpage = true;
                next("/guidepage");
            }
        }
    }
]