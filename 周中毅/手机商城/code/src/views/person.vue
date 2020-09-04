<template>
  <div class="container">
    <div class="header">
       <van-row class="title">
      <van-col span="4">
        <van-icon name="arrow-left" size="22px" color="white" class="icon" @click="$router.go(-1)" />
      </van-col>
      <van-col span="16">
        <h1 style="font-size:18px;color:white">个人中心</h1>
      </van-col>
      <van-col span="4">
      </van-col>
    </van-row>
       
    
      <van-row class="logo">
        <van-col span="6">
         <img src="../assets/images/denglu.jpg" alt="">
        </van-col>
         <van-col span="18" style="text-align:left">
                <div v-if="$store.state.username">
                    <span v-text="$store.state.username" class="span"></span>
                    <span @click="$store.state.username=''" class="span">退出</span>
                </div>
                <div v-else>
                    <router-link to="/login" ><span class="span1">登陆</span></router-link>
                    <router-link to="/register" ><span class="span2">注册</span></router-link>
                </div>
            </van-col>
       
      </van-row>

      <van-row class="tips">
        <van-col span="6">
          <p>
            <b>0</b>
          </p>
          <p>
            <b>优惠券</b>
          </p>
        </van-col>
        <van-col span="6">
          <p>
            <b>0</b>
          </p>
          <p>
            <b>领福利</b>
          </p>
        </van-col>
        <van-col span="6">
          <p>
            <b>0</b>
          </p>
          <p>
            <b>足迹</b>
          </p>
        </van-col>
        <van-col span="6">
          <p>
            <b>0</b>
          </p>
          <p>
            <b>我的关注</b>
          </p>
        </van-col>
      </van-row>
    </div>
    <div class="vip">
        <van-row>
  <van-col span="5">
      <!-- <van-image width="60" height="50" src="https://oss.suning.com/vss/activity/wximg/my/vip.png" /> -->
    </van-col>
  <van-col span="14">super+腾讯视频年卡限量98元</van-col>
  <van-col span="5">点击了解</van-col>
</van-row>


    </div>
   
    <div class="order">
        <van-row style="height:50px;line-height:50px">
  <van-col span="12"><h1 style="font-size:18px;padding-left:10px"><b>我的订单</b></h1></van-col>
  <router-link to="/orderList/orderAll">
  <van-col span="12"><p style="font-size:12px;text-align:right;padding:0 15px">查看全部</p></van-col>
  </router-link>
</van-row>
<van-grid>
  <van-grid-item icon="photo-o" text="待支付" to="/orderList/orderPay"/>
  <van-grid-item icon="photo-o" text="待收货" to="/orderList/orderGoods"/>
  <van-grid-item icon="photo-o" text="已完成" to="/orderList/orderEnd"/>
  <van-grid-item icon="photo-o" text="待评价" to=""/>
</van-grid>
    </div>
    <recommend></recommend> 
    <div class="bottom">
        <h1>到底了</h1>
    </div>
    <vantabber></vantabber>
  </div>
</template>

<script>
import vantabber from "../components/public/vantabber"
import recommend from "../components/public/recommend"
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    // 定义跳转方法
    address() {
      // 如果地址没有数据，直接跳转地址添加页面
      if (this.$store.state.address.lists.length == 0) {
        this.$router.push("/addressAdd");
      } else {
        this.$router.push("/address");
      }
    },
     showPopup() {
      this.show = true;
    },
  },
  components:{
    recommend ,
    vantabber,
  },
    created(){
            this.$store.state.active = 3;
        }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  color: black;
  .title{
    height: 50px;
    line-height: 50px;
    text-align: center;
    .icon{
      display: block;
      margin-top: 14px;
    }
  }
  .header {
    background-color: #ffdb47;
    height: 200px;
    .navbar {
      background-color: #ffdb47;
    }
    .logo {
      text-align: center;
      height: 80px;
      line-height: 80px;
      img{
        border-radius: 300px;
        width: 80%;
        margin-left: 10px;
       
      }
      .span1,.span
      {
        margin-left: 20px;
        font-size: 18px;
        display: inline-block;
      }
      .span2,.span {
        margin-left: 30px;
        font-size: 18px;
        display: inline-block;

      }
    }
  }
  .tips {
    height: 50px;
    text-align: center;
  }
  .vip{
      width: 90%;
      margin: 0 auto;
      height: 50px;
      line-height: 50px;
      background-color: white;
      border-radius: 20px;
      margin-top: -20px;
  }
  .order{
      width: 90%;
      margin: 0 auto;
      background-color: white;
      margin-top:20px;
      border-radius: 20px;
     
  }
 
}
</style>