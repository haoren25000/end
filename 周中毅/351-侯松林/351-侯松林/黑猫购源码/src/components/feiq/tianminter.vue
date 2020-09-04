<template>
    <div>
        <!-- 头部 -->
        <header class="header">
                <!-- 导航栏 -->
<!-- 
                <div class="head">
                    <div class="iconfont icon-menu" @click="$router.push('/classify')" ></div>
                    <div class="homehead"><img src="@/assets/img/tianm.jpg" alt="" ></div>
                    <div class="iconfont icon-username" @click="$router.push('/login')"></div>
                </div> -->
             <!-- 搜索栏 -->
            <!-- <van-search @focus="getSearch"
              
                shape="round"
                background="#ff0036"
                placeholder="搜索商品.品牌"
            /> -->
                <!-- 搜索栏 end-->

                <van-row type="flex" justify="space-between">
                    <van-col span="3" class="iconfont icon-menu" @click="$router.push('/classify')" ></van-col>
                    <van-col span="12"><van-search @focus="getSearch"              
                                         shape="round"
                                         background="#ff0036"
                                         placeholder="搜索商品.品牌"
                                     /> </van-col>
                    <van-col span="3"  class="iconfont icon-username" @click="$router.push('/login')"></van-col>
                </van-row>
          
        </header>
       
            <!-- 图标列表 -->
            <div class="icon-list">
                <ul>
                    <li><a href="javascript:;" @click="$router.push('suning')">
                            <img src="@/assets/img/nav1.jpg" alt="">
                            <p>苏宁易购</p>
                        </a>
                    </li>
                     <li><a href="javascript:;"  @click="$router.push('tianmshoop')" >
                            <img src="@/assets/img/nav2.jpg" alt="">
                            <p>天猫超市</p>
                        </a>
                    </li>
                     <li><a href="javascript:;"  @click="$router.push('tianminter')">
                            <img src="@/assets/img/nav3.jpg" alt="">
                            <p>天猫国际</p>
                        </a>
                    </li>
                    <li><a href="javascript:;"  @click="$router.push('juhuasuan')">
                            <img src="@/assets/img/nav4.jpg" alt="" >
                            <p>聚划算</p>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:;" @click="$router.push('classify')" >
                            <img src="@/assets/img/nav5.jpg" alt="" @click="add">
                            <p >分类</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 图标列表end -->

            
        <!-- 轮播层 -->
        <div class="banner">
            <!-- <div class="swiper-container homeSlideContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo4.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="../assets/img/lunbo6.jpg" alt="">
                    </div>
                </div>
                <!-Add Pagination -->
                <!-- <div class="swiper-pagination homeSlidePagination"></div> -->
            <!-- </div> --> 
            <swiper :img="imges"></swiper>
        </div>
        <!-- 轮播层end -->
           
           <!-- 猜你喜欢 -->
        <span class="goodlike" @click="$router.push('/details')">猜你喜欢</span>


        <!-- 产品栏 -->

             
        <div class="goodlist">
            <div class="firstlist" v-for="(item,index) in list"  :key="index"  @click="$router.push('/details')">
                
                 <div class="proto" ><img :src="require(`@/assets/img/${item.img}`)" alt=""></div>
                             <span class="fcolor">{{item.fcolor}}</span>
                             <div class="title">
                            <span class="caption">{{item.caption}}</span>
                             <p><span ><img src="@/assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                
                            </div>
                        
                <div class="price"><span >￥{{item.price}}</span > <a href="javascript:;">看相似</a> </div>
            </div>
            
        </div>
        <!-- 产品栏end -->
            
          
       
           <vantab ></vantab>
    </div>
</template>

<script>
    // 引入插件
   import swiper from "@/components/public/swiper"
    // 引入底部导航
     import vantab from "@/components/public/vantab"
    export default {
        data(){
            return {
                // value:"",
                imges:[
                    require('@/assets/img/lunbo1.jpg'),
                    require('@/assets/img/lunbo2.jpg'),
                    require('@/assets/img/lunbo3.jpg'),
                    require('@/assets/img/lunbo4.jpg'),
                    require('@/assets/img/lunbo5.jpg'),
                    require('@/assets/img/lunbo6.jpg'),

                ],
                list:[
                    // {
                    //     img:require("../assets/img/list1.jpg"),
                    //     fcolor:"K KingMelnn/肯麦依",
                    //     caption:"女士2020短款七分袖亚麻外套小西装",
                    //     discount:"10元卷",
                    //     price:"99"
                    // },
                   

                    //   {
                    //    img:require("@/assets/img/list2.jpg"),
                    //     fcolor:"行更远",
                    //     caption:"夏季宽松小清新刺绣短袖t恤五分袖",
                    //     discount:"5元卷",
                    //     price:"48"
                    // },
                    //  {
                    //     img:require("@/assets/img/list3.jpg"),
                    //     fcolor:">KSJD/卡斯加德",
                    //     caption:"4g移动联通电信全网通电话手表wifi",
                    //     discount:"80元卷",
                    //     price:"299"
                    // },
                    //  {
                    //    img:require("@/assets/img/list4.jpg"),
                    //     fcolor:"行更远",
                    //     caption:"4棉麻短袖套装男夏季印花半袖t恤中国风两件套日系复古一套衣服薄",
                    //     discount:"80元卷",
                    //     price:"299"
                    // },
                    //  {
                    //    img:require("@/assets/img/list6.jpg"),
                    //     fcolor:"Adidas/阿迪达斯",
                    //     caption:"阿迪达斯adidas口2019eh4011夹克羽绒服",
                    //     discount:"30元卷",
                    //     price:"569"
                    // },
                    //  {
                    //    img:require("@/assets/img/list5.jpg"),
                    //     fcolor:"法犀卡",
                    //     caption:"万装达举卡潮牌肥四季加大牛仔裤",
                    //     discount:"10元卷",
                    //     price:"139"
                    // },

                    
                ],
               
            }
        },
            methods:{
                getSearch(){
                    this.$router.push("/search");
                },
                add(){
                    this.$router.push('/classify')
                    
                }
              
            },
            components:{
                swiper,
                vantab 
            },
            created(){
               
                this.$store.state.active=0,
                 this.$axios.get("goodsApi").then((res)=>{
                    
                   this.list=res.data
                   console.log(this.list[0].img)
                 })
                   
            }
    }
</script>

<style lang="scss" scoped>
// 头部
.header{
   width: 100%;
   background-color:#ff0036 ;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 1000;
    .head{
        width: 100%;
        display: flex;
       .icon-menu{
        flex: 2;
        font-size: 25px;
        color:rgba(250,250,250,0.5);
        margin-left: 0.5rem;
        }
        .icon-username{
            font-size: 25px;
            color:rgba(250,250,250,0.8);
            flex: 2;
            text-align: right;
            margin-right: 0.5rem;
        }
        .homehead{
            flex: 5;
            text-align: center;
            img{
                width: 6rem;
               margin-top: 0.5rem;  
               margin-left: 1.4rem;
            }
        }
    }
  
}
// 图标列表
.icon-list{
    width: 100%;
    margin-top: 100px;
    box-sizing: border-box;
    text-align: center;
   
    ul{
        list-style: none;
        display: flex;
       
        li{
            flex: 1;
            margin: 0 0.5rem;
            a{ 
                display: block;
                 width: 100%;
                 text-align: center;
                img{
                     width: 90%;
                }
                p{
                    font-size: 0.55rem;
                    color: #333;

                }
                
            }
        }
    }
}

// 轮播w

.banner{
    width: 100%;
    
}
swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

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
    }
// 
// 猜你喜欢

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