<template>
    <div>
        <van-button class="arrowleftgo" @click="$router.go(-1)" plain hairline round icon="arrow-left" type="default" />
        <!-- 引入轮播图组件 -->
        <swiper :img="Images"></swiper>

        <div class="panel">
            <h1>{{goods.name}}</h1>
            <div class="price">￥{{goods.price}}</div>
            <div class="content">
                <font color="#ff4a00">「分期享12期免息，低至417元起/期」</font>向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存 / 50W极速闪充+30W无线闪充+10W无线反充 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热  / 4500mAh大电量 / 多功能NFC
            </div>
        </div>
        <div class="imgs">
            <img src="../assets/img/details1.jpg" alt="">
            <img src="../assets/img/details2.jpg" alt="">
            <img src="../assets/img/details3.jpg" alt="">
            <img src="../assets/img/details4.jpg" alt="">
        </div>

        <van-goods-action>
            <van-goods-action-icon 
            @click="$router.push('/')"
            icon="home-o"  
            color="#07c160"
            />
            <van-goods-action-icon 
            @click="$router.push('/cart')"
            icon="cart-o" 
            :badge="num"
            />
            <van-goods-action-icon icon="star" color="#ff5000" />
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const {mapState,mapMutations} = createNamespacedHelpers("cart");
    import swiper from "../components/public/swiper";
    export default {
        data() {
            return {
                Images:[
                    require("../assets/img/xiaomi1.jpg"),
                    require("../assets/img/xiaomi2.jpg"),
                    require("../assets/img/xiaomi3.jpg"),
                ],
                goods:{
                    id:6,
                    name:"小米10 Pro",
                    price:"4999",
                    num:1
                }
            }
        },
        methods:{
            // 直接调用vuex里面方法
            ...mapMutations(["add"])
        },
        computed:{
            ...mapState({
                num:state=>state.num
            })
        },
        components:{
            swiper,
        },
        created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
        
    }
</script>

<style lang="scss" scoped>
    .arrowleftgo{
        position:fixed;
        left:10px;
        top:10px;
        z-index: 200;
        font-size: 16px;
        width: 44px;
    }
    .panel{
        padding: 15px 15px 0px 15px;
        h1{
            font-size: 24px;
        }
        .content{
            font-size:14px;
        }
        .price{
            color:#ff6b00;
            font-size: 28px;
        }
    }
    
</style>