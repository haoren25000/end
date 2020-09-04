<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <!-- 导航 --> 
            <div class="navrow">
                <van-row type="flex" justify="space-between" >
                    <van-col span="3" ><van-icon class="iconfont icon-adbddb"/></van-col>
                    <van-col span="18" > 
                        <van-search
                         @focus="getSearch" 
                            shape="round"
                            background="#fe1a2e"
                            placeholder="请输入搜索关键词"
                            />
                    </van-col>
                    <van-col span="3" @click="$router.push('/login')"><van-icon  class="iconfont icon-username" /></van-col>
                </van-row>
            </div>
            
            <!-- 轮播 -->
            <div class="banner">
                <swiper :img="imges"></swiper>
            </div>
            <!-- 滑动 -->
            <div class="plant">
                <div class="swiper-container  jhusSlideContainer">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                            <div class="box" v-show="index%2==0">
                                <div class="top"><img :src="item.img" alt=""></div>
                                <div class="down">{{item.name}}</div>
                            </div>
                            <div class="box2" v-show="index%2!=0">
                                <div class="top"><img :src="item.img" alt=""></div>
                                <div class="down">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        <!-- 头部end -->
            <!-- 天猫618 -->
            <div class="tianm618">
                <van-row>
                    <van-col span="7">
                        <div class="coupon">
                            <span class="icon">
                                <img src="@/assets/img/tianm6181.jpg" alt="">
                            </span>
                            <span class="texts">
                                <div class="name">a**g</div>
                                <div class="content">领了8元卷</div>
                            </span>
                        </div>
                    </van-col>
                    <van-col span="10"><img src="@/assets/img/tianm6184.jpg" alt=""></van-col>
                    <van-col span="7">
                         <div class="coupon">
                            <span class="icon">
                                <img src="@/assets/img/tianm6183.jpg" alt="">
                            </span>
                            <span class="texts">
                                <div class="name">搭配购</div>
                                <div class="content">搭配买省钱购</div>
                            </span>
                        </div>
                    </van-col>
                </van-row>
                <!-- 宝箱 -->
               <div class="treasureBox">
                  <img src="@/assets/img/tianm6182.jpg" alt="">
                    <div class="title">
                        <p>开宝箱领红包</p>
                        <p>现金红包天天领</p>
                    </div>
               </div>
            </div>
            <!-- 淘宝推荐 -->
            <div class="recommend">
                <van-row>
                    <van-col span="12">
                            <h2>淘抢购</h2>
                    </van-col>
                    <van-col span="6"><h2>百亿补贴</h2></van-col>
                    <van-col span="6"><h2>品牌特卖</h2></van-col>

                    <van-col span="6"> 
                        <img src="@/assets/img/jh10.jpg" alt="">
                        <p class="name">498人想买</p>
                        <p class="price">￥17.5</p>
                    </van-col>
                    <van-col span="6">
                         <img src="@/assets/img/jh11.jpg" alt="">
                        <p class="name">149人想买</p>
                        <p class="price">￥19.8</p>
                    </van-col>
                    <van-col span="6">
                         <img src="@/assets/img/jh12.jpg" alt="">
                        <p class="name backred">补贴691元</p>
                        <p class="price red">￥4449</p>
                    </van-col>
                    <van-col span="6" to="/home/furniture">
                        <img src="@/assets/img/jh13.jpg" alt="">
                        <p class="name red">2.6折</p>
                        <p class="price red">￥79</p>
                    </van-col>

                </van-row>
            </div>
            <!-- 菜单滑动 -->
            <div class="menuplant">
                <div class="swiper-container menuSlideContainer">
                        <div class="swiper-wrapper" >
                            <div class="swiper-slide" v-for="(item,index) in menus" :key="index" >
                            <router-link :to="item.topush">
                            
                                <p class="title">{{item.title}}</p>
                                <div class="title2">{{item.title2}}</div>
                            </router-link>
                            </div>
                                               
                </div>
            </div>
            <!-- 菜单 -->
         </div>
          <!-- @click="$router.push(item.topush)"  -->
         
             <router-view></router-view>
          

            <!-- 菜单内容 -->

            <!-- 产品 -->
                <!-- 猜你喜欢 -->
        <span class="goodlike" @click="$router.push('/details')">猜你喜欢</span>


        <!-- 产品栏 -->

                  
        <div class="goodlist">
            <div class="firstlist" v-for="(item,index) in lists"  :key="index"  @click="$router.push('/details')" >
                
                 <div class="proto" ><img :src="item.img" alt=""></div>
                             <span class="fcolor">{{item.fcolor}}</span>
                             <div class="title">
                            <span class="caption">{{item.caption}}</span>
                             <p><span ><img src="@/assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                
                            </div>
                        
                <div class="price"><span >￥{{item.price}}</span > <a href="javascript:;">看相似</a> </div>
            </div>
            
        </div> 
        <vantab></vantab>
    </div>
</template>

<script>
  import Swiper from "swiper"
import swiper from "@/components/public/swiper"
// 底部组件
    import vantab from "@/components/public/vantab"
    export default {
        data(){
            return{
                imges:[
                    require("@/assets/img/jhb1.jpg"),
                    require("@/assets/img/jhb2.jpg"),
                    require("@/assets/img/jhb3.jpg"),
                    require("@/assets/img/jhb4.jpg"),
                ],
                list:[
                    {img:require('@/assets/img/jh2.jpg'),name:'买贵必赔'},
                    {img:require('@/assets/img/jh3.jpg'),name:'大额领券'},
                    {img:require('@/assets/img/jh4.jpg'),name:'限时5折'},
                    {img:require('@/assets/img/jh5.jpg'),name:'分期免息'},
                    {img:require('@/assets/img/jh6.jpg'),name:'量版优选'},
                    {img:require('@/assets/img/jh8.jpg'),name:'家名品'},
                    {img:require('@/assets/img/jh9.jpg'),name:'聚新品'},
                ],
                menus:[
                  {title:"超值精选",title2:"划算必抢",topush:"/home/choiceness" },
                  {title:"箱包配饰",title2:"大牌尖货",topush:"/home/update" },
                  {title:"母婴童装",title2:"妈妈优选",topush:"/home/motherBady" },
                  {title:"男人运动",title2:"健康活力",topush:"/home/outdoors" }, 
                  {title:"进口好货",title2:"品质专享",topush:"/home/inward" },
                  {title:"内衣睡衣",title2:"时尚舒适",topush:"/home/underwear" },
                  {title:"家纺家具",title2:"温馨之家",topush:"/home/furniture" },
                //   {title:"潮流鞋靴",title2:"时尚潮鞋"},
                //   {title:"智能手机",title2:"5G新款"},
                //   {title:"箱包配饰",title2:"大牌尖货"},
                //   {title:"数码文教",title2:"办公必备"},
                //   {title:"大小家电",title2:"家庭必备"},
                //   {title:"进口好货",title2:"品质专享"},
                //   {title:"内衣睡衣",title2:"时尚舒适"},
                //   {title:"家纺家具",title2:"温馨之家"},
                //   {title:"潮流鞋靴",title2:"时尚潮鞋"},
                //   {title:"电脑鼠标",title2:"潮酷之选"},
                //   {title:"汽车代步",title2:"出行必备"},
                //   {title:"潮流女装",title2:"百搭精选"},
                //   {title:"美妆护肤",title2:"闻香识女人"},
                      



                ],
                  lists:[
                    {
                        img:require("@/assets/img/list1.jpg"),
                        fcolor:"K KingMelnn/肯麦依",
                        caption:"女士2020短款七分袖亚麻外套小西装",
                        discount:"10元卷",
                        price:"99"
                    },
                   

                      {
                       img:require("@/assets/img/list2.jpg"),
                        fcolor:"行更远",
                        caption:"夏季宽松小清新刺绣短袖t恤五分袖",
                        discount:"5元卷",
                        price:"48"
                    },
                     {
                        img:require("@/assets/img/list3.jpg"),
                        fcolor:">KSJD/卡斯加德",
                        caption:"4g移动联通电信全网通电话手表wifi",
                        discount:"80元卷",
                        price:"299"
                    },
                     {
                       img:require("@/assets/img/list4.jpg"),
                        fcolor:"行更远",
                        caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
                        discount:"80元卷",
                        price:"299"
                    },
                     {
                       img:require("@/assets/img/list6.jpg"),
                        fcolor:"Adidas/阿迪达斯",
                        caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
                        discount:"30元卷",
                        price:"569"
                    },
                     {
                       img:require("@/assets/img/list5.jpg"),
                        fcolor:"法犀卡",
                        caption:"万装达举卡潮牌肥四季加大牛仔裤",
                        discount:"10元卷",
                        price:"139"
                    },

                    
                ],
            }
        },
        components:{
           swiper,
           vantab
        },
        methods:{
             getSearch(){
                    this.$router.push("/search");
                },
        },
        
        mounted(){
          new Swiper('.jhusSlideContainer', {
                slidesPerView: 4.5,
                spaceBetween: 5,
               
                pagination: {
                    el: '.jhusSlidePagination',
                },
            });
           
                new Swiper('.menuSlideContainer', {
            slidesPerView: 4,
            spaceBetween: 10,
            // init: false,
            // pagination: {
            //     el: '.swiper-pagination',
            //     // clickable: true,
            // },
            
            });
            
         },
        
       

        }
</script>

<style lang="scss" scoped>
.header{
     background: #fe1a2e;
    
    .navrow{
        width: 100%;
        background:#fe1a2e ;
        position: fixed;
        padding-top: 10px;
        padding-bottom: 5px;
        z-index: 1000;
        top: 0;
        .van-col{
            
            text-align: center;
            font-size:1.1rem;
            color: #fff;
            .van-search {
                height: 1.25rem;
                width: 100%;
            }
            .icon-adbddb{
                color: #000;
            }
        }
       
    }
    .banner{
        padding-top: 0.8rem;
        width: 95%;
        margin: 0 auto;
         margin-top: 40px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
        img{
            width: 100%;
        }
    }
    .plant{
        width: 95%;
        margin: 0 auto;
        .box{
            width: 100%;
            .top{ 
                width: 100%;
                background: #fff;
                border-top-right-radius: 0.8rem;
                border-top-left-radius:  0.8rem;
                overflow: hidden;
                img{
                width: 80%;
                margin: 0 auto;
                }
            }
            .down{
                background: -webkit-linear-gradient(left,#ff7da4,#ff4253,#ff594d);
                border-bottom-right-radius:  0.8rem;
                border-bottom-left-radius:  0.8rem;
                font-size: 0.5rem;
                text-align: center;
                color: #fff;
                font-weight: 600;
                padding:3px 0;

            }
        }
        .box2{
            width: 80%;
            margin: 0 auto ;
            margin-top: 0.2rem;
            .top{ 
                width: 100%;
                background: #fff;
                border-top-right-radius: 0.8rem;
                border-top-left-radius:  0.8rem;
                overflow: hidden;
                img{
                width: 80%;
                margin: 0 auto;
                }
            }
            .down{
                background: -webkit-linear-gradient(left,#ff7da4,#ff4253,#ff594d);
                border-bottom-right-radius:  0.8rem;
                border-bottom-left-radius:  0.8rem;
                font-size: 0.5rem;
                text-align: center;
                color: #fff;
                font-weight: 600;
                padding:3px 0;

            }
        }

    }
    
}
 .tianm618{
        padding-top: 15px;
        height:4rem;
        background: #fe1a2e;
        border-bottom-right-radius:  50%;
        border-bottom-left-radius:   50%;
        overflow: hidden;
        .van-row{
            width: 95%;
            margin: 0 auto;
            margin-top: 5px;
           .van-col{
               .coupon{
                   width: 100%;
                   background: #ff6331;
                   border-radius: 15px;
                   .icon{
                       display: inline-block;
                       background: #fff;
                       border-radius: 50%;
                       overflow: hidden;
                       margin-top: 5px;
                      img{
                          width:1rem;
                        
                          
                      }
                   }
                   .texts{
                    display: inline-block;
                    font-size: 0.4rem;
                    color: #fff;
                    margin-left: 5px;
                   }
                  
               }
              
           }
}
 .treasureBox{
     width: 100%;
     position: relative;;
     img{
         width: 60%;
         margin: 0 auto;
     }
     .title{
         position: absolute;
         top: 0;
         left: 50%;
         margin-left: -1.8rem;
         margin-top: 0.2rem;
         color:#fff490 ;
         font-size: 0.65rem;
         font-weight: 600;
         text-align: center;
         :nth-child(2){
             font-size:0.5rem;
             margin: 0 auto;
             font-weight: normal; 
            }
       }
    
  }
}  
.recommend{
    width: 95%;
    background: #fff;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    .van-row{
        .van-col {
            padding:5px;  
        h2{
            width: 100%;
            color: #333;
            font-weight: 600;
            font-size: 14px;
            
        }
        p{
            color:#00bf7f;
            text-align: center;
        }
        .name{
            background: #ffefef;
            border-radius: 15px;
        }
        .price{
            font-weight: 700;
        }
        .backred{
            background: #ff5b11;
            color: #fff;
        }
        .red{
            color:  #ff5b11;
        }
        
        }
    }
   
}
.menuplant{
    width: 95%;
    margin: 0 auto;
    .title{
        font-size: 13px;
        font-weight: 700;
        color: #000;
    
        width: 3rem;
        text-align: center;
    }
    .title2{
        font-size: 10px;
        color: #aaa;
        text-align: center;
        margin-right: 0.5rem;
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
    height: 40rem;
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
.swiper-container {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        // font-size: 18px;
        // // background: #fff;

        // /* Center slide text vertically */
        // display: -webkit-box;
        // display: -ms-flexbox;
        // display: -webkit-flex;
        // display: flex;
        // -webkit-box-pack: center;
        // -ms-flex-pack: center;
        // -webkit-justify-content: center;
        // justify-content: center;
        // -webkit-box-align: center;
        // -ms-flex-align: center;
        // -webkit-align-items: center;
        // align-items: center;
    }	
</style>