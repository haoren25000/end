<template>
  <div id="app">
    <!-- 一级路由插座 -->
    <router-view></router-view>
    
  </div>
</template>

<style lang="less">
  //全局样式
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
    background-color: #f0f0f0;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .clearfix::after{
    content: '';
    display: block;
    clear: both;
  }
  .auto-img{
    width: 100%;
    display: block;
  }

  .one-text{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
