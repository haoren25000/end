    export default[
    {
        path:"/guidanpage",
        name:'引导页',
        component:()=>import("../../components/public/guidanpage.vue")
    },{
        path:'/vertpag',
        name:'广告',
        component:()=>import('../../components/public/vertpag.vue'),
        beforeEnter:(to,from,next)=>{
            if(localStorage.vertpag){
                next()
            }else{
                localStorage.vertpag=true,
                next("/guidanpage")
            }
        }

    },
    
]