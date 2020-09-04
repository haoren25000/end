<template>
    <div>
        <!-- 顶部导航 -->
        <van-row class="topsearchNav">
            <van-col span="3"><span class="iconfont icon-xiaomi"></span></van-col>
            <van-col span="18">
                <van-search @focus="getSearch" placeholder="搜索商品名称" />
            </van-col>
            <van-col span="3"><span class="iconfont icon-yonghu"></span></van-col>
        </van-row>
        <!-- 顶部导航end -->
        <!-- 首页导航 -->
            <div class="swiper-container homeNavSwiperContainer">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <router-link to="/home/recommend">推荐</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/phone">手机</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/intelligence">智能</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/televisions">电视</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/notebook">笔记本</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/electricity">家电</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/televisions">电视</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/notebook">笔记本</router-link>
                </div>
                <div class="swiper-slide">
                    <router-link to="/home/electricity">家电</router-link>
                </div>
                </div>
            </div>
        <!-- 首页导航 end -->
            <!-- 二级路由 -->
            <router-view></router-view>
            <vantabber></vantabber>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            }
        },
        // 注意：swiper必须要在页面渲染到浏览器后mounted钩子函数中才能运行
        mounted(){
            new Swiper('.homeNavSwiperContainer', {
                    slidesPerView: 6, //显示个数
                    freeMode: true,
            });
        },
        created(){
            this.$store.state.active = 0;
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
    .topsearchNav{
        background-color: #F2F2F2;
        .icon-xiaomi{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#ff6B00;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-yonghu{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

      /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>