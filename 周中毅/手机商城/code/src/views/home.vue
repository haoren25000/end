<template>
  <div class="container">
    <!-- 头部指引 -->
    <van-row class="header">
      <van-col span="11"></van-col>
      <van-col span="2">
        <img src="../assets/images/logo.jpg" alt />
      </van-col>
      <van-col span="11"></van-col>
    </van-row>
    <div class="search">
      <van-sticky :offset-top="0">
        <van-search
          v-model="value"
          shape="round"
          background="white"
          placeholder="请输入搜索关键词"
          @focus="go"
        />
      </van-sticky>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#c91820">
        <van-swipe-item>
          <img
            src="https://resource.smartisan.com/resource/a005f08114e24bd71e125e5ba21815c7.png?x-oss-process=image/resize,w_800/format,webp"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://resource.smartisan.com/resource/efe5f94bdd62590001ca3798ceac3b37.png?x-oss-process=image/resize,w_800/format,webp"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://resource.smartisan.com/resource/6f11edcc28bc7f16f26e4872cdc42a29.png?x-oss-process=image/resize,w_800/format,webp"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://resource.smartisan.com/resource/f7dceef710abe6ab3ec20ae1e557c47b.png?x-oss-process=image/resize,w_800/format,webp"
            alt
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中间导航 -->
    <div class="navshow">
      <van-grid v-for="(item,index) in images" :key="index">
        <van-grid-item :icon="item.src1" :text="item.text1" :to="item.to1" />
        <van-grid-item :icon="item.src2" :text="item.text2" :to="item.to2" />
        <van-grid-item :icon="item.src3" :text="item.text3" :to="item.to3" />
        <van-grid-item :icon="item.src4" :text="item.text4" :to="item.to4" />
      </van-grid>
    </div>
    <!-- 优惠 -->
    <div class="presale">
      <img src="https://image3.suning.cn/uimg/cms/img/159014737585062550.gif" alt />
    </div>
    <!-- 滑动商品列表 -->
    <div class="flownav">
      <div class="img">
        <img
          src="https://resource.smartisan.com/resource/6406eb2ee823cd1025d49fa3e9e40828.png?x-oss-process=image/resize,w_746/format,webp"
          alt
        />
      </div>
      <div class="swiper-container homeNavSwiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannernavimages" :key="index">
            <router-link to="/detalis">
            <div class="white">
              <img :src="item.way" alt />
              </div>
              <span style="font-size:10px">
                <b>{{item.name}}</b>
              </span>
              <p style="font-size:14px;color:red">
               {{item.price}}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flownav" style="margin-top:15px">
      <div class="img">
        <img
          src="https://resource.smartisan.com/resource/588e2099e68722fde92287aa90b7f3b9.png?x-oss-process=image/resize,w_700/format,webp"
          alt
        />
      </div>
      <div class="swiper-container homeNavSwiperContainer">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerimages" :key="index">
            <router-link to="/detalis">
              <img :src="item.pass" alt />
               <span style="font-size:10px">
                <b>{{item.name}}</b>
              </span>
              <p style="font-size:14px;color:red">
               {{item.price}}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="goods">
      <!-- 组件引入 -->
      <recommend></recommend>
    </div>
    <div class="bottom">
      <h1>到底啦</h1>
      <van-row>
        <van-col span="8">100%正品保证</van-col>
        <van-col span="8">急速物流</van-col>
        <van-col span="8">优质售后</van-col>
      </van-row>
    </div>
    <vantabber></vantabber>
  </div>
</template>
<script>
import Swiper from "swiper";
import vantabber from "../components/public/vantabber";
import recommend from "../components/public/recommend";
export default {
  data() {
    return {
      value: "",
      //导航区图片
      images: [
        {
          src1: require("../assets/images/nav (3).png"),
          src2: require("../assets/images/nav (1).png"),
          src3: require("../assets/images/nav (2).jpg"),
          src4: require("../assets/images/nav (3).jpg"),
          to1: "/phone",
          to2: "/ipad",
          to3: "/computer",
          to4: "/tv",
          text1: "手机专区",
          text2: "平板专区",
          text3: "电脑专区",
          text4: "电视专区"
        },
        {
          src1: require("../assets/images/nav (1).jpg"),
          src2: require("../assets/images/nav (7).jpg"),
          src3: require("../assets/images/nav (8).jpg"),
          src4:
            "https://image1.suning.cn/uimg/cms/img/158225135374622745.png?format=_is_120w_120h.webp",
          to1: "/earphone",
          to2: "/camera",
          to3: "/airConditioning",
          to4: "/classify",
          text1: "耳机专区",
          text2: "相机专区",
          text3: "空调专区",
          text4: "更多频道"
        }
      ],
      //滑动1区图片
      bannernavimages: [
        { way: require("../assets/images/bannernav1.webp"), name: "坚果pro3",price:"￥3999" },
        { way: require("../assets/images/bannernav2.webp"), name: "坚果pro2",price:"￥2999" },
        { way: require("../assets/images/bannernav3.webp"), name: "坚果pro1",price:"￥1999" },
        { way: require("../assets/images/bannernav1.webp"), name: "坚果pro3",price:"￥3999" },
        { way: require("../assets/images/bannernav1.webp"), name: "坚果pro3",price:"￥3999" },
        { 
         // way: require("../assets/images/bannernav1.webp"), 
          name: "" },
        //{ way: require("../assets/images/bannernav1.webp"), name: "坚果pro3" }
      ],
      //滑动2区图片
      bannerimages: [
        { pass: require("../assets/images/banner1.webp"), name: "GoBiggeR" ,price:"￥3999"},
        { pass: require("../assets/images/banner2.webp"), name: "GoBiggeR" ,price:"￥3999"},
        { pass: require("../assets/images/banner3.webp"), name: "GoBiggeR" ,price:"￥3999"},
        { pass: require("../assets/images/banner4.webp"), name: "GoBiggeR" ,price:"￥3999"},
        { pass: require("../assets/images/banner1.webp"), name: "GoBiggeR" ,price:"￥3999"},
        { pass: require("../assets/images/banner2.webp"), name: "GoBiggeR" ,price:"￥3999"},
         { name: "" ,price:""}
      ]
    };
  },
  methods: {
    go() {
      this.$router.push({ path: "/search" });
    }
  },
  components: {
    vantabber,
    recommend
  },
  mounted() {
    new Swiper(".homeNavSwiperContainer", {
      slidesPerView: 5, //显示个数
      freeMode: true
    });
  },
    created(){
            this.$store.state.active = 0;
        },
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  .search {
    background-color: white;
    border: 1px solid #efefef;
  }
  .banner {
    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
    }
    .my-swipe img {
      border-radius: 20px;
      width: 94%;
      margin: 0 auto;
      display: block;
    }
  }
  .navshow {
    .van-icon__image {
      width: 1.3em !important;
      height: 1.3em !important;
      object-fit: contain;
    }
  }

  .flownav {
    width: 94%;
    margin: 0 auto;
    position: relative;
     p::first-letter{
        font-size: 10px;
      }
    .white{
      background-color: white;
      border-radius: 15px;
    }
    .homeNavSwiperContainer {
      margin-top: -15px;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
     
    }


    .swiper-slide {
      text-align: center;
      font-size: 18px;
      

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
      margin-left: 10px;
      border-radius: 15px;
      z-index: -111111111111;
      img {
        border-radius: 15px;
        border-right-color: white;
      }
    }
  }
  .bottom{
    width: 80%;
    margin: 0 auto;
    text-align: center;
    height: 70px;
      color: #9a9a9a;
    h1{
      font-size: 28px;
      
    }
  }
}
body {
  padding-bottom: 50px;
}
</style>