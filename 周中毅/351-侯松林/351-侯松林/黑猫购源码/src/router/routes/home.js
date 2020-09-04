// 首页
export default 
 
    
    {
    
    path:'/home',
    name:"首页",
    component:()=>import("../../views/home.vue"),
   
    children:[
        {
            path:"choiceness",
            name:"精选",
            component:()=>import("../../components/home/choiceness.vue")
        },
        {
            path:"update",
            name:"今日更新",
            component:()=>import("../../components/home/update.vue")
        },
        {
            path:"motherBady",
            name:"母婴",
            component:()=>import("../../components/home/motherBady.vue")
        },
        {
            path:"outdoors",
            name:"户外",
            component:()=>import("../../components/home/outdoors.vue")
        },
        {
            path:"inward",
            name:"进口",
            component:()=>import("../../components/home/inward.vue")
        },
        {
            path:"underwear",
            name:"内衣",
            component:()=>import("../../components/home/underwear.vue")
        },
        {
            path:"furniture",
            name:"家具",
            component:()=>import("../../components/home/furniture.vue")
        },

    ]
}