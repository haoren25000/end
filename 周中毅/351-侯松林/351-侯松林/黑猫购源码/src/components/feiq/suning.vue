<template>
    <div>
       <!-- 头部 -->
       <div class="header">
           <!-- 标题 -->
           <div class="suningTitle">
                <van-row type="flex" justify="space-between">
                        <van-col span="15">苏宁易购官方旗舰店<span><img src="../../assets/img/su1.jpg" alt=""></span></van-col>
                        <van-col span="5">
                            <div class="attention">
                                 <img src="../../assets/img/su2.jpg" alt=""><span>关注</span>
                            </div>
                        </van-col>
                    </van-row>
           </div>
            <!-- 天猫体验指数 -->
            <div class="experience">
                <div class="tianm">天猫</div>
                <div class="img"><img src="../../assets/img/su3.jpg" alt=""></div>
                <div class="fens">粉丝数2827万</div>
            </div>
            <!-- 菜单 -->
            <div class="menu">
                <van-row gutter="20">
                    <van-col span="5">
                        <div class="search">
                            <img src="../../assets/img/su4.jpg" alt=""><span>搜索</span>
                        </div>
                    </van-col>
                    <van-col span="18">           
                            <div class="swiper-container menuSlideContainer">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide bbside" >
                                              首页
                                        </div>
                                         <div class="swiper-slide" >
                                              宝贝
                                        </div>
                                         <div class="swiper-slide" >
                                              新品
                                        </div>
                                         <div class="swiper-slide" >
                                              <img src="@/assets/img/su5.jpg" alt="">
                                        </div>
                                         <div class="swiper-slide" >
                                              分类
                                        </div>
                                        <div class="swiper-slide" >
                                              微淘
                                        </div>
                                                        
                                   </div>
                           </div>
                    </van-col>
                </van-row>
            </div>
            <!-- 限时推荐 -->
            <div class="recommend">
                <div class="swiper-container menuSlideContainer">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide " >
                                             <img src="@/assets/img/su6.jpg" alt="">
                                        </div>
                                         <div class="swiper-slide" >
                                             <img src="@/assets/img/su8.jpg" alt="">
                                        </div>
                                         <div class="swiper-slide" >
                                              <img src="@/assets/img/su10.jpg" alt="">
                                        </div>
                               
                                   </div>
                           </div>
            </div>
       </div>
    </div>
</template>

<script>
import Swiper from "swiper"

    export default {
        data(){
            return{
                menu:["首页","宝贝","新品",""],

               
            }
        },
        mounted(){
             new Swiper('.menuSlideContainer', {
                slidesPerView: 4,
                spaceBetween: 8,
                // init: false,
                // pagination: {
                //     el: '.swiper-pagination',
                //     // clickable: true,
                // },
                
                });
        }
    }
</script>

<style lang="scss" scoped>
.header{
    background: -webkit-linear-gradient(top,#5e5e5e,#5f5f5f,#6e6e6d);
    padding-top: 10px;

    .suningTitle{
        margin-top: 10px;
        width: 90%;
        margin: 0 auto;
        font-size: 17px;
        color: #fff;
        .van-col{
          display: flex;
        }
        img{
            width:16px;
            margin-top: 0.2rem;
        }
        .attention{
            width: 100%;
           
            display: flex;
            border: 1px  solid #aaa;
            border-radius: 15px;
            font-size: 0.6rem;
            img{
                margin-left: 5px;
               width: 30%;
                margin-right: 3px;
            }
            span{
               margin: 1px;
            }
        }
    }
    .experience{
        display: flex;
        width: 90%;
        margin: 0 auto;
        .tianm{
            background: #fd2b2c;
            color: #fff;
           padding: 0 0.2rem;
            border-radius:15px;
        }
        .fens{
            color: #fff;
        }
    }
    .menu{
        width: 90%;
        margin: 0 auto;
        .van-col{
            
            .search{
               width: 100%;
                background: #969696;
                position: relative;
                padding:2px 5px ;
                border-radius: 15px;
                img{
                    width:0.8rem;
                    position: absolute;
                    top: 5px;
                    left: 5px;
                }
                span{
                    font-size: 0.7rem;
                    color: #fff;
                    margin-left:1rem;
                    
                }
            }
        }
    }
}
.menuSlideContainer{

    .swiper-slide{
        color: #fff;
        font-size:0.65rem;
        text-align: center;
        img{
            width: 2.5rem;
            margin-top: 0.2rem;
        }
    }
    .bb{
        border-bottom: 1px solid #fff;
    }
}
</style>