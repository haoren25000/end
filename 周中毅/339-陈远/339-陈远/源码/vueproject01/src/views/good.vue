<template>
    <div>
        <div class="good_img">
            <div class="jd_header_new_bar">
                <van-row>
                    <van-col span="2" class="arrow_left"><span @click="$router.go(-1)"></span></van-col>
                    <van-col span="20"></van-col>
                    <van-col span="2" class="arrow_right"><span></span></van-col>
                </van-row>
            </div>
            <img 
            src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/49676/27/13744/434845/5da849f6Ec2116572/d47d38378ade4b42.jpg!q80.dpg.webp" 
            style="width:100%;height:100%;"
            alt="">
            <img 
            src="https://img12.360buyimg.com/img/s750x100_jfs/t1/126365/6/2669/64461/5ec7a70bEa8cba91d/7aad1d2c0217bd6b.png.webp" 
            style="width:100%;height:100%;"
            alt="">
            <div class="price_wrap">
                <div class="price"></div>
                <div class="opration">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="good_struction">
                <span></span>
            </div>
        
        </div>


        <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服"  />
        <van-goods-action-icon icon="shop-o" text="店铺"/>
        <van-goods-action-icon icon="cart-o" @click="$router.push('/shopcar')" text="购物车" :badge="num"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="add(goods)" color="linear-gradient(to right,#DB5EF0,#B507EC) !important"/>
        <van-goods-action-button type="danger"  text="立即购买" color="linear-gradient(to right,#FF627C,#FF0D0D) !important" />
        </van-goods-action>
    </div>
</template>
<script>
import {createNamespacedHelpers} from "vuex";
const {mapState,mapMutations} = createNamespacedHelpers("shopcar");
export default {
    data(){
        return {
            // goods:[
            //     {
            //         id:1,
            //         img:"https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/58474/2/9456/444287/5d6cefc2E6fbc75fd/19eeb8adcfd2db8d.jpg!q70.dpg.webp",
            //         name:"华为 HUAWEI 畅享10 Plus 超高清全视屏前置悬浮式镜头4800万超广角AI三摄 8GB+128GB天空之境全网通双4G手机",
            //         price:1599,
            //         num:1
            //     },
            //     {
            //         id:2,
            //         img:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/117596/15/7821/259473/5ec61bc4Edcef4be9/4563064aeb4078b1.jpg!q70.dpg.webp",
            //         name:" 靓威（LW） 接待桌椅 洽谈桌椅组合接待桌椅组合圆形会客商务谈判桌椅钢化玻璃小餐桌圆桌套装阳台桌椅 单桌（颜色备注）",
            //         price:486,
            //         num:1
            //     },
            //     {
            //         id:3,
            //         img:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/89040/36/18883/261470/5e984c42E8e67cc2c/eecf4f5da3ed55ab.jpg!q70.dpg.webp",
            //         name:"2020年新茶绿茶明前高山云雾茶叶日照充足浓香型多规格可选 【活动中】 高山云雾【1斤装 赠半斤】实发一斤半 ",
            //         price:63,
            //         num:1
            //     },
            //     {
            //         id:4,
            //         img:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/80489/5/4010/98183/5d21fcf0E886a6275/370bf15e01b89481.jpg!q70.dpg.webp",
            //         name:"连衣裙夏天2019夏季新款流行女装气质修身显瘦包臀裙子 黑色 L 建议100-115斤",
            //         price:50,
            //         num:1
            //     },
            //     {
            //         id:5,
            //         img:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/47193/2/3369/231278/5d11cb39Ef3674059/ba3c0a1d956429e2.jpg!q70.dpg.webp",
            //         name:" 华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄麒麟980芯片8GB+128GB绮境森林全网通双4G手机 ",
            //         price:2399,
            //         num:1
            //     },
            //     {
            //         id:6,
            //         img:"https://img12.360buyimg.com/mobilecms/s372x372_jfs/t28906/30/1571661431/255345/986f5fcb/5ce4148aN55586a52.jpg!q70.dpg.webp",
            //         name:"荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 幻夜黑 全面屏手机 ",
            //         price:2299,
            //         num:1
            //     },               
            // ]
            goods:{
                id:3,
                img:"https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/49676/27/13744/434845/5da849f6Ec2116572/d47d38378ade4b42.jpg!q80.dpg.webp",
                name:"华为畅玩10Plus",
                price:"2399",
                num:1
            }
        }
    },
    methods:{
        ...mapMutations(["add"])
    },
    computed:{
        ...mapState({
            num:state=>state.num
        })
    },
    created(){
        this.$store.state.vanTabbar = false;
    },
    beforeDestroy(){
        this.$store.state.vanTabbar = true;
    }
}
</script>
<style lang="scss" scoped>

</style>