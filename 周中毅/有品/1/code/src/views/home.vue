<template>
  <div>
    <!-- 搜索框 -->
    <div class="search auto">
      <div class="yp">
        <img src="../assets/images/youping.png" alt />
      </div>

      <div class="ypse">
        <van-search @focus="getSearch" shape="round" background="#845d32" placeholder="搜一搜" />
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="slide auto">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/lunbo1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo5.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo6.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/lunbo7.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 下面部分 -->
    <div class="below auto">
      <!-- 500元礼包 -->
      <div class="gift">
        <div class="gift_d1">
          <img src="../assets/images/tu1.png" alt />
        </div>
        <div class="gift_d2">
          <img src="../assets/images/tu2.png" alt />
        </div>
      </div>
      <!-- 大牌特惠 -->
      <div class="discount">
        <div class="dis_d1">
          <img src="../assets/images/tu3.png" alt />
        </div>
        <div class="dis_d1">
          <img src="../assets/images/tu4.png" alt />
        </div>
        <div class="dis_d1">
          <img src="../assets/images/tu5.png" alt />
        </div>
        <div class="dis_d1">
          <img src="../assets/images/tu6.png" alt />
        </div>
      </div>
      <!-- 每日上新 -->
      <div class="everyday">
        <div class="everyTop">
          <span class="eveF">每日上新</span>
          <span>
            更多
            <div class="eve2">
              <img src="../assets/images/eve2.png" alt />
            </div>
          </span>
        </div>
        <div class="everyBot">
          <!-- newswiper-container -->
          <div class="swiper-container newswiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide ss_every" v-for="(item2,index2) in topnew" :key="index2">
                <div class="every_img">
                  <img :src="item2.img" alt />
                </div>
                <div class="every_font">{{item2.des}}</div>
                <div class="presell1">
                  <img :src="item2.presell" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 小米有品众筹 -->
      <div class="crowd">
        <!-- 众筹上部分 -->
        <div class="crowd_top">
          <span>小米有品众筹</span>
          <span>
            更多
            <div class="cro2">
              <img src="../assets/images/eve2.png" alt />
            </div>
          </span>
        </div>
        <div class="crowd_center">
          <p>叮零限位报警器</p>
          <div class="crowd_show">
            <van-notice-bar
              :scrollable="false"
              color="#8a5619"
              style="font-size:12px;width:100%;height:100%;"
            >锁定开窗大小 撞击感应报警 手机远程通知 智能联动控制</van-notice-bar>
          </div>
          <div class="crowd_money">
            <span>¥</span>
            <span>69</span>
            <span>起</span>
          </div>
          <div class="crowd_img1">
            <img src="../assets/images/cro_2.png" alt="cro_2" />
          </div>
          <div class="crowd_sup">
            <p>
              支持人数&nbsp;&nbsp;
              <span>4563</span>&nbsp;&nbsp;/ &nbsp;&nbsp;完成度&nbsp;&nbsp;
              <span>45%</span>
            </p>
            <div class="su1">
              <div class="su2"></div>
            </div>
          </div>
        </div>
        <!-- 众筹下部分 -->
        <div class="crowd_bottom">
          <div class="cb_left">
            <span>偏光近视太阳镜</span>
            <div class="cb_money">
              <span>¥</span>
              <span>199</span>
              <span>起</span>
            </div>
            <div class="hot_bot">
              <span>
                <img src="../assets/images/hot.png" alt />
              </span>
              <span class="hb_sp1">支持人数</span>
              <span class="hb_sp2">3026</span>
            </div>
            <div class="hot_xian"></div>
            <div class="cbl">
              <img src="../assets/images/glass.png" alt />
            </div>
          </div>
          <div class="cb_right">
            <span>纳米微雕足金吊坠</span>
            <div class="cb_money2">
              <span>¥</span>
              <span>2399</span>
              <span>起</span>
            </div>
            <div class="hot_bot2">
              <span>
                <img src="../assets/images/hot.png" alt />
              </span>
              <span class="hb_sp12">支持人数</span>
              <span class="hb_sp22">577</span>
            </div>
            <div class="hot_xian2"></div>
            <div class="cbl2">
              <img src="../assets/images/necklace.png" alt />
            </div>
          </div>
        </div>
      </div>
      <!-- 热销榜 -->
      <div class="hot_sale">
        <!-- 热销榜上部分 -->
        <div class="hot_sale_Top">
          <span>热销榜</span>
          <span>排序由销量、搜索、好评等综合得出</span>
          <span>
            更多
            <span class="hs_t">
              <img src="../assets/images/eve2.png" alt />
            </span>
          </span>
        </div>
        <!-- 热销榜下部分 -->
        <div class="hot_sale_Bot">
          <div class="swiper-container homeNavSwiperContainer" style="height:100%">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in hot" :key="index">
                <div class="numb">
                  <img :src="item.src2" alt />
                </div>
                <div class="swImg1">
                  <img :src="item.src1" alt />
                </div>
                <van-notice-bar :scrollable="false" class="van-notice-bar2">{{item.show}}</van-notice-bar>
                <div class="swImg_bot">
                  <div>{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <!-- 特卖汇 -->
        <div class="special">
          <div class="spe" v-for="(item3,index3) in spe" :key="index3">
            <div class="spe_font">{{item3.h1}}</div>
            <div class="spe_font2">{{item3.show}}</div>
            <div class="spe_img"><img :src="item3.img" alt=""></div>
          </div>
        </div>
        <!-- 特卖汇 -->
    </div>
    <!-- 推荐选项卡菜单 -->
    <div class="menu">
        <div class="swiper-container menu-swiper" style="height:100%;">
	<div class="swiper-wrapper">
		<div class="swiper-slide swiper_s con af">
			<router-link @click.native="i=0" :class="{act:i==0}" tag="span" to="/home/recommed"> 推荐</router-link> </div>
		<div class="swiper-slide swiper_s af">
		<router-link @click.native="i=1" :class="{act:i==1}" tag="span" to="/home/capacity">智能</router-link>	 </div>
		<div class="swiper-slide swiper_s af">
			<router-link @click.native="i=2" :class="{act:i==2}" tag="span" to="/home/electric">电器</router-link></div>
		<div class="swiper-slide swiper_s af">
			<router-link @click.native="i=3" :class="{act:i==3}" tag="span" to="/home/life">生活</router-link></div>
      <div class="swiper-slide swiper_s af">
			<router-link @click.native="i=4" :class="{act:i==4}" tag="span" to="/home/fashion">时尚</router-link></div>
      <div class="swiper-slide swiper_s">
			<router-link @click.native="i=5" :class="{act:i==5}" tag="span" to="/home/discounts">特惠</router-link></div>
	
	</div>
</div>
    </div>
    <router-view></router-view>
    <vantabber></vantabber>
  </div>
</template>

<script>
import Swiper from "swiper";
import vantabber from "../components/public/vantabbar.vue"
export default {
  data() {
    return {
     i:0,
      spe:[
        {img:require("../assets/images/spe1.png"),h1:"特卖汇",show:"精选品牌特卖"},
        {img:require("../assets/images/spe2.png"),h1:"优惠中心",show:"天天享优惠"},
        {img:require("../assets/images/spe3.png"),h1:"选购指南",show:"达人教你买"},
        {img:require("../assets/images/spe4.png"),h1:"好店精选",show:"逛好店享特惠"},
        
      ],
      topnew: [
        {
          img: require("../assets/images/tu11.png"),
          des: "Redmi X 4G"
        },
        {
          img: require("../assets/images/tu12.png"),
          des: "RedmiBook 16",
          presell: require("../assets/images/presell.png")
        },
        {
          img: require("../assets/images/tu13.png"),
          des: "Redmi 10X"
        },
        {
          img: require("../assets/images/tu14.png"),
          des: "充电宝/充电器"
        },
        {
          img: require("../assets/images/tu15.png"),
          des: "领大额券兰蔻眼霜"
        },
        {
          img: require("../assets/images/tu16.png"),
          des: "Redmi 电视 X55",
          presell: require("../assets/images/presell.png")
        },
        {
          img: require("../assets/images/tu17.png"),
          des: "飞利浦智睿台灯"
        },
        {
          img: require("../assets/images/tu18.png"),
          des: "天然软木拼接地垫"
        }
      ],
      hot: [
        {
          src1: require("../assets/images/hot1.png"),
          src2: require("../assets/images/one.png"),
          show: "智能扫拖机器人",
          name: "米家扫拖机器人"
        },
        {
          src1: require("../assets/images/hot2.png"),
          src2: require("../assets/images/two.png"),
          show: "21:9超宽鱼屏,144高刷新率",
          name: "小米显示器34英寸"
        },
        {
          src1: require("../assets/images/hot3.png"),
          src2: require("../assets/images/three.png"),
          show: "AI语音控制",
          name: "云米大屏冰箱450L"
        },
        {
          src1: require("../assets/images/hot4.png"),
          src2: require("../assets/images/four.png"),
          show: "600加仑大流量",
          name: "小米净水器 600G"
        },
        {
          src1: require("../assets/images/hot5.png"),
          src2: require("../assets/images/five.png"),
          show: "智能一键洗衣 水位高低自调",
          name: "云米8kg波轮"
        },
        {
          src1: require("../assets/images/hot6.png"),
          src2: require("../assets/images/six.png"),
          show: "一步推拉,6种开锁方式",
          name: "智能门锁推拉式"
        },
        {
          src1: require("../assets/images/hot7.png"),
          src2: require("../assets/images/seven.png"),
          show: "4K HDR,人工智能语音",
          name: "Redmi 70英寸"
        },
        {
          src1: require("../assets/images/hot8.png"),
          src2: require("../assets/images/eight.png"),
          show: "300³/h 智能控制",
          name: "米家新风机"
        },
        {
          src1: require("../assets/images/hot9.png"),
          src2: require("../assets/images/nine.png"),
          show: "OLED智慧彩屏,吸拖一体",
          name: "睿米吸尘器NEX 2"
        }
      ]
    };
  },
  methods: {
    getSearch(){
      this.$router.push("/search")
    }
  },
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 3, //显示个数
      freeMode: true
    });

    new Swiper(".newswiper-container", {
      slidesPerView: 3.5, //显示个数
      freeMode: true
    });
     new Swiper(".menu-swiper", {
      slidesPerView: 4, //显示个数
      freeMode: true
    });
  },
  components:{
    vantabber
  }
};
</script>

<style lang="scss" scoped>

.menu{
  margin-top: 10px;
  width: 100%;
  height: 50px;
  // background-color: pink;
}
.swiper_s{
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  line-height: 50px;
  color: #333333;
 
}

.act{
  font-size: 20px;
  color: #c41429;
}
.swiper_s span{
  position: relative;
  margin-left: 4px;
}
.swiper_s .act::after{
  content:"";
 background-color:#c41429 ;
  position: absolute;
  left: 10px;
  bottom: -4px;
  width: 60%;
  height: 3px;
  
}
.af{
  position: relative;
}
.af::after{
 content:"";
 width: 1px;
 height: 24px;
 position: absolute;
 top: 16px;
 right: 0px;
 background-color: #ddd;

}



.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
.van-search {
  height: 50px;
}
.search {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #845d32;
  // position: relative;
  z-index: 1000;
}
.yp {
  width: 15%;
  height: 100%;
  line-height: 50px;
  text-align: right;
  float: left;
  // display: inline-block;
  // width: 40px;
  // height: 30px;
  // background-image: url("../assets/images/youping.png");
  // background-size: cover;
  // margin-top: 10px;
  // margin-left: 16px;
}
.yp img {
  display: inline-block;
  width: 40px;
  height: 30px;
}
.ypse {
  width: 85%;
  height: 100%;
  float: right;
  // background-color: pink;
}

.slide {
  margin-top: 50px;
  width: 100%;
  height: 150px;
  // display: block;
  // background-color: pink;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 150px;
  display: block;
}
.below {
  //   height: 800px;
  background: #f4f4f4;
  width: 100%;
  padding: 0 10px;
  // margin-bottom: 50px;
}
.gift {
  padding-top: 5px;
  width: 100%;
  height: 120px;
  // background-color: pink;
}
.gift_d1 {
  width: 50%;
  float: left;
  // height: 50px;
}
.gift_d1 > img {
  width: 99%;
  height: 110px;
}
.gift_d2 {
  width: 50%;
  float: left;
  // height: 50px;
}
.gift_d2 > img {
  float: right;
  width: 99%;
  height: 110px;
}
.discount {
  width: 100%;
  height: 235px;
  // background-color: slateblue;
  padding-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dis_d1 {
  width: 49%;
  height: 110px;
}
.dis_d1 > img {
  width: 100%;
  height: 110px;
}
.everyday {
  width: 100%;
  height: 190px;
  background-color: #fffafa;
  padding: 5px 0;
  border-radius: 5px;
}
.everyTop {
  width: 100%;
  height: 20px;
  margin-top: 5px;

  // background-color: skyblue;
}
.everyTop span:nth-child(1) {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
}
.everyTop span:nth-child(2) {
  font-size: 12px;
  float: right;
  line-height: 25px;
  margin-right: 10px;
  color: #999999;
}
.eve2 {
  float: right;
  margin-top: 7px;
  margin-left: 2px;
  width: 5px;
  height: 10px;
}
.everyBot {
  width: 100%;
  height: 140px;
  margin-top: 15px;
  // background-color: #fffafa;
  overflow: hidden;
  padding-left: 10px;
}

.crowd {
  width: 100%;
  height: 300px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 5px;
}
.crowd_top {
  background-image: url("../assets/images/crowd_1.png");
  background-size: cover;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  line-height: 60px;
}
.crowd_top span:nth-child(1) {
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
}
.crowd_top span:nth-child(2) {
  font-size: 12px;
  float: right;

  margin-right: 10px;
  color: #999999;
}
.cro2 {
  display: inline-block;
  width: 5px;
  height: 10px;
}
.crowd_center {
  width: 100%;
  height: 120px;
  // background-color: pink;
  padding: 0 10px;
  position: relative;
}
.crowd_center p {
  font-size: 16px;
}
.crowd_show {
  width: 210px;
  height: 18px;
}
.crowd_money span:nth-child(1) {
  color: red;
  font-weight: 700;
}
.crowd_money span:nth-child(2) {
  color: red;
  font-size: 14px;
  font-weight: 700;
}
.crowd_money span:nth-child(3) {
  color: red;
  font-weight: 700;
}
.crowd_img1 {
  width: 130px;
  height: 130px;
  position: absolute;
  top: -10px;
  right: 0;
}
.crowd_sup {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.crowd_sup p {
  font-size: 12px;
}
.crowd_sup p span {
  color: #fec067;
}
.su1 {
  width: 95%;
  height: 4px;
  border-radius: 20px;
  background-color: #e1e1e1;
  position: relative;
}
.su2 {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ff702b;
  border-radius: 20px;
}

.crowd_bottom {
  width: 100%;
  height: 120px;
  padding: 10px;
  position: relative;
}
.cb_left {
  width: 50%;
  font-size: 13px;
  position: relative;
  float: left;
}
.cb_money {
  color: red;
  font-weight: 700;
}
.cb_money span:nth-child(1) {
  font-size: 13px;
}
.cb_money span:nth-child(3) {
  font-size: 13px;
}
.hot_bot img {
  width: 18px;
  height: 18px;
  float: left;
}
.hot_bot {
  margin-top: 40px;
}
.hot {
  width: 18px;
  height: 18px;
}
.hb_sp1 {
  font-size: 12px;
  margin-left: 5px;
}
.hb_sp2 {
  color: #fec879;
}

.hot_xian {
  width: 90%;
  height: 4px;
  background-color: #ff702b;
  // margin-top: 5px;
}
.cbl {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 20px;
  right: 10px;
}
.cb_right {
  width: 50%;
  font-size: 13px;
  position: relative;
  float: right;
}
.cb_money2 {
  color: red;
  font-weight: 700;
}
.cb_money2 span:nth-child(1) {
  font-size: 13px;
}
.cb_money2 span:nth-child(3) {
  font-size: 13px;
}
.hot_bot2 img {
  width: 18px;
  height: 18px;
  float: left;
}
.hot_bot2 {
  margin-top: 40px;
}
.hot2 {
  width: 18px;
  height: 18px;
}
.hb_sp12 {
  font-size: 12px;
  margin-left: 5px;
}
.hb_sp22 {
  color: #fec879;
}

.hot_xian2 {
  width: 90%;
  height: 4px;
  background-color: #ff702b;
  // margin-top: 5px;
}
.cbl2 {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 20px;
  right: 0;
}
.hot_sale {
  width: 100%;
  height: 220px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 5px;
  // padding: 0 10px;
  padding-left: 10px;
}
.hot_sale_Top {
  width: 100%;
  height: 50px;
  // background-color: pink;
  line-height: 50px;
}
.hot_sale_Top span:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
  color: #333333;
}
.hot_sale_Top span:nth-child(2) {
  font-size: 10px;
  color: #999999;
  margin-left: 10px;
}
.hot_sale_Top span:nth-child(3) {
  font-size: 12px;
  color: #999999;
  float: right;
  margin-right: 10px;
}
.hs_t {
  width: 5px;
  height: 1px;
  float: right;
  margin-top: 20px;
  margin-left: 2px;
}
.hot_sale_Bot {
  width: 97%;
  height: 160px;
  // background-color: skyblue;
  // padding-right: 10px;
  overflow: hidden;
  border-radius: 5px;
}
.swiper-slide {
  // margin-left: 10px;
  // background-color: pink;
  width: 110px;
  position: relative;
  border-radius: 5px;
  padding-right: 10px;
}
.swImg1 {
  width: 100%;
  height: 60%;
  background-color: #f7f7f7;
}
.swImg1 img {
  width: 95%;
  height: 95%;
}
.numb {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 0;
  left: 0;
}
.van-notice-bar2 {
  position: absolute;
  top: 95px;
  width: 91%;
  height: 20px;
  font-size: 12px;
  background-color: #ff5a1b;
  color: #fff;
}
.swImg_bot {
  width: 100%;
  height: 40%;
  text-align: center;
  line-height: 70px;
  color: #7d4402;
  font-size: 12px;
  background-color: #fbdeaf;
  border-radius: 5px;
}
.swImg_bot div {
  width: 90px;
  position: relative;
  bottom: 0px;
  left: 7px;
}

.newswiper-container {
  width: 100%;
  height: 100%;
}
// .every_img{
//   height: 70%;
// }
.every_font {
  color: #333333;
  text-align: center;
}
.presell1 {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
}
.ss_every {
  position: relative;
}
.spe{
  width: 25%;
  height: 100%;
  float: left;
 
  // background-color: skyblue;
}
.spe_font{
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #333333;
}
.spe_font2{
  color: #d3993c;
  text-align: center;
}
.spe_img{
  width: 100%;
  height: 84px;
}
.special{
  width: 100%;
  height: 140px;
  background-color: #fff;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>