export default [
    {
        path:'/person',
        name:"我的",
        component:()=>import("../../views/person.vue")
    },
    {
        path:'/login',
        name:"登陆",
        component:()=>import("../../components/person/login.vue")
    },
    {
        path:'/register',
        name:"注册",
        component:()=>import("../../components/person/register.vue")
    },
]