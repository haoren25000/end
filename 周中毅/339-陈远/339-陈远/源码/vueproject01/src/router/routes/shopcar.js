export default [
    {
        path:"/shopcar",
        name:"购物车",
        component:()=>import("../../views/shopcar.vue")
    },
    {
        path:"/order",
        name:"订单",
        component:()=>import("../../components/shopcar/order.vue")
    }
]