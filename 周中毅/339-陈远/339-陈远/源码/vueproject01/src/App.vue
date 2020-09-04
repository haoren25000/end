<template>
  <div id="app">
    <main></main>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active"  active-color="#e43130"  v-show="$store.state.vanTabbar">
      <van-tabbar-item name="home"  to="/main" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item name="search"  to="/classfiy" icon="bar-chart-o">分类</van-tabbar-item>
      <van-tabbar-item name="friends"  to="/shopcar" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item name="setting"  to="/loging" icon="user-o">未登录</van-tabbar-item>
    </van-tabbar>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active: 'home',
    }
  }
}
</script>
<style lang="scss">
.van-tabbar{
  width: 100%;
  .routerlist{
    width: 20%;
  }
}
</style>