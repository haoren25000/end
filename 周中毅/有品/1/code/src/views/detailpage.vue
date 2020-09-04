<template>
  <div>
    <!-- 底部的购物车 -->
    <div class="shopping">
      <div class="sh1"  @click="ro">
        <div>
          <img src="../assets/images/mi2.png" alt />
        </div>
        <div>小米</div>
      </div>
      
      <div class="sh2"  @click="$router.push('/shopping')">
        <div>
            
          <img src="../assets/images/gwc.png" alt />
        </div>
        <div>购物车</div>
        <!-- {{$store.state.cart.lists[0].num}} -->
       <div class="gwc11" v-show="($store.state.cart.lists.length)">{{num}}</div>
      </div>
    <!-- 加入购物车 -->
      <div class="sh3" @click="add(goods)">加入购物车</div>
    </div>
    <!-- 返回 -->
     <div class="slide_left"  v-show="isShow" @click="$router.go(-1)">
          <img src="../assets/images/left3.png" alt />
        </div>
        <div class="slide_right" v-show="isShow"  >
          <img src="../assets/images/menu.png" alt />
        </div>
    <div class="det auto">
        <!-- 顶部返回 -->
        <div class="goback"  v-show="!isShow">
            <div class="gb1" @click="$router.go(-1)"><img src="../assets/images/goback.png" alt=""></div>
             <div class="gb2"><img src="../assets/images/goback2.png" alt=""></div>
             <div class="gb3">商品</div>
        </div>
      <!-- 轮播图 -->
      <div class="det_silde">
       
        <van-swipe @change="onChange">
          <van-swipe-item>
            <img src="../assets/images/redmi1.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/redmi2.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/redmi3.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/redmi4.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/redmi5.png" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img src="../assets/images/redmi6.png" alt />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/6</div>
          </template>
        </van-swipe>
      </div>

      <div class="det_price">
        <div class="dp_top">
          <div class="dt_left">
            <span>¥</span>{{goods.price}}
            
          </div>
          <div class="dt_right">
            <img src="../assets/images/like.png" alt />
          </div>
        </div>
        <div class="dt_bot">
          <div class="db_top">
            <div class="db1">
              <img src="../assets/images/mi.png" alt />
            </div>
            <div class="db2">{{goods.name}}</div>
          </div>

          <div class="db_bot">5020大电量；4800万高清四摄；小孔全面屏；大电量长续航</div>
        </div>
      </div>
      <!-- 新人500大礼包 -->
      <div class="giftpacks">
        <img src="../assets/images/biggift.png" alt />
      </div>
      <!-- 选择颜色版本 -->
      <div class="selected">
        <span>已选</span>
        <span>请选择颜色 版本</span>
        <span>
          <img src="../assets/images/ri1.png" alt />
        </span>
      </div>
      <!-- 送至 -->
      <div class="send_to">
        <span>送至</span>
        <span>北京市 海淀区</span>
        <span>
          <img src="../assets/images/ri1.png" alt />
        </span>
      </div>
      <!-- 服务 -->
      <div class="serve">
        <span>服务</span>
        <span>
          <img src="../assets/images/gou.png" alt /> 满99包邮
          <img src="../assets/images/gou.png" alt /> 小米自营
        </span>
        <span>
          <img src="../assets/images/ri1.png" alt />
        </span>
      </div>
      <!-- 用户评价 -->
      <div class="comment">
        <div class="com_top">
          <span>用户评价</span>
          <span>
            99%满意
            <span>
              <img src="../assets/images/ri1.png" alt />
            </span>
          </span>
        </div>
        <div class="com_center">
          <div>
            <div>性价比高(23)</div>
          </div>
          <div>
            <div>外观漂亮(19)</div>
          </div>
          <div>
            <div>手感不错(17)</div>
          </div>
          <div>
            <div>颜色不错(5)</div>
          </div>
        </div>
        <div class="com_bot">
          <div class="swiper-container newswiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in com" :key="index">
                <div class="ss_top">
                  <div>
                    <img :src="item.img" alt />
                  </div>
                  <div>{{item.name}}</div>
                  <div>
                    <span>
                      <img src="../assets/images/wjx.png" alt />
                    </span>
                    <span>
                      <img src="../assets/images/wjx.png" alt />
                    </span>
                    <span>
                      <img src="../assets/images/wjx.png" alt />
                    </span>
                    <span>
                      <img src="../assets/images/wjx.png" alt />
                    </span>
                    <span>
                      <img src="../assets/images/wjx.png" alt />
                    </span>
                  </div>
                </div>
                <div class="ss_bot">{{item.discuss}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 店铺 -->
        <div class="store">
            <div class="store_top">
                <div class="stimg"><img src="../assets/images/mi3.png" alt=""></div>
                <div class="stfont">
                    <div>小米 <div>自营</div></div>
                    <div>为发烧而生</div>
                </div>
                <div class="st_right">
                     <div>进入频道<span><img src="../assets/images/right4.png" alt=""></span></div>
            </div>
            </div>
            <div class="store_bot">
                <div class="sb1">
                    <div>商品描述</div>
                    <div>4.9</div>
                    <div>高</div>
                </div>
                <div class="sb1">
                    <div>卖家服务</div>
                    <div>4.9</div>
                    <div>高</div>
                </div>
                <div class="sb1">
                    <div>物流服务</div>
                    <div>4.9</div>
                    <div>高</div>
                </div>
            </div>
        </div>
        <!-- 商品详情 -->
        <div class="particulars">
            <div class="pro">商品详情</div>
            <div class="tu" v-for="(item2,index2) in tu" :key="index2"><img :src="item2" alt=""></div>
        </div>
   
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
 import {createNamespacedHelpers} from "vuex";
    const {mapState,mapMutations} = createNamespacedHelpers("cart");

export default {
  data() {
    return {
      current: 0,
      tu:[require("../assets/images/p1.png"),require("../assets/images/p2.png"),require("../assets/images/p3.png"),require("../assets/images/p4.png"),require("../assets/images/p5.png"),require("../assets/images/p6.png"),require("../assets/images/p7.png"),require("../assets/images/p8.png"),require("../assets/images/p9.png"),require("../assets/images/p10.png"),require("../assets/images/p11.png"),require("../assets/images/p12.png"),require("../assets/images/p13.png"),require("../assets/images/p14.png"),require("../assets/images/p15.png"),require("../assets/images/p16.png"),require("../assets/images/p17.png"),require("../assets/images/p18.png"),require("../assets/images/p19.png"),require("../assets/images/p20.png"),require("../assets/images/p21.png"),require("../assets/images/p22.png"),require("../assets/images/p23.png"),require("../assets/images/p24.png"),require("../assets/images/p25.png"),require("../assets/images/p26.png"),require("../assets/images/p27.png"),require("../assets/images/p28.png"),require("../assets/images/p29.png"),require("../assets/images/p30.png"),require("../assets/images/p31.png"),require("../assets/images/p32.png"),require("../assets/images/p33.png"),],
      com: [
        {
          img: require("../assets/images/t31.png"),
          name: "王五",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了"
        },
        {
          img: require("../assets/images/t32.png"),
          name: "王六",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了"
        },
        {
          img: require("../assets/images/t33.png"),
          name: "王七",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了"
        },
        {
          img: require("../assets/images/t34.png"),
          name: "王八",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了啊"
        },
        {
          img: require("../assets/images/t21.png"),
          name: "王九",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了"
        },
        {
          img: require("../assets/images/t21.png"),
          name: "王二",
          discuss: "好喜欢,这辈子没用过这么好的手机,爱了爱了"
        }
      ],
      scroll:'',
      num2:0,
      isShow:true,
       show: false,
       goods:{
                    id:3,
                    name:"Redmi 10X 4G 4GB+128GB",
                    price:"999",
                    num:1
                }
    }
  },
  methods: {
   ro(){
     this.$router.push('/home/recommed')
    //  this.$store.state.vanTabbar = false;
   },
    onChange(index) {
      this.current = index;
    },
     menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
         if(this.scroll>=320){
    this.isShow = false
  }else{
    this.isShow = true

  }  
      },
   // 直接调用vuex里面方法
   
            ...mapMutations(["add"])
  },
   computed:{
            ...mapState({
                num:state=>state.num
            })
        },
 


  created() {
   
    window.scrollTo(0, 0)
    

   
  },
  
  mounted() {
    new Swiper(".newswiper", {
      slidesPerView: 1.2,
      spaceBetween: 10
    });
     
   
    window.addEventListener('scroll', this.menu)
    
     
   
   
    
   
  }
};
</script>

<style lang="scss" scoped>

.gwc11{
     position: absolute;
    top: 0;
    right: 5px;
    width: 15px;
    height: 15px;
    color: #fff;
    background-color: #e30d0d;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    font-size: 10px;
   
}

.goback{
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #efeff0;
    z-index: 999;
    text-align: center;
    line-height: 50px;
}
.gb1{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
}
.gb2{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
}
.gb3{
    display: inline;
    font-size: 14px;
    color: #997c62;
}
.particulars{
    margin-top: 10px;
    background-color: #fff;
    width: 100%;
}
.pro{
    text-align: center;
    line-height: 40px;
    width: 100%;
    height: 40px;
    font-weight: 700;
    color: #a48960;
}

.newswiper {
  height: 100%;
}
.swiper-slide:nth-child(1) {
  margin-left: 10px;
}
.swiper-slide {
  background-color: #f8f8f8;
  padding: 10px;
}
.ss_top {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.ss_top div:nth-child(1) {
  width: 30px;
  height: 30px;
  float: left;
  border-radius: 50%;
}
.ss_top div:nth-child(2) {
  height: 30px;
  float: left;
  margin-left: 10px;
  font-size: 14px;
  line-height: 30px;
}
.ss_top div:nth-child(3) {
  height: 30px;
  float: left;
  margin-left: 10px;

  line-height: 30px;
}
.ss_top div:nth-child(3) span {
  display: inline-block;
  width: 11px;
  height: 11px;
  margin-right: 5px;
}
.ss_bot {
  width: 100%;
  height: 38px;
  // background-color: pink;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.store{
    width: 100%;
    height: 120px;
    padding: 20px 10px;
    margin-top: 10px;
    background-color: #fff;
}
.store_top{
    width: 100%;
    height: 40px;

}
.stimg{
    width: 40px;
    height: 40px;
    float: left;
}
.stfont{
    float: left;
    margin-left: 10px;
    width: 80px;
    height: 100%;

}
.stfont div:nth-child(1){
    font-size: 14px;
    
}
.stfont div:nth-child(1) div{
    font-size: 10px;
    width: 30px;
    height: 15px;
    border-radius: 20px;
    border: 1px solid #c52929;
    float: right;
    text-align: center;
    line-height: 12px;
    margin-right:15px ;
    margin-top: 4px;
    color: #c52929;
}
.stfont div:nth-child(2){
    color: #b2b2b2;
}
.st_right{
    width: 59px;
    height: 40px;
    // background-color: skyblue;
    float: right;
    line-height: 40px;
    margin-right: 4px;
}
.st_right div{
    display: inline-block;
    color: #b19872;
    
}
.st_right div span{
   display: block;
    width: 11px;
    height: 11px;
   float: right;
    margin-top: 15px;
}
.store_bot{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.sb1{
    width: 100px;
    height: 50px;
}
.sb1 div{
    display: inline-block;
}
.sb1 div:nth-child(1){
    color: #9e9e9e;
    
}
.sb1 div:nth-child(2){
    margin-left: 5px;
    color: #cf9e56;
    font-size: 14px;
}
.sb1 div:nth-child(3){
    margin-left: 5px;
    text-align: center;
    width: 14px;
    height: 15px;
    line-height: 15px;
    color: #fff;
    font-size: 12px;
    background-color: #cf9e56;
    border-radius: 2px;
    
}
.tu{
    width: 100%;
}




.shopping {
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 8px 10px 0;
  z-index: 999;
  // position: relative;
}
.sh1 {
  width: 30px;
  height: 50px;
  text-align: center;
  margin-left: 5px;
  font-size: 10px;
  float: left;
}
.sh1 div:nth-child(1) {
  // display: inline-block;
  width: 30px;
  height: 30px;
}
.sh2 {
  width: 40px;
  height: 50px;
  text-align: center;
  margin-left: 15px;
  font-size: 10px;
  float: left;
  position: relative;

}
.sh2 div:nth-child(1) {
  width: 30px;
  height: 30px;
  margin-left: 3px;
 
  // display: inline-block;
}
.sh3 {
  width: 195px;
  height: 40px;
  background-image: linear-gradient(to right, #ef4c2d, #d91f17);
  position: absolute;
  top: 28px;
  right: 40px;
  margin-top: -20px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
}
.comment {
  width: 100%;
  height: 220px;
  background-color: #fff;
  padding: 10px 0;
  margin-top: 10px;
}
.com_top {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
}
.com_top span:nth-child(1) {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.com_top span:nth-child(2) {
  display: block;
  float: right;

  color: #a2a2a2;
}
.com_top span:nth-child(2) span {
  display: block;
  float: right;
  width: 12px;
  height: 12px;
  margin-top: 9px;
  margin-right: 4px;
}
.com_center {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}
.com_center > div {
  height: 22px;
  background-color: #f4e7ce;
  text-align: center;
  line-height: 22px;
  padding: 0 8px;
  font-size: 11px;
  margin-right: 5px;
  display: inline-block;
  border-radius: 20px;
}
.com_bot {
  width: 100%;
  height: 130px;
  padding: 10px 0;
  // background-color: pink;
}

.det_price {
  width: 100%;
  height: 130px;
  background-color: #fff;
  padding: 0 10px;
}
.dp_top {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.dt_left {
  font-size: 24px;
  color: #b60909;
  font-weight: 700;
  float: left;
}
.dt_left span:nth-child(1) {
  font-size: 20px;
  font-weight: 700;
}
.dt_left span:nth-child(2) {
  font-size: 16px;
  font-weight: none;
}
.dt_right {
  width: 40px;
  height: 40px;
  float: right;
  margin-top: 10px;
}
.dt_bot {
  width: 100%;
  height: 90px;
  color: #4c4c4c;
}
.db_top {
  width: 100%;
  height: 45px;
  line-height: 45px;
  position: relative;
  // background-color: pink;
}
.db1 {
  width: 60px;
  height: 30px;
  position: absolute;
  top: 12px;
  left: 0;
}
.db2 {
  height: 30px;
  position: absolute;
  top: 0px;
  left: 65px;
  font-size: 16px;
  font-weight: 700;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.db_bot {
  width: 100%;
  height: 25px;
  // line-height: 35px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666666;
}
.giftpacks {
  width: 100%;
  height: 45px;
  margin-top: 10px;
}
.selected {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-top: 8px;
  padding: 0 10px;
}
.selected span:nth-child(1) {
  font-size: 12px;
  color: #a8a8a8;
}
.selected span:nth-child(2) {
  font-size: 13px;
  font-weight: 700;
  color: #333;
  margin-left: 15px;
}
.selected span:nth-child(3) {
  // display: inline-block;
  width: 12px;
  height: 12px;
  float: right;
  margin-top: 18px;
  margin-right: 4px;
}

.send_to {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-top: 2px;
  padding: 0 10px;
}
.send_to span:nth-child(1) {
  font-size: 12px;
  color: #a8a8a8;
}
.send_to span:nth-child(2) {
  font-size: 13px;
  color: #515151;
  margin-left: 15px;
}
.send_to span:nth-child(3) {
  // display: inline-block;
  width: 12px;
  height: 12px;
  float: right;
  margin-top: 18px;
  margin-right: 4px;
}
.serve {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-top: 2px;
  padding: 0 10px;
}
.serve span:nth-child(1) {
  font-size: 12px;
  color: #a8a8a8;
}
.serve span:nth-child(2) {
  font-size: 13px;
  color: #a8a8a8;
  margin-left: 15px;
}
.serve span:nth-child(2) img {
  width: 12px;
  height: 12px;
  display: inline-block;
}
.serve span:nth-child(3) {
  // display: inline-block;
  width: 12px;
  height: 12px;
  float: right;
  margin-top: 18px;
  margin-right: 4px;
}

.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
  padding-bottom: 50px;
}
.det {
  width: 100%;
  background-color: #f8f8f8;
}
.det_silde {
  width: 100%;
  height: 360px;
  position: relative;
}

.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.van-swipe-item {
  width: 100%;
  height: 100%;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.custom-indicator {
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background-color: #bcbcbc;
  color: #fff;
  margin-right: 10px;
}
.slide_left {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 599;
}
.slide_right {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 599;
}
</style>