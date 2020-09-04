<template>
    <div>
        <!-- 头部 -->
      <header class="header">
          <!-- 导航 -->
         
            
                <!-- <span class="goback" @click="$router.go(-1)"><van-icon name="arrow-left"  size="30" /></span>  -->
                <!-- 购物车 -->
                 <!-- <span class="shopp"><van-icon name="cart-o"  size="35"/></span>  -->
                <!-- <div class="goback"  @click="$router.go(-1)"> <van-icon name="arrow-left"  /></div>
                <div class="shopp">
                </div> -->
                <div class="line">

                    <van-icon name="arrow-left" class="goback "  @click="$router.go(-1)"  />
                    <van-icon name="cart-o" class="shopp"  @click="$router.push('/cart')" />
                </div>
          

          <!-- 轮播 -->
          <swiper :img="imges"></swiper>
      </header>
      <div class="price">￥139-158<span>新品抢鲜价</span><span>淘金币抵3%</span></div>
      <!-- 标题 -->
      <div class="title">法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季</div>
      <div class="fordetail">
          <van-row>
            <van-col span="8" class="left">快递免费</van-col>
            <van-col span="8">月销量26件</van-col>
            <van-col span="8" class="right">广东广州</van-col>
        </van-row>

      </div>
     
     <div class="discounts"  v-for="(item,index) in list " :key="item.index">
         <div class="caption">{{item.caption}}</div>
         <div class="img"><a href="javascript:;" v-show="index==1">积分</a><img src="../assets/img/yun2.jpg" alt="" v-if="index==0">{{item.img}}</div>
         <div class="goto">{{item.goto}}<van-icon name="arrow" /></div>

     </div> 
      
      
      
       <div class="discounts"  v-for="(item,index) in lists " :key="index">
         <div class="caption">{{item.caption}}</div>
         <div class="img">{{item.img}}</div>
         <div class="goto">{{item.goto}}<van-icon name="arrow" /></div>

     </div>
     
       
        <!-- 商品评价 -->
        
        <div class="evaluation">
            
           <div class="evahead">商品评价(128)<a href="javascript:;">查看全部<van-icon name="arrow" /></a></div> 
            <div class="bigimg">

               <img src="../assets/img/details9.jpg" alt="">
                <div class="smallimg">
                    <img src="../assets/img/details8.jpg" alt="">
                </div>
                <div class="name"> j**bxaimg</div>
                <div class="surper"><img src="../assets/img/details7.jpg" alt=""></div> 
            </div>
           <div class=" newevaluation">
               <p class="sup">粒子舒服的,不错</p>
               <p class="detailstitle">2020-04-27颜色：8012蓝色松紧腰高弹力；尺码：2XL[38 180到20..</p>
           </div>
        </div>
        <!-- 问问题 -->
        <div class="placeself">
            <div class="everyone">
                问大家(2)
                <a href="javascript:;">打开App查看全部<van-icon name="arrow" /></a>
            </div>
            <div class="ask">
                <div class="askleft"><span>问</span>174，136斤，穿多少码合适？</div>
                <div class="askright">1个回答</div>
            </div>
             <div class="ask">
                <div class="askleft"><span>问</span>174，136斤，穿多少码合适？</div>
                <div class="askright">1个回答</div>
            </div>
        </div>
        <!-- 详情图片 -->
        <div class="shoopdetails">店铺详情</div>
        <div class="detailsImg">
           <div class="box" v-for="(item,index) in  detailsImg"  :key="index">
               <img :src="item" alt="">
           </div>
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
            <van-goods-action-button type="danger" text="立即购买"  @click="buy" />
        </van-goods-action>
     
    </div>
</template>

<script>
// 引入轮播组件
  import swiper from "../components/public/swiper";
 import {createNamespacedHelpers} from "vuex";
    const {mapState,mapMutations} = createNamespacedHelpers("cart");
    export default {
        data(){
            return{
                detailsImg:[
                    require("../assets/img/details21.jpg"),
                    require("../assets/img/details22.jpg"),
                    require("../assets/img/details23.jpg"),
                    require("../assets/img/details24.jpg"),
                    require("../assets/img/details25.jpg"),
                    require("../assets/img/details26.jpg"),
                    require("../assets/img/details27.jpg"),
                    require("../assets/img/details28.jpg"),
                    require("../assets/img/details29.jpg"),
                    require("../assets/img/details30.jpg"),
                ],
                imges:[
                    require("../assets/img/details1.jpg"),
                    require("../assets/img/details2.jpg"),
                    require("../assets/img/details3.jpg"),
                    require("../assets/img/details4.jpg"),
                    require("../assets/img/details5.jpg"),
                ],
                list:[
                    {caption:"优惠",img:'领取优惠券'},
                    {caption:"促销",img:'购买可得2倍共139积分'},
                    {caption:"优惠",img:'假一赔四·退货运费险·极速退款'},


                ],
                lists:[
                    {caption:"选择",img:'请选择颜色/尺码'},
                    {caption:"参数",img:'品牌尺码'}

                ],
                 goods:{
                     img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                     title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                     nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                     price:"4999",
                     num:1
                }
            }
        },
        methods:{
             ...mapMutations(["add"]),
           buy(){
               this.$store.commit("order/buy",this.goods)
               this.$router.push("/order")
           },
              
            
              

        },
        mounted(){
         
        },
        computed:{
            ...mapState({
                num:state=>state.num
            })
        },
        components:{
            swiper,
        },
       
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        position: relative;
        background-color: transparent;

        img{
            width: 100%;
        }
       
        // 箭头
        .line{
           width: 95%;
            margin: 0  auto;
           
            .van-icon{
                position:fixed;
                color: #fff;
                z-index: 100;
                top: 0px;
                font-size: 1.4rem;
                width: 1.5rem;
                height: 1.5rem;
                color: #fff;
                background-color: #4b4c4c;
                border-radius: 50%;
            }
            .goback{
             
                left: 10px;
               
            }
            .shopp{
                
                right: 0;
               
            }
        }
       

    }   
        // 价格
        .price{
            background: #fff;
            height:30px;
            color: red;
            font-size: 1.2rem;
            margin:0  0.2rem;  
            box-sizing: border-box;
            span{
                margin-left: 0.3rem;
                font-size: 12px;
                background-color: #ff0036;
                color:#fff;
            }

        }
        // 标题
        .title{
             background: #fff;
            padding: 0 0.5rem;
            box-sizing: border-box;
            font-weight: 500;
            font-size:0.74rem ;
            color:#333;    
        }
        // 店铺信息
       .fordetail{
           width: 100%;
           padding: 0 0.5rem;
           box-sizing: border-box;
           margin-bottom: 0.5rem;
           background: #fff;
           .van-col{
               text-align: center;
               color: #b39999;
           }
           .left{
               text-align: left;
           }
           .right{
               text-align: right;
           }
       }

       
        // 优惠卷
        .discounts{
            width: 100%;
            padding:0.5rem ;
            color: #999;
            display: flex;
            background: #fff;
            box-sizing: border-box;
          
            
            .caption{
                flex: 1;
            }
           .img{
                flex: 10;
                float: right;
                color: #333;
                img{
                    width: 4rem;
                    float: left;
                }
            }
            a{
                color: red;
            }    
           .goto{
               flex: 0.5;
                float: right;
           }
        }
    //   商品评价  
    .evaluation{
        margin-top: 20px;
        width: 100%;
        padding: 0.5rem;
        background: #fff;
        box-sizing: border-box;
        .evahead{
            font-size: 0.8rem;
            a{
                font-size: 0.7rem;
                float: right;
                color: red;
            }
        }
        
        .bigimg{
            margin-top: 0.5rem;
            width: 1.5rem;
            border-radius :50%;
            background: url("../assets/img/details9.jpg");
            position: relative;
            display: flex;
            .smallimg{
            width:1.5rem;
            position: absolute;
            top: -1rem;
            left: 1rem;
            }
            .name{
              margin: 0 0.5rem;
            }
            
        }
        .newevaluation{
            font-size: 0.7rem;
            margin-top: 0.5rem;
            color: #333;
            border-bottom: 1px solid #ccc;
            padding-bottom: 0.5rem;
            .detailstitle{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.6rem;
                color: #ccc;
            }
        }

    }
    // 问问题
    .placeself{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        padding: 0.5rem;
        background: #fff;
        box-sizing: border-box;
        margin-bottom: 10px;  
        .everyone{
            font-size: 0.8rem;
            color: #444;
            a{
                float: right;
                font-size: 0.6rem;
                color: red;
            }
        }
        .ask{
            width: 100%;
            font-size: 0.65rem;
            margin: 0.3rem 0; 
            .askleft{
                float: left;
                color: #333;
                span{
                    color: #fff;
                    background-color: red;
                    font-size: 12px;
                    padding: 2px;
                }
            }
            .askright{
                float: right;
                color: #ccc;
            }
        }

    }
.detailsImg{
    margin-top: 20px;
}
 </style>
