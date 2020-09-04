<template>
    <div>
<!-- Swiper -->
        <div class="swiper-container guidepagecontainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/img/guidepag2.jpg" alt="">
                    <h3>这是京东</h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/guidepag3.jpg" alt="">
                    <h3>一个实现你购物理想的地方 <br>
                        食品，服饰，手办，陶瓷...
                    </h3>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/guidepag4.jpg" alt="">
                    <h3>欢迎来到购物海洋</h3>
                    <van-button plain type="primary" size="small" to="/main">点击开始体验</van-button>
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
        img{
            margin: 100px auto 0 auto;
            width:200px;
            height:400px;
        }
        h3{
            font-size: 20px;
            color:linear-gradient(90deg, #00C2AB,#3E94FF);
        }
    }
</style>