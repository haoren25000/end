// 首页
export default [

        {
            path:"/phone",
            name:"手机",
            component:()=>import("../../components/home/phone.vue")
        },
        {
            path:"/ipad",
            name:"平板",
            component:()=>import("../../components/home/ipad.vue")
        },
        {
            path:"/computer",
            name:"电脑",
            component:()=>import("../../components/home/computer.vue")
        },
        {
            path:"/tv",
            name:"电视",
            component:()=>import("../../components/home/tv.vue")
        },
        {
            path:"/earphone",
            name:"耳机",
            component:()=>import("../../components/home/earphone.vue")
        },
        {
            path:"/camera",
            name:"电视",
            component:()=>import("../../components/home/camera.vue")
        },
        {
            path:"/airConditioning",
            name:"空调",
            component:()=>import("../../components/home/airConditioning.vue")
        }
   
    
    ]