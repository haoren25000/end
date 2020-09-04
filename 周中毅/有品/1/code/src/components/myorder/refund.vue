<template>
    <div>
        <div class="nav">
         <router-link to="/orderlist/allor" tag="div" >全部</router-link>
    <router-link to="/orderlist/obligation" tag="div">待付款</router-link>
    <router-link to="/orderlist/wait" tag="div" >待收货</router-link>
    <router-link to="/orderlist/refund" tag="div" class="acti">退款订单</router-link>
    <router-link to="/orderlist/received" tag="div">已收货</router-link>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    height: 50px;
    background-color: #f4f4f4;
    position: fixed;
    top: 45px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.nav ul{
    width: 100%;
    height: 100%;
}
.acti{
    // width: 60px;
    padding: 0 8px;
    height: 25px;
    background-color: #deb354;
    border-radius: 15px;
    color: #fff;
    text-align: center;
    line-height: 25px;
}
</style>