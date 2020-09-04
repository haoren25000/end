<template>
    <div>
        <van-tabbar class="van-tabbar" :route="true" v-model="active" active-color="#e1b658" inactive-color="#000">
  <van-tabbar-item to="/home/recommed" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item to="/shopping" icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
     export default {
     data() {
    return {
      active: 0,
    }
    }
  }
</script>

<style lang="scss" scoped>
.van-tabbar{
  z-index: 999;
  background-color: #fff;
}
</style>