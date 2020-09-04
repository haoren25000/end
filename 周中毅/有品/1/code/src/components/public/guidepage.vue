<template>
    <div>
        <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
        <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
        <!-- http://localhost:8080/guidepage  引导页 -->
        <!-- http://localhost:8080/advertpage  广告页 -->
        <!-- Swiper -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/images/yindao1.png" alt="">
                   
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/yindao2.png" alt="">
                   
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/yindao3.png" alt="">
                    <button class="btn"  @click="$router.push('/home/recommed')"></button>
                    <!-- <van-button plain type="primary" size="small" to="/home/recommed">点击体验</van-button> -->
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination guidepagepagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
       
        mounted(){
            new Swiper('.guidepagecontainer', {
                // direction: 'vertical',
                pagination: {
                    el: '.guidepagepagination',
                },
            });
        }
    }
</script>

<style lang="scss" scoped>  
    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width:100%;
        height: 100%;
    }
    .swiper-slide{
        text-align: center;
        position: relative;
        img{
           width: 100%;
           height: 100%;
        }
        h3{
            font-size: 20px;
            color:#404040;
        }
        .btn{
            z-index: 999;
            width: 115px;
            height: 22px;
            background-color: transparent;
            position: absolute;
            bottom: 93px;
            right: 135px;
        }
    }
</style>