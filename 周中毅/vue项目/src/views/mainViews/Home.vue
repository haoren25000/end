<template>
  <div class="home">
   <van-row class="top-nav">
    <van-col span="3"> 
    </van-col>
    <van-col span="18">
      <van-search placeholder="请输入搜索关键词" />
    </van-col>
    <van-col span="3">
      <van-icon name="manager-o" color="rgb(231, 219, 219)" class="icon"  @click="goMy"/>
    </van-col>
   </van-row>
   <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
       <img src="../../assets/images/banner01.jpg" alt />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../../assets/images/banner02.jpg" alt />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../../assets/images/banner03.jpg" alt />
    </van-swipe-item>
    </van-swipe>
   </div>
    
    <div class="swiper-container homeNavSwiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in tabBarData" :key="index" @click="gorouter">
          {{item.title}}
        </div>
      </div>
    </div>
   <div>
    <router-view></router-view>

   </div>
</div>   
</template>

<script>
import { Toast } from 'vant';

 export default {
     data() {
      return {
        tabBarName: 0,
        
        //底部导航数据
        tabBarData: [
          {
            title: '主页',
            routeName: 'Recommend',
             url: '/home/recommend'
          },
          {
            title: '订单',
            routeName: 'Intelligence',
            url: '/home/recommend'
          },
        ]
      }
     },
    methods: {
      goMy(){
      this.$router.push({name: 'My'});
      },
      goMenu(){
      this.$router.push({name: 'Menu'})
      },
      gorouter(){
        this.$router.push({name:'routerName'})
      }
    } 
  
 
 }
</script>

<style lang="less" scoped>
 
  .top-nav {
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #2a1b1d;
  .icon{
    font-size: 28px;
    line-height: 28px;
    height: 28px;
    margin-top: 7px;
  }
  .van-search {
    height: 34px;
    margin: 5px 0;
  }
  .van-search__content {
    background-color: rgb(231, 219, 219);
  }
}
  .swiper-wrapper {
    height: 30px;
    width: 100%;
    display: flex;
    position: relative;
  }
  .swiper-slide {
    width: 50%;
     height: 100%;
     line-height: 30px;
    color:#2a1b1d;
    text-align: center;
    border: 1px solid#2a1b1d;
    border-top: none;
    &.active{
          background-color: #2a1b1d;
          color: white;
        }
  }
  .van-col--3 {
    width: 12.5%;
    HEIGHT: 100%;
  }
  .my-swipe .van-swipe-item {
   height: 200px;
   width: 375px;
  }
  .van-button__content{
    width: 70px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: #2a1b1d;
    color: white;
    margin-left: 275px;
    margin-top: -60px;
    position: fixed;
  }
 .van-card__title{
   text-align: center;
 }

</style>