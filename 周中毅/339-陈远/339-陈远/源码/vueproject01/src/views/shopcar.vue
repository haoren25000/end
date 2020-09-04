<template>
    <div class="shopping_bg">
        <div class="shopcarheader">
            <van-row >
                <van-col class="classleftlog" span="2">
                <router-link to="/main"><span id="leftlogo" @click="$router.go(-1)"></span></router-link>
                </van-col>
                <van-col class="classtitle" span="20">
                    <span>购物车</span>  
                </van-col>
                <van-col class="classmore" span="2"></van-col>
            </van-row>
        </div>

        <!-- 收货地址 -->
        <div class="good_address">
          
        </div>

        <!-- 购物车列表 -->
        <div class="shoppingcar">
          <div class="OKbox">
            <div class="OK_checkbox">
              <van-checkbox :value="checked" @click="checkAll"  checked-color="#f2270c"></van-checkbox>
            </div>
            <img src="../assets/icon01/JDicon.png" alt="">
            <span class="OK_icon">京东自营</span>
            <div class="notice">
            <img src="../assets/icon01/警告.png" alt="">
             <span>需支付运费</span> 
            </div>
          </div>

           <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
            <van-col span="3">
              <van-checkbox  class="list_check"  checked-color="#f2270c" :value="item.isSelect"  @click="inputselect(index)"></van-checkbox>
            </van-col>
            <van-col span="7">
                <van-image
                height="100"
                fit="cover"
                :src="item.img" 
                />
            </van-col>
            <van-col span="14">
                <div class="content">
                    <h1>{{item.name}}</h1>
                    <h2 style="color:#f2270c;">{{item.lable}}</h2>
                    <p class="price">¥&nbsp;{{item.price}}</p>
                    <p>
                        <van-button type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
                        <span>{{item.num}}</span>
                        <van-button type="default" size="mini" @click="item.num++">+</van-button>
                        <van-button type="default" class="default" size="mini" @click="del(index)">删除</van-button>
                    </p>
                </div>
            </van-col>
        </van-row>
        </div>
         

          <!-- 结算 -->
          <van-submit-bar style="background:hsla(0,0%,100%,.95);" class="settlement" :price="total*100" @submit="$router.push('/order')" button-text="去结算">
            <van-checkbox :value="checked" @click="checkAll"  checked-color="#f2270c">全选</van-checkbox>
          </van-submit-bar>
    </div>
</template>
<script>
export default {
    data(){
      return {
        checked:true,
        total:0,
        lists:[
          // {
          //   isSelect:true,
          //   storeImg:"https://img10.360buyimg.com/mobilecms/s337x337_jfs/t1/90646/8/15573/341564/5e734c4dE60c446f5/fcd3c25563159966.jpg!q70.dpg.webp",
          //   storename:"来伊份卤蛋鹌鹑蛋休闲零食小吃铁蛋 宝儿蛋125g/袋",
          //   storelable:"满99得赠品",
          //   storeprice:9.90,
          //   num:3
          // },
        ]
      }
    },
    methods:{
      del(index){
        this.lists.splice(index,1)
      },
      sum(){
        this.total = this.lists.reduce((total,item)=>{
          if(!item.isSelect) return total;
          return total+parseInt(item.price)*parseInt(item.num);
        },0)
      },
      checkAll(){
        this.lists.forEach((item)=>{
          item.isSelect = !this.checked;
        })
        this.checked = !this.checked;
      },
      checkboxclick(){
        this.checked = this.lists.every((item)=>{
          return item.isSelect;
        })
      },
      inputselect(index){
        this.lists[index].isSelect = !this.lists[index].isSelect;
        this.sum();
        this.checkboxclick();
      }
    },
    created(){
      this.lists = this.$store.state.shopcar.lists;
      this.sum();
    },
    beforeUpdate(){
      this.sum();
    },
    beforeDestroy(){
      this.$store.commit("shopcar/edit",this.lists);
    }
}
</script>
<style lang="scss" scoped>
.shopping_bg{
  width: 100%;
  height: 100%;
  background: rgb(204, 204, 204,0.3);
}
.shopcarheader{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: white;
  position: flex;
  top:0;
  z-index: 999;
  .classleftlog{
      width: 34px;
      height: 34px;
      overflow: hidden;
  }
  #leftlogo{
    margin: 14px 0 0 15px;
    width: 200px;
    height: 180px;
    display: block;
    background: url("../assets/icon02/jd-sprites.png") no-repeat;
    background-position: -20px 0;
    background-color: rgba($color: #fff, $alpha: 0);
    background-size: 100% 100%;
  }
  .classtitle{
    text-align: center;
  }
}

.shoppingcar{
  background: #fff;
  height: 268px;
  margin: 15px 0;
  .OKbox{
    width: 100%;
    height: 46px;
    display: inline-block;
    position: relative;
    .OK_checkbox{
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      display: inline-block;
    }
    img{
        position: absolute;
        top: 50%;
        left: 42px;
        transform: translateY(-50%);
      }
    .OK_icon{
      width: 249px;
      height: 42px;
      line-height: 42px;
      position: absolute;
      left: 70px;
      display: inline-block;
    }
    .notice{
      display: inline-block;
      img{
        position: absolute;
        top: 50%;
        left: 310px;
        transform: translateY(-50%);
      }
      span{
        position: absolute;
        top: 50%;
        left: 330px;
        transform: translateY(-50%);
        height: 42px;
        line-height: 42px;
      }
    }
    img{
      width: 20px;
      height: 20px;
    }
  }
}

.goodslist{
    position: relative;
    background-color: #fff;
    .list_check{
      width: 20px;
      height: 20px;
      position: relative;
      left:10px;
      top:37px;
    }
    .content{
        padding-left:10px;
        h1{
            font-size: 16px;
        }
        h2{
            font-size: 12px;
            font-weight: normal;
        }
        .price{
            font-size: 14px;
            color:#f2270c;
        }
        span{
            display: inline-block;
            width: 30px;
            font-size: 14px;
            text-align: center;
        }
        .default{
            span{
                font-size: 12px;
            }
        }
    }
}


.settlement{
  position: absolute;
  bottom: 60px;
}
</style>