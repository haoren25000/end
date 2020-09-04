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
    <div class="banner">
      <swiper :img="Images"></swiper>
    </div>
    <div class="content">
      <div class="price">
        <span style="font-size:28px;">￥4999</span>
        <font style="font-size:14px;">.00</font>
        <van-button type="primary" size="mini">新品</van-button>
      </div>

      <div class="vip">
        <van-row>
          <van-col span="18">
            <van-icon name="gem-o" />SUPER会员预计返价值23.49元云钻
          </van-col>
          <van-col span="6">
            <van-button type="danger" size="small" round>立即开通</van-button>
          </van-col>
        </van-row>
      </div>

      <div class="explain">
        <van-row>
          <van-col span="20">魅族17 Pro 8GB+128GB 天青 骁龙865 旗舰5G手机 27W无线充 6400W后置主摄 90Hz屏幕 支持NFC 拍照游戏手机</van-col>
          <van-col span="4" class="right">
            <van-icon name="like-o" />
          </van-col>
        </van-row>
      </div>

      <div class="text">
        <p style="font-size:14px;height:50px">骁龙865 旗舰5G手机 27W无线充 6400W后置主摄 90Hz屏幕 支持NFC</p>
        <p>
          <van-button type="warning" size="mini">享退运费险</van-button>
        </p>

        <van-row style="font-size:14px" class="stages">
          <van-col span="17">分期 开通任性付返50元礼包</van-col>

          <van-col span="7" style="color:red">
            立即激活
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>
      </div>

      <div class="discount">
        <van-row style="font-size:14px">
          <van-col span="18">可参加以下活动</van-col>
          <van-col span="6">
            领券
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="3">优惠</van-col>
          <van-col span="21">
            <span class="iconfont icon-manjianquan"></span>
            满3999用10
          </van-col>
        </van-row>
        <van-row>
          <van-col span="3">促销</van-col>
          <van-col span="21">
            <p>
              <span class="iconfont icon-lingquanzhongxin"></span>

              <span>实名认证领10元支付券</span>
            </p>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="3">刮券</van-col>
          <van-col span="17">
            <span class="iconfont icon-Shapecopy"></span>
            <span class="iconfont icon-guajiang"></span>
            <span>100%刮中奖，最高50元无敌券</span>
          </van-col>
          <van-col span="4" style="text-align:center">
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>

        <div class="value" style="color:#9d6bbe">
          <van-row>
            <van-col span="3">
              <span class="iconfont icon-xunhuan"></span>
            </van-col>
            <van-col span="17">立即估价 旧机回收限时加价350元</van-col>
            <van-col span="4" style="text-align:center">
              <span class="iconfont icon-iconfontjiantou5"></span>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="buy">
        <van-row>
          <van-col span="3">已选</van-col>
          <van-col span="20">17度灰,【8+256G】1件 可选增值服务</van-col>
          <van-col span="1">
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="3">送至</van-col>
          <van-col span="21">广东韶关武江区 全区</van-col>
        </van-row>
        <van-row>
          <van-col span="3">付款</van-col>
          <van-col span="21">支持 易付宝 支付宝</van-col>
        </van-row>
        <van-row>
          <van-col span="3">运费</van-col>
          <van-col span="21">免运费</van-col>
        </van-row>

        <van-row>
          <van-col span="3">服务</van-col>
          <van-col span="21">
            <span class="iconfont icon-dui"></span>
店铺发货&售后
            <span class="iconfont icon-dui"></span>
7天无条件退货
          </van-col>
        </van-row>
      </div>

      <div class="assess">
        <van-row>
          <van-col span="7" style="font-size:14px;font-weight:border;color:black">
            <h1>评价（1）</h1>
          </van-col>
          <van-col span="11"></van-col>
          <van-col span="6">
            查看全部
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="7" style="font-size:12px;font-weight:bord;color:black">
            <h2>问问已购用户</h2>
          </van-col>
          <van-col span="11" style="font-size:10px">商品好不好？问问买过的人</van-col>
          <van-col span="6">
            去提问把
            <span class="iconfont icon-iconfontjiantou5"></span>
          </van-col>
        </van-row>
      </div>

      <div class="store">
        <van-row>
          <van-col span="6">
            <img
              src="http://image.suning.cn/uimg/cshop/logo/000000000030000134.jpg?1539163805337"
              alt
            />
          </van-col>
          <van-col span="12">
            <h1 style="font-size:18px">魅族官方旗舰店</h1>
          </van-col>
          <van-col span="6">
            <van-button round type="info" size="small">进店逛逛</van-button>
          </van-col>
        </van-row>
      </div>
     <h1 style="font-size:16px;text-align:center;margin-bottom:15px">为你推荐</h1>
      <div class="recommend">
        <van-row gutter="20">
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/1jnxMq6eoZorak_TBOr-cA.jpg_200w_200h_4e_100Q"
              />
              <van-notice-bar
                :scrollable="false"
                background="white"
                color="black"
              >华为Mate30 Pro 5G 全网通版 8GB+128GB 翡冷翠 麒麟990 双4000万徕卡电影四摄 移动联通电信5G手机 华为mate30pro5g版</van-notice-bar>

              <p class="money">￥4999</p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/9a5jCj5oJdJmnmmubCgHYQ.png_200w_200h_4e_100Q"
              />
              <van-notice-bar
                :scrollable="false"
                background="white"
                color="black"
              >华为nova6 SE 全网通 8GB+128GB 绮境森林 麒麟810芯片 4800万AI四摄 移动联通电信4G智能拍照手机 双卡双待 华为nova6se</van-notice-bar>
              <p class="money">￥2.5</p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/sGVVQe2PGRbtuPg2UJ6S1w.png_200w_200h_4e_100Q"
              />
              <van-notice-bar
                :scrollable="false"
                background="white"
                color="black"
              >华为nova6 SE 全网通 8GB+128GB 绮境森林 麒麟810芯片 4800万AI四摄 移动联通电信4G智能拍照手机 双卡双待 华为nova6se</van-notice-bar>
              <p class="money">￥2.5</p>
            </div>
          </van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/PqglYzRlq91wTGANO0Bnpw.jpg_200w_200h_4e_100Q"
              />
              <van-notice-bar
                :scrollable="false"
                background="white"
                color="black"
              >华为nova6 SE 全网通 8GB+128GB 绮境森林 麒麟810芯片 4800万AI四摄 移动联通电信4G智能拍照手机 双卡双待 华为nova6se</van-notice-bar>
              <p class="money">￥2.5</p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/qLnfiOl33CPS8gKpPKf_WQ.jpg_200w_200h_4e_100Q"
              />
              <van-notice-bar :scrollable="false" background="white" color="black">
                <p>Apple iPhone SE 64G 白色 移动联通电信4G全网通</p>
              </van-notice-bar>

              <p class="money">￥2.5</p>
            </div>
          </van-col>
          <van-col span="8">
            <div class="left">
              <van-image
                width="100%"
                height="100%"
                src="https://imgservice.suning.cn/uimg1/b2c/image/nJLeNGjniaqCfOteofa-Zw.jpg_200w_200h_4e_100Q"
              />
              <van-notice-bar
                :scrollable="false"
                background="white"
                color="black"
              >华为nova6 SE 全网通 8GB+128GB 绮境森林 麒麟810芯片 4800万AI四摄 移动联通电信4G智能拍照手机 双卡双待 华为nova6se</van-notice-bar>
              <p class="money">￥2.5</p>
            </div>
          </van-col>
        </van-row>
      </div>

      <van-tabs v-model="activeName">
        <van-tab title="图文详情" name="a">
          <div class="img" style="margin-top:20px">
            <img
              src="https://uimgproxy.suning.cn/uimg1/sop/commodity/QztH8UQLHlmo-CSooPSqsA.jpg"
              alt
            />
            <img src="https://image2.suning.cn/uimg/cms/img/158399988964950645.png" alt />
          </div>
        </van-tab>
        <van-tab title="标签 2" name="b"></van-tab>
        <van-tab title="标签 3" name="c"></van-tab>
      </van-tabs>
      <van-goods-action>
        <van-goods-action-icon @click="$router.push('/home')" icon="wap-home-o" color="#07c160" />
        <van-goods-action-icon @click="$router.push('/cart')" icon="cart-o" :badge="num" />
        <van-goods-action-icon icon="chat-o" color="#07c160" />
        <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" @click="$router.push('/cart')" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import swiper from "../components/public/swiper";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers("cart");
export default {
  data() {
    return {
      activeName: "a",
      Images: [
        require("../assets/images/show01.jpg"),
        require("../assets/images/show02.jpg"),
        require("../assets/images/show03.jpg"),
        require("../assets/images/show04.jpg"),
        require("../assets/images/show05.jpg")
      ],
      goods: {
        id: 2,
        name: "魅族17pro",
        price: "4999",
        num: 1,
        text: "魅族17pro5G新品旗舰手机，8+256,松深入墨。骁龙865",
        src:
          "https://imgservice.suning.cn/uimg1/b2c/image/RKZLhEJpGNdeh03k2TmtyQ.jpg_800w_800h_4e_100Q"
      }
    };
  },
  components: {
    swiper
  },
  methods: {
    // 直接调用vuex里面方法
    ...mapMutations(["add"]),
    go() {
      this.$router.push("/search");
    }
  },
  computed: {
    ...mapState({
      num: state => state.num
    })
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  background-color: white;
  height: 100%;
  padding-bottom: 50px;
  .header {
    position: fixed;
    width: 100%;
    z-index: 1111111111111;
    top: 0;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: black;
    .icon {
      display: block;
      margin-top: 14px;
    }
  }
  .banner {
    margin-top: 30px;
    height: 375px;
  }
  .content {
    width: 95%;
    margin: 0 auto;

    .price {
      color: red;
      height: 50px;
      line-height: 50px;
    }
    .vip {
      background: white;
      font-size: 15px;
      height: 50px;
      line-height: 50px;
      border-radius: 10px;
      text-align: center;
    }
    .explain {
      font-size: 16px;
      font-weight: bolder;
      color: black;

      padding-left: 15px;
      .right {
        line-height: 80px;
        text-align: center;
        font-size: 28px;
        color: brown;
      }
    }
    .text p {
      padding-left: 15px;
    }
    .stages {
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      border-radius: 10px;
      margin: 15px 0;
      color: black;
      padding: 0 15px;
      font-size: 1px;
      .iconfont {
        color: red;
        font-size: 18px;
        vertical-align: middle;
      }
    }
    .discount {
      width: 100%;
      text-align: left;
      .iconfont {
        color: red;
        font-size: 18px;
      }
      .van-row {
        background-color: white;
        line-height: 50px;
        padding-left: 15px;
      }
      .value {
        color: #9d6bbe;
        margin: 15px 0;
        .iconfont {
          color: #9d6bbe;
        }
      }
    }

    .buy {
      .van-row {
        background-color: white;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
      }
    }
    .assess {
      .van-row {
        background-color: white;
        height: 50px;
        margin: 5px 0;
        line-height: 50px;
        padding: 0 15px;
      }
    }
    .store {
      height: 90px;
      line-height: 90px;
    }

    .pay {
      z-index: 10000;
    }
  }
}
</style>