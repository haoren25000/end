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
                    <img src="../../assets/img/guide1.jpg" alt="">
                    <!-- <h3>渐进式Javascript框架</h3> -->
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/guide2.jpg" alt="">
                    <!-- <h3>打包所有文件工具. <br>
                        脚本，图片，样式表，资源。。。
                    </h3> -->
                </div>
                <div class="swiper-slide">
                    <div class="bottom">
                        <img src="../../assets/img/guide3.jpg" alt="">
                        <!-- <h3>轻量、可靠的移动端 Vue 组件库</h3> -->
                        <van-button class="btn" plain type="primary" size="normal" to="/home/recommend">点击体验</van-button>
                    </div>
                    
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
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
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
        .bottom{
            position: relative;
            .btn{
                position: absolute;
                bottom: 5rem;
                left: 10.5rem;
            }
        }
        
    }
</style>