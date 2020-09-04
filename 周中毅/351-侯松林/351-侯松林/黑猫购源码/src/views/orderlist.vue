<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow 
            @click-left="$router.push('/person')"
        />
        <van-tabs v-model="active">
            <van-tab title="全部订单"  to="/orderlist/orderAll" ></van-tab>
            <van-tab title="待支付"    to="/orderlist/orderPay"></van-tab>
            <van-tab title="待收货"    to="/orderlist/orderGoods" ></van-tab>
            <van-tab title="已完成"    to="/orderlist/orderEnd" ></van-tab>
        </van-tabs>
        <!-- 二级路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                list:[
                    
                ]
            }
        },  
        methods:{
          
        },
       
    }
</script>

<style lang="scss" scoped>

</style>