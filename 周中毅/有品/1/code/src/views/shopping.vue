<template>
    <div>
        <!-- 底部 -->
        
            <van-submit-bar v-show="$store.state.cart.lists.length" :price="total * 100" button-text="结算" @submit="subb" >
  <van-checkbox checked-color="#d54843" @click="checkedAll" :value="checked">全选</van-checkbox>
  <!-- <template #tip>
    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
  </template> -->
</van-submit-bar>
        
       <div class="shopping auto">
           <img @click="$router.go(-1)" src="../assets/images/left.png" alt="">
           <span>购物车</span>
       </div>
       <!-- 购物车无商品时 -->
       <div class="guang auto" v-show="!($store.state.cart.lists.length)">
           <img src="../assets/images/gg.png" alt="">
           <span>购物车还没有商品哦~</span>
           <div class="qugg" @click="skip">去逛逛</div>
       </div>
<!-- v-show="($store.state.cart.lists.length)" -->
       <!-- 购物车有商品时 -->
       <div class="march"  v-for="(item,index) in lists" :key="index">
           <div class="del" @click="del(index)">删除</div>
           <div class="mar">
               <div class="mar_top">
                   <div class="mt1"><van-checkbox   :value="item.isSelect" @click="inputselect(index)" checked-color="#d54843"></van-checkbox></div>
                   <div>小米自营(特殊商品)</div>
               </div>
               <div class="mar_bot">
                   <div class="mb1">
                       <div class="bao"> <van-checkbox :value="item.isSelect" @click="inputselect(index)"  checked-color="#d54843"></van-checkbox></div>
                      
                   </div>
                   <div class="mb2">
                       <div class="mb2_top">
                           <div class="mb2_topL"><img src="../assets/images/redmi5.png" alt=""></div>
                            <div class="mb2_topR">
                                <div class="mb2_topRT">Redmi 10X 4G 4GB+128GB 冰雾白</div>
                                 <div class="mb2_topRB">
                                   <div class="comm">¥ <span>{{item.price}}</span></div>
                                     <div class="comm2"><button @click="item.num <= 1? 1:item.num--">-</button><span>{{item.num}}</span><button @click="item.num++">+</button></div>
                                 </div>
                            </div>
                       </div>
                       <div class="mb2_bot">
                           <span class="serve1">服务</span>
                           <span class="serve2">意外保护|延长保修|云空间服务</span>
                           <span class="serve3">选服务</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       
       <!-- 为你推荐 -->
       <div class="rec">
           <div class="rec_top">
               <div class="wn">
                   <div class="wn1"><img src="../assets/images/wn1.png" alt=""></div>
                   <div class="wn2">为你推荐</div>
                   <div class="wn3"><img src="../assets/images/wn2.png" alt=""></div>
               </div>
           </div>
           <div class="rec_bot">

                <div class="recommed auto">
            <div class="big" v-for="(item3,index3) in com2" :key="index3">
                <div class="goods" v-for="(item2,index2) in item3" :key="index2">
                     <div class="goods_top">
                    <img :src="item2.img" alt="">
                </div>
                <div class="goods_bot">
                    <div class="bot_font1">{{item2.f1}}</div>
                    <div class="bot_font2">{{item2.f2}}</div>
                   <div class="bf"><span class="bot_font3">{{item2.f3}}</span><span class="bot_font4">{{item2.f4}}</span></div> 
                </div>
                </div>
            </div>
        </div>



           </div>
       </div>
     
    </div>
</template>

<script>

    export default {
         data(){
            return{
                checked:true,
                total:0,
                lists:[
                   
                ],
                com2:[
                    [
                         {img:require("../assets/images/r1.png"),f1:"定制智能窗帘套餐",f2:"定制智能窗帘套餐最多跑一次",f3:"¥1259"},
                        {img:require("../assets/images/r2.png"), f1:"元气化妆灯",f2:"甜美配色，6000mA充电宝",f3:"¥219"},
                    ],
                    [
                        {img:require("../assets/images/r3.png"),f1:"欧普LED酷壁灯",f2:"宿舍之光，休闲学习好伙伴",f3:"¥59",f4:""},
                        {img:require("../assets/images/r4.png"),f1:"Zippo防风打火机",f2:"防风实用|哑漆工艺|简约机身",f3:"¥168",f4:""}, 
                    ]
                
                ],
               
            }
        },
        methods:{
            subb(){
                if(this.total>0){
                     this.$router.push('/order')
                     this.$rou
                }
               
            },
            del(index){
                this.lists.splice(index,1)
            },
            skip(){
                this.$router.push("/home/recommed")
                this.$store.commit('search/skip')
            },
             sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
             checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
             checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            }
        },
         created(){
       
            this.lists = this.$store.state.cart.lists;
             this.checkboxclick();
            this.sum();
            
        },
         beforeUpdate(){
            this.sum();
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
           
            this.$store.commit("cart/edit",this.lists);
        },
       
    }
</script>

<style lang="scss" scoped>

.van-submit-bar{
    z-index: 1000;
}
.march{
    width: 100%;
    padding: 0 10px;
    margin-top: 10px;
    position: relative;

}
.del{
    width: 40px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    position: absolute;
    top: 20px;
    right: 48px;
    font-size: 14px;
    background-color: #f4f4f4;
    border-radius: 10px;
}
.mar{
    width: 100%;
    height: 200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
}
.mar_top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #fbf4e6;
}
.mt1{
    width: 20px;
    height: 20px;
    margin-top: 15px;
    float: left;
}
.mar_top div:nth-child(2){
    display: inline-block;
    font-size: 15px;
    margin-left: 8px;
}
.mar_bot{
    width: 100%;
    height: 140px;
}
.mb1{
    float: left;
    width: 25px;
    height: 100%;
    // background-color: pink;
    position: relative;
    
   
}
.bao{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 40px;
    left: 0;
    
}
.mb2{
    width:340px ;
    height: 100%;
    // background-color: skyblue;
    padding: 10px;
    
}
.mb2_top{
    width: 100%;
    height: 90px;
   
}
.mb2_topL{
    width: 90px;
    height: 90px;
    float: left;
    margin-left: 10px;
}
.mb2_topR{
    width: 200px;
    height: 90px;
    float: right;
    // background-color: pink;
}
.mb2_topRT{
    width: 200px;
    height: 45px;
    font-size: 15px;
}
.mb2_topRB{
    width: 200px;
    height: 40px;
}
.comm{
    font-size: 12px;
    color: #bf1111;
    float: left;
    
}
.comm span{
    font-size: 16px;
}
.comm2{
    width: 80px;
    height: 40px;
    float: right;
}
.comm2 button{
    width: 25px;
    background-color: #fff;
    border: none;
    font-weight: 700;
}
.comm2 span{
    display: inline-block;
    width: 25px;
    background-color: #f4f4f4;
    text-align: center;
}
.mb2_bot{
    width: 100%;
    margin-top: 10px;
    // height: ;
}
.serve1{
    color: #bb9e72;
}
.serve2{
    margin-left: 5px;
    color: #787878;
}
.serve3{
    float: right;
    color: #333;
    font-weight: 700;
    // margin-left: 30px;
}



.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
    .recommed{
        width: 100%;
        // height: 50px;
        // background-color: pink;
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        .big{
            width: 100%;
            height: 265px;
            position: relative;
            margin-top: 8px;
        }
        .big .goods:nth-child(1){
            width: 49%;
            height:100%;
            background-color:#fff;
            // margin-right: 10px;
            border-radius: 5px;
            // margin-top: 10px;
           
            position: absolute;
            left: 0;
            overflow: hidden;
            float: left;
            
        }
         .big .goods:nth-child(2){
            width: 49%;
            height:100%;
            background-color:#fff;
            // margin-right: 10px;
            border-radius: 5px;
            // margin-top: 10px;
           
            position: absolute;
            right: 0;
            overflow: hidden;
            float: left;
           
        }
        .goods_bot{
            width: 100%;
            // height: 172px;
            padding: 0 5px;
        }
        .bot_font1{
            font-size: 16px;
            color: #373737;
             overflow: hidden;
         white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bot_font2{
            width: 100%;
            font-size: 12px;
            color: #9b9b9b;
            overflow: hidden;
         white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bot_font3{
            margin-top: px;
            font-size: 16px;
            color: red;
        }
         .bot_font4{
             margin-left: 5px;
             font-size: 14px;
             color: #9b9b9b;
             text-decoration: line-through;
         }
        .bf{
            margin-top: 5px;
        }
        .p1{
            width: 30px;
            height: 16px;
            float: left;
            font-size: 11px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            
        }
        .p{
            width: 100%;

            position: absolute;
            top: 155px;
            left: 0;

        }
        #yell{
            background-color: #f2b364;
        }
        .red{
            background-color: #d96b6c;
            margin-left: 4px;
        }
        .imge{
            height: 25px;
        }
    }




    .rec{
        width: 100%;
        // height: 300px;
        // background-color: skyblue;
        // padding: 0 10px;
    }
    .rec_top{
        width: 100%;
        height: 80px;
        text-align: center;
        line-height: 80px;
    }
    .wn{
        width: 130px;
        height: 35px;
        display: inline-block;
        text-align: center;
    }
    .wn1{
        width: 30px;
        height: 30px;
        float: left;
        margin-top: 25px;
    }
    .wn3{
        width: 30px;
        height: 30px;
        float: right;
        margin-top: 25px;

    }
    .wn2{
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        color: #333333;
    }













 .auto{
      margin: 0 auto;
        max-width: 420px;
        min-width: 320px;
  }
    .shopping{
        width: 100%;
        height: 90px;
        background-image: url("../assets/images/shopping1.png");
        background-size: cover;
        line-height: 90px;
        text-align: center;
        position: relative;

    }
    .shopping img{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 25px;
        left: 0;
    }
     .shopping span{
         color: #fff;
         font-weight: 700;
         font-size: 20px;
     }
     .guang{
         width: 100%;
         height: 280px;
        //  background-color: #f4f4f4;
         position: relative;
        //  text-align: center;
     }
     .guang img{
         width: 100px;
         height: 100px;
         position: absolute;
         top: 40px;
         left: 50%;
         margin-left: -50px;
         
     }
     .guang span{
         position: absolute;
         top: 150px;
         left: 50%;
         margin-left: -58.5px;
         color: #666666;
         font-size: 12px;

     }
     .guang div{
         position: absolute;
         top: 180px;
         left: 50%;
         margin-left: -35px;
         width: 70px;
         height: 35px;
         border: 1px solid #666;
         text-align: center;
         line-height: 35px;
         border-radius: 20px;
         font-size: 14px;
         color: #666;
         background-color: #fff;

     }
</style>