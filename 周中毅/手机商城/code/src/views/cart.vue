<template>
  <div class="container">
    <van-nav-bar :title="$route.name" left-text="返回" left-arrow @click-left="$router.go(-1)"/>
    <!-- 商品列表 -->
    <div class="discount" v-show="($store.state.cart.lists.length)">
     

    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" title="点击领取优惠券" border/>
    <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
     <van-popup v-model="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    </div>
    <div class="main" v-for="(item,index) in lists" :key="index">
      <div class="header">
        <van-row>
          <van-col span="3">
            
          </van-col>
          <van-col span="14">
            <p>魅族官方旗舰店</p>
          </van-col>
          <van-col span="7"></van-col>
        </van-row>
      </div>
      <van-row class="goodslist">
        <van-col span="3">
          <van-checkbox :value="item.isSelect" @click="inputselect(index)" class="check"></van-checkbox>
        </van-col>
        <van-col span="7">
          <van-image height="120" fit="cover" :src="item.src" style="margin-top:7px" />
        </van-col>

        <van-col span="14">
          <div class="content">
            <h1>{{item.name}}</h1>
            <h2>{{item.text}}</h2>
            <p class="price">￥{{item.price}}</p>
            <p>
              <van-stepper v-model="item.num" integer style="margin-left:40px" />

              <van-button type="danger" class="danger" size="mini" @click="del(index)" style="float:right;margin-right:20px">删除</van-button>
            </p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div v-show="!($store.state.cart.lists.length)" class="recommend">
      <h1>当前购物车为空</h1>
      <recommend></recommend>
    </div>
    <div class="pay" v-show="($store.state.cart.lists.length)">
      <van-submit-bar :price="total * 100" button-text="提交订单" @submit="onsubmit">
        <van-checkbox @click="checkedAll" :value="checked" class="checkfull">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <vantabber></vantabber>
  </div>
</template>

<script>
import vantabber from "../components/public/vantabber.vue";
import recommend from "../components/public/recommend";
const coupon = {
  available: 2,
  condition: '无使用门槛\n最多优惠100元',
  reason: '',
  value: 10000,
  name: '魅族17pro专用优惠券',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '100',
  unitDesc: '元',
}

export default {
  data() {
    return {
      checked: true,
      total: 0,
      lists: [],
     chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false,
      discount:true
     
    };
  },
  methods: {
    del(index) {
      this.lists.splice(index, 1);
      console.log(coupon.value)
    },
    sum() {
      this.total = this.lists.reduce((total, item) => {
         if (!item.isSelect) return total;
         if(this.discount){
           return total + parseInt(item.price) * parseInt(item.num);
         }
         else{
            return total + parseInt(item.price) * parseInt(item.num)-100;
         }
             
      }, 0);
    },
    
    checkedAll() {
      this.lists.forEach(item => {
        item.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
      this.checked = this.lists.every(item => {
        return item.isSelect;
      });
    },
    inputselect(index) {
      // 修改商品列表
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
      
    },
     onsubmit(){
              
                if(this.$store.state.username){
                    this.$router.push('/order')
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/order"
                        }
                    })
                }
            },
     onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      this.discount=false
      console.log( this.discount)
    },
    onExchange() {
      this.coupons.push(coupon);
    },
  },
  components: {
    recommend,
    vantabber,
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.checkboxclick();
    this.sum();
     this.$store.state.active = 2;
  },
  beforeUpdate() {
    this.sum();
  },
  beforeDestroy() {
    this.$store.commit("cart/edit", this.lists);
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
 
  background-color: white;
  
  .main {
    color: #626264;
    margin-top: 5px;
    .header {
      height: 40px;
      line-height: 40px;
      width: 95%;
      margin: 0 auto;
      p {
        font-size: 16px;
        line-height: 40px;
      }

      .check {
        position: absolute;
        left: 15px;
        top: 56px;
      }
    }
  }

  .goodslist{
  .check {
    position: absolute;
    top: 182px;
    left: 15px;
}
  }
.pay{background: white;
.checkfull{
  position:absolute;
  left: 15px;
}
}
.van-coupon-list__close {
    display: none;
    height: 15px;
}
  .van-cell--clickable {
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    border: 1px solid #969799;
    padding:0 30px;
    background-color: #ffe7e5
    
}
.van-cell__right-icon{
  margin-top: 13px;
}
  .recommend {
    h1 {
      text-align: center;
      height: 100px;
      line-height: 100px;
      font-size: 28px;
    }
  }
  .van-submit-bar {
    bottom: 50px;
    
  }
}
</style>