<template>
    <div>
         
        <van-tabbar id="vanTabbar" v-model="$store.state.active" :route="true" >
            <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/classify" icon="bar-chart-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/person" icon="user-o">我的</van-tabbar-item>`
        </van-tabbar>
    </div>
</template>

<script>
    export default {
      data(){
          return{
             
          }
      }
    }
</script>

<style lang="scss" scoped>
.van-tabbar{
    
  z-index: 1000;
  background-color: #fff;
}
</style>