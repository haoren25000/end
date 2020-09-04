<template>
    <div>
         <van-tabbar v-model="$store.state.active" :route="true"  class="foot">
      <van-tabbar-item to="/home" icon="like-o">猜你喜欢</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/person" icon="user-o">个人</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.foot{
  z-index: 11111111111111;
}
</style>