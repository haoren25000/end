<template>
  <div id="app">
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    
  </div>
</template>
<script>
  import Header from 'components/header/header'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
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
