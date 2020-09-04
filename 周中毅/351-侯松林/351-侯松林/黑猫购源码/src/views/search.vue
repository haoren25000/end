<template>
    <div>
        <!-- $router.go(-1) -1表示返回上一级 -->
        <!-- $router.go(1) 1表示刷新当前页面 -->
        <!-- $router.go(2) 2表示返回下一级 -->
        <van-row class="topsearchNav">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-xiaoyuhao"></span></van-col>
            <van-col span="21">
                <van-search placeholder="搜索商品名称" v-model="keyword"/>
            </van-col>
            
        </van-row>
        <!-- 推送 -->
        <div class="dataPush">
            <van-row type="flex" justify="space-between">
                <van-col span="7">搜索发现</van-col>
                
            </van-row>
            <div class="listpush" @click="listPush($event)">
                <ul ref="box">
                    <li>女士</li>
                    <li>夏季</li>
                    <li>手表</li>
                    <li>中国风</li>
                    <li>阿迪达斯</li>
                    <li>牛仔裤</li>
                    <li>4g移动联通电信</li>
                </ul>
            </div>
        </div>
        

         <div class="goodlist">
            <div class="firstlist" v-for="(item,index) in search(keyword)"  :key="index"  @click="$router.push('/details')">
                 <div class="proto"><img :src="item.img" alt=""></div>
                             <span class="fcolor">{{item.fcolor}}</span>
                             <div class="title">
                            <span class="caption">{{item.caption}}</span>
                             <p><span ><img src="../assets/img/yun1.jpg" alt=""></span><span class="discount">{{item.discount}}</span></p>
                                
                            </div>
                        
                <div class="price"><span>￥{{item.price}}</span> <a href="javascript:;">看相似</a> </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
            data(){
                return{
                    keyword:'',
                      list:[
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
                search(keyword){
                     return this.list.filter( item => item.caption.includes(keyword))

                },
                // onscroll(){
                //     let head=document.querySelector(".topsearchNav")
                //     let dataPush=document.querySelector(".dataPush")
                  
                //    let  scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //    if(scrollTop>0){
                //        head.style.position = 'fixed';
                //        head.style.top = '0px';
                //     dataPush.style.paddingTop="50px"
                //    }else{
                //        head.style.position = 'static';
                //         dataPush.style.paddingTop="0px"
                //    }
                // },
                listPush(event){
               
                 this.keyword=  event.target.innerHTML
                }

              
            },
            mounted(){
                //  window.addEventListener('scroll', this. onscroll)

            },


       
    }
</script>

<style lang="scss" scoped>
.topsearchNav{
        width: 100%;
        background-color: #ff0036;
        position: fixed;
        top: 0;
        .icon-xiaoyuhao{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon--search1{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
 }
.dataPush{
        width: 95%;
        margin: 0 auto;
        margin-top: 50px;
        background: #fff;
    .van-row{
        width: 95%;
        margin: 0 auto;
        margin-top: 10px;
        .van-col{
            font-size: 12px;
        }
    }
    .listpush{
      height: 60px;
        ul{
            list-style: none;
            li{
                padding: 2px 10px;
                float: left;
                background: #ddd;
                font-size: 15px;
                margin-top: 10px;
                margin-left: 5px;
                border-radius: 15px;
            }
        }
    }
}
.goodlist{
    width: 100%;
    margin-top: 20px;
    .firstlist{
        float: left;
        width: 45%;
            background: #fff;
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
   
        font-size:0.5rem;
         color: #fff;
         background: #d1b5aa;
         padding:0.1rem 0.3rem;
         font-weight: 400;
         
        }
        .title{
            margin-top: 0.2rem;
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