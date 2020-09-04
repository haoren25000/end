<template>
  <div class="container">
    <van-row class="header">
      <van-col span="4">
        <van-icon name="arrow-left" size="22px" color="white" class="icon" @click="$router.go(-1)" />
      </van-col>
      <van-col span="16">
        <h1 style="font-size:18px;color:white">商品列表</h1>
      </van-col>
      <van-col span="4">
        <van-icon name="search" size="22px" color="white" class="icon" @click="go" />
      </van-col>
    </van-row>

    <div class="content" v-for="(item,index) in phonelist" :key="index">
      <van-row gutter="5" @click="move">
        <van-col span="10">
          <img :src="item.src" alt />
        </van-col>
        
        <van-col span="14">
          <div class="title">
            <h1>{{item.title}}</h1>
          </div>
          <div class="text">{{item.text}}</div>
          <div class="btn">
            <van-tag plain type="danger">热卖</van-tag>
            <van-tag plain type="danger">满减</van-tag>
          </div>
          <div class="price">
            <span>￥</span>
            {{item.price}}
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="bottom">
      <h1>到底啦</h1>
      <van-row>
        <van-col span="8">100%正品</van-col>
        <van-col span="8">急速物流</van-col>
        <van-col span="8">无忧退换</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phonelist: [
        {
          src:
            require("../../assets/images/ipad (1).jpg") ,
          price: "3999",
          title: "华为平板M6",
          text: "高通骁龙™ 855Plus · 4800 万模范四摄 · Smartisan OS 7.0"
        },
        {
          src:
            require("../../assets/images/ipad (2).jpg") ,
          price: "3999",
          title: "apple mimi",
          text:
            "魅族17 Pro 8GB+128GB 天青 骁龙865 旗舰5G手机 27W无线充 6400W后置主摄 90Hz屏幕 支持NFC 拍照游戏手机"
        },
        {
          src:
            require("../../assets/images/ipad (3).jpg") ,
          price: "3999",
          title: "iPad 2019",
          text:
            "小米（MI）10 5G  8GB+128G 钛银黑 骁龙865 1亿像素8k电影相机30W疾速闪充支持无线充电学生游戏拍照5G手机"
        },
        {
          src:
             require("../../assets/images/ipad (4).jpg") ,
          price: "3999",
          title: "华为平板",
          text:
            "一加手机 8 Pro 青空 8GB+128GB 5G旗舰 2K+120Hz 柔性屏 骁龙865 超清超广角拍照手机 肉眼可见的出类拔萃"
        },
        {
          src:
             require("../../assets/images/ipad (5).jpg") ,
          price: "3999",
          title: "华为平板",
          text:
            "华为/HUAWEI Mate 30 8GB+128GB 星河银 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信4G全网通手机"
        },
        {
          src:
            require("../../assets/images/ipad (6).jpg") ,
          price: "3999",
          title: "华为平板",
          text:
            "华为/HUAWEI Mate 30 8GB+128GB 星河银 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信4G全网通手机"
        },
        {
          src:
           require("../../assets/images/ipad (1).jpg") ,
          price: "3999",
          title: "华为平板",
          text:
            "华为/HUAWEI Mate 30 8GB+128GB 星河银 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信4G全网通手机"
        },
        {
          src:
            require("../../assets/images/ipad (2).jpg") ,
          price: "3999",
          title: "apple 2018",
          text:
            "华为/HUAWEI Mate 30 8GB+128GB 星河银 麒麟990智慧芯片 4000万徕卡摄像 OLED全面屏 移动联通电信4G全网通手机"
        }
      ]
    };
  },
  methods: {
      go(){
          this.$router.push("/search")
      },
       move() {
      this.$router.push("/detalis");
    }
  },
  created() {
    //隐藏导航
    this.$store.state.vanTabbar = false;
  },
  // 切换组件生周期钩子，销毁函数
  beforeDestroy() {
    this.$store.state.vanTabbar = true;
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container{
    padding-top: 50px;
}
.header {
  position: fixed;
  width: 100%;
  z-index: 1111111111111;
  top: 0;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: black;
  margin-bottom: 5px;
}
.icon {
  display: block;
  margin-top: 14px;
}
.van-tag--danger.van-tag--plain {
  color: #ee0a24;
  margin: 5px 10px;
}
.van-row{
    border-bottom: 1px solid #f1f1f1;
}
.content {
  width: 97%;
  margin: 0 auto;
  .title {
    font-size: 14px;
    margin: 0 15px;
    margin-top: 20px;
  }
  .text {
    margin-left: 10px;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    margin-top: 7px;
    color: red;
    font-size: 16px;
    span {
      font-size: 10px;
    }
  }
}
.bottom {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #cfcfcf;
  h1 {
    font-size: 28px;
  }
}
</style>