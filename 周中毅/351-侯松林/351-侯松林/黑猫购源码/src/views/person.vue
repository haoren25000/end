<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <!-- 登录天猫 -->
           <div class="entrance">
                <div class="img"  @click="$router.push('login')" ><img src="../assets/img/my1.jpg" alt=""></div>

                <div  class="login" v-if="$store.state.username">
                       
                       <a href="javascript:;" v-text="$store.state.username"></a>
                </div>
                <div class="login" v-if="!$store.state.username">
                    <a href="javascript:;" @click="$router.push('login')">登录/</a>
                    <a href="javascript:;" @click="$router.push('register')">注册</a>
                </div>
                <div class="icon">
                    <van-icon name="search" @click="$router.push('/search')" />
                    <van-icon name="setting-o"  @click="$router.push('/setress')"/>
                    <!-- <van-icon name="chat-o" /> -->

                </div>
           </div>
           <div style="clear:both"></div>
           <!-- 关注 -->
           <div class="attention ">
              <van-row type="flex" justify="center" v-show="!$store.state.username">
                <van-col span="6">--</van-col>
                <van-col span="6">--</van-col>
                <van-col span="6">--</van-col>
                <van-col span="6">--</van-col>
             </van-row>
              <van-row type="flex" justify="center" v-show="$store.state.username" >
                <van-col span="6">8</van-col>
                <van-col span="6">6</van-col>
                <van-col span="6">12</van-col>
                <van-col span="6">1</van-col>
             </van-row>
             <van-row type="flex" justify="center">
                <van-col span="6">收藏夹</van-col>
                <van-col span="6">关注店铺</van-col>
                <van-col span="6">足迹</van-col>
                <van-col span="6">红包卡卷</van-col>
             </van-row>
           </div>
           <!-- 会员店 -->
            <div class="VIPbox">
                <van-row type="flex" justify="center">
                    <van-col span="8" v-for="(item,index) in list" :key="index" >
                        <div class="left">
                            <p>{{item.title}}</p>
                            <a href="javascript:;">{{item.ps}}<van-icon name="arrow" /></a>
                        </div>
                        <div class="right"> <img :src="item.img" alt=""></div>
                      
                    </van-col>
                  
                </van-row>
            </div>

        </div>
        <!-- 头部end -->
        <!-- 主体 -->
        <div class="main">
            <div class="head">
                <h1>我的订单</h1>
                <a href="javascript:;" to="login">查看全部<van-icon name="arrow" /></a>
            </div>
            <!-- 订单流程 -->
            <div class="orderfrom">
                <ul>
                    <li><a href="javascript:;" @click="onPay">
                            <p><van-icon name="chat-o" /></p>
                            <p>待付款</p>
                        </a>
                    </li>
                    <li><a href="javascript:;">
                            <p><van-icon name="send-gift-o" /></p>
                            <p>待发货</p>
                        </a>
                    </li>
                    <li><a href="javascript:;" @click="onGoods" >
                        <p><van-icon name="logistics" /></p>
                            <p>待收货</p>
                        </a>
                    </li>
                    <li><a href="javascript:;" @click="onEnd" >
                        <p><van-icon name="comment-o" /></p>
                            <p>待评价</p>
                        </a>
                    </li>
                    <li><a href="javascript:;">
                        <p><van-icon name="refund-o" /></p>
                            <p>退款/售后</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="banner">
                <swiper :img="imges"></swiper>
            </div>
        </div> 
        <!-- 主体结束 -->
            <!-- 我的工具 -->
        <div class="tool">
            <div class="head">
                <h1>我的工具</h1>
                <a href="javascript:;">查看全部<van-icon name="arrow" /></a>
            </div>
            <div class="content">
                <van-row>
                    <!-- 工具1 -->

                    <van-col span="12" v-for="(item,index) in colorList"  :key="index">
                        <div class="left">
                            <p ><span :class="item.obj"></span>{{item.title}}</p>
                            <p class="fontC">{{item.ntitle}}</p>
                        </div>
                        <div class="right"><img :src="item.img" alt=""></div>
                    </van-col>
                     
                    
                </van-row>

            </div>
        </div>
        <!-- 猜你喜欢 -->
        <span class="goodlike" @click="$router.push('/details')">猜你喜欢</span>


        <!-- 产品栏 -->

             
        <div class="goodlist">
            <div class="firstlist" v-for="(item,index) in lists"  :key="index" >
                 <div class="proto"><img :src="item.img" alt=""></div>
                             <span class="fcolor">{{item.fcolor}}</span>
                             <div class="title">
                            <span class="caption">{{item.caption}}</span>
                             <p><span ><img src="../assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                
                            </div>
                        
                <div class="price"><span>￥{{item.price}}</span>  </div>
            </div>
            
        </div>
         <vantab ></vantab>
    </div>
</template>

<script>
// 引入底部导航
import vantab from "../components/public/vantab"
import swiper from "../components/public/swiper"
    export default {
      data(){
          return{
              list:[
                  {title:"会员店",ps:"立享红包" ,img:require('../assets/img/person3.jpg')},
                   {title:"会员中心",ps:"积分兑换",img:require('../assets/img/person4.jpg')},
                    {title:"私房红包",ps:"最高99元",img:require('../assets/img/person5.jpg')},

              ],
               imges:[
                    require('../assets/img/person1.jpg'),
                    require('../assets/img/person2.jpg'),
                  

                ],
              colorList:[
                  {img:require('../assets/img/gong1.jpg'),obj:{'iconfont':true,'icon-username':true,'reds':true},title:"邀请赚红包",ntitle:"每人得5元红包"},
                  {img:require('../assets/img/gong2.jpg'),obj:{'iconfont':true,'icon-u':true,'reds'  :true}, title:"U先试用",ntitle:"大牌试用一元起"},
                  {img:require('../assets/img/gong4.jpg'),obj:{'iconfont':true,'icon-huafei':true,'reds'  :true}, title:"话费充值",ntitle:"充值更方便"},
                  {img:require('../assets/img/gong8.jpg'),obj:{'iconfont':true,'icon-huojian':true,'greens':true},title:"我的服务",ntitle:"家庭服务元起"},
                  {img:require('../assets/img/gong5.jpg'),obj:{'iconfont':true,'icon-che1':true,'reds'  :true},title:"专享内购",ntitle:"内部价超划算"},
                  {img:require('../assets/img/gong6.jpg'),obj:{'iconfont':true,'icon-qiqiu':true,'blue'  :true},title:"我的小镇",ntitle:"0元也能做公益"},
                  {img:require('../assets/img/gong7.jpg'),obj:{'iconfont':true,'icon-lingjuanhuodong':true,'reds'  :true},title:"领劵中心",ntitle:"领大额优惠卷"},
                  {img:require('../assets/img/gong3.jpg'),obj:{'iconfont':true,'icon-bi':true,'yellow'  :true},title:"赚淘宝币",ntitle:"做任务赚淘宝币"}
                   
              ],
               lists:[
                    {
                        img:require("../assets/img/list1.jpg"),
                        fcolor:"K KingMelnn/肯麦依",
                        caption:"女士2020短款七分袖亚麻外套小西装",
                        discount:"10元卷",
                        price:"99"
                    },
                      {
                       img:require("../assets/img/list2.jpg"),
                        fcolor:"行更远",
                        caption:"夏季宽松小清新刺绣短袖t恤五分袖",
                        discount:"5元卷",
                        price:"48"
                    },
                     {
                        img:require("../assets/img/list3.jpg"),
                        fcolor:">KSJD/卡斯加德",
                        caption:"4g移动联通电信全网通电话手表wifi",
                        discount:"80元卷",
                        price:"299"
                    },
                     {
                       img:require("../assets/img/list4.jpg"),
                        fcolor:"行更远",
                        caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
                        discount:"80元卷",
                        price:"299"
                    },
                     {
                       img:require("../assets/img/list6.jpg"),
                        fcolor:"Adidas/阿迪达斯",
                        caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
                        discount:"30元卷",
                        price:"569"
                    },
                     {
                       img:require("../assets/img/list5.jpg"),
                        fcolor:"法犀卡",
                        caption:"万装达举卡潮牌肥四季加大牛仔裤",
                        discount:"10元卷",
                        price:"139"
                    },

                    
                ]
          }
      },
      methods:{
            onAll(){
                console.log(this.$store.state.username)
                console.log()
                if(this.$store.state.username){
                     this.$router.push("/orderlist/orderAll")
                 }else{
                     this.$router.push({
                         path:'/login',
                         query:{
                             path:"/orderlist/orderAll"
                         }

                     })
                }
            },
            onPay(){
                if(this.$store.state.username){
                     this.$router.push("/orderlist/orderPay")
                 }else{
                     this.$router.push({
                         path:'/login',
                         query:{
                             path:"/orderlist/orderPay"
                         }

                     })
                }
            },
            onGoods(){
                 if(this.$store.state.username){
                     this.$router.push("/orderlist/orderGoods")
                 }else{
                     this.$router.push({
                         path:'/login',
                         query:{
                             path:"/orderlist/orderGoods"
                         }

                     })
                }
            },
            onEnd(){
                 if(this.$store.state.username){
                     this.$router.push("/orderlist/orderEnd")
                 }else{
                     this.$router.push({
                         path:'/login',
                         query:{
                             path:"/orderlist/orderEnd"
                         }

                     })
                }
            }
      },
      components:{
          swiper,
          vantab
      },
      created(){
             this.$store.state.active=3
      }
    }
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 8rem;
    background-color: #ff0036;
    border-bottom-left-radius: 1.5rem; 
    border-bottom-right-radius: 1.5rem;
   .entrance{
        .img{
            width:3rem ;
            float: left;
        }
        .login{
            margin-top: 1.5rem;
            float: left;
        
            a{
                color: #fff;
                font-size: 1rem;
            }
        }
        .icon{
            font-size: 1.2rem;
            color: #fff;
            margin-top: 1.5rem;
            float: right;
            margin-right: 0.5rem;
            .van-icon{
                margin: 0 0.2rem;
            }
        }
   }
   .attention{
    margin-top: 0.5rem;
    text-align: center;
    color: #fff; 
    margin-bottom: 0.8rem;    
   }
   .VIPbox{
       width: 95%;
       margin-top: 0.8rem;
       margin: 0 auto;
       background-color: #fff;
       border-radius: 0.3rem;
       height: 2.5rem;
    .van-row{
          
       .left{
          padding:  0.5rem;
           box-sizing: border-box;
            float: left;
           a{
               font-size: 0.4rem;
               color: #ff0036;
           }
       }
       .right{
           float: left;
           width: 1.5rem;
           margin-top: 0.5rem;
       
           img{
              width: 1.5rem;
             
           }
       }
    }  
   }
}
.main{
    margin-top: 1.2rem;
    .head{
        margin-left: 0.5rem;
        font-size: 0.8rem;
        display: flex;
        margin-bottom: 0.5rem;
        p{
            float: left;
        }
        a{
            font-size: 0.6rem;
            margin-left: auto ;
            margin-right: 0.5rem;
             margin-top: 0.2rem;
        }
    }
    .orderfrom{
        width: 95%;
        background: #fff;
       
        height: 3rem;
        margin: 0  auto;
       
        ul{
            list-style: none;
            li{
                float: left;
                width: 20%;
                margin-top: 0.5rem;
                a{
                    display: block;
                    text-align: center;

                    p{
                        color: #333;
                     }
                     .van-icon{
                         color: #ff0036;
                         font-size: 1rem;
                     }
                }
            }
        }
    }
    .banner{
         width: 95%;
        background: #fff;
        margin: 0 auto;
        margin-top: 1rem;
    }
}
.tool{
     margin-top: 1rem;
     .head{
        margin-left: 0.5rem;
        font-size: 0.8rem;
        display: flex;
         margin-bottom: 0.5rem;
        p{
            float: left;
        }
        a{
            font-size: 0.6rem;
            margin-left: auto ;
            margin-right: 0.5rem;
            margin-top: 0.2rem;
        }
    }
    .content{
       width: 95%;
       margin: 0 auto;
      
       .van-row{
           background: #fff;
           color: #000;
           .van-col{
            border: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            .left{  
                padding: 10px;
                .fontC{
                    margin-top: 5px;
                    font-size:0.5rem;
                    color: #aaa;
                }
                .iconfont{     
                    margin-right: 5px;  
                    background: red;
                    color: #fff;
                    border-radius: 50%;
                    font-size:0.6rem;
                    padding: 1px ;
                }
                .reds{
                    background: red;
                }
                .greens{
                    background: green;
                }
                .blue{
                    background: #4166af;
                }
                .yelllow{
                    background: #ff6700;
                }
            }
            .right{
                margin-top: 10px;
                margin-right:10px;
                img{
                 width: 40px;
                }
            } 
           }
       }
    }
}
.goodlike{
    text-align: center;
    white-space: pre-wrap;
    border: 0px solid black;
    position: relative;
    box-sizing: border-box;
    display: block; 
    -webkit-box-orient: vertical;
    flex-direction: column; 
    align-content: flex-start;
    flex-shrink: 0;
    font-size:0.8rem;
    color: rgb(51, 51, 51); 
    font-weight: bold;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}
// 产品栏

.goodlist{
    width: 100%;
    height:40rem;
    .firstlist{
        float: left;
        width: 45%;
        background-color: #fff;
        box-sizing: border-box;
        margin: 0.5rem  0.4rem ;
        .proto{
            width: 100%;
            border: 1px solid transparent;
            box-sizing: border-box;
            img{
            width: 80%;; 
            margin: 0.5rem  0.7rem;
            }
        }
        .fcolor{
         margin-left: 10px;
         margin-right: 10px;
         font-size:0.5rem;
         color: #fff;
         background: #d1b5aa;
         padding:0.1rem 0.3rem;
         font-weight: 400;
         
        }
        .title{
            margin-top: 0.2rem;
            margin-left: 10px;
            margin-right: 10px;
            .caption{
              color:#111;
              font-size:0.6rem;
                //   line-height: 0.2rem; 
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
             
          }
          p{
              margin-top: 0.2rem;
              width: 100%;
              display: flex;
            img{
                width: 3.6rem;     
            }  
            .discount{
                display: inline-block;
                height: 0.6rem;
                font-size: 0.4rem;
                color: red;
                border: 1px solid red;      
            }
          }
        }
        .price{
            margin-left: 0.4rem;
            color: #ff0000;
            margin-top: 0.3rem;
            span{
                font-size:1rem;
                font-weight: 600;
            }
            a{
                display: block;
                float: right;
                color:#ff0000;
                font-size: 0.6rem;
                background-color: #ffe6eb;
                padding: 0.1rem 0.2rem;
                border-radius: 10px;
            }
        }
    }
}
</style>
