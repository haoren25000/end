<template>
    <div>

        <!-- 支付 -->
        <van-submit-bar :price="total*100" button-text="去支付"  />
         <div class="shopping auto">
           <img @click="$router.go(-1)" src="../assets/images/left.png" alt="">
           <span>确认订单</span>
         </div>
         <div class="all">


             <!-- 地址信息 -->
             <div class="a1" @click="a">
                
                     <div v-show="iss">
                     <span class="a11">{{name}}</span>
                 <span class="a12">{{tel}}</span>
                 </div>
                 <div v-show="iss">
                      <span class="a13">{{address}}</span>
                 </div>
                 <div v-show="!iss" class="tianjia">请添加收货地址</div>
                
                
                 <div class="aimg"><img src="../assets/images/r5.png" alt=""></div>
                
             </div>


             <!-- 支付方式 -->
             <div class="payment br">
                 <div class="zhifubao">
                     <span><img src="../assets/images/zhifubao.png" alt=""></span>
                     <span>支付宝</span>
                     <span></span>
                 </div>
                 <div class="xiaomiWallet">
                      <span><img src="../assets/images/xiaomiqianbao.png" alt=""></span>
                     <span>小米钱包</span>
                 </div>
                 <div class="select">
                   
                        <van-radio-group v-model="radio" icon-size="15px">
  <van-radio name="1" checked-color="#d0af7a" ></van-radio>
  <van-radio name="2" checked-color="#d0af7a"></van-radio>
</van-radio-group>           
                 </div>
             </div>
            <!-- 小米自营 -->
            <div v-for="(item,index) in lists" :key="index">
                    <div class="self br">
                <div class="self1">
                    <div class="mi"><img src="../assets/images/mi4.png" alt=""></div>
                    <span>小米自营(特殊商品)</span>
                </div>
                <div class="self2">
                    <div class="self2_img"><img src="../assets/images/redmi7.png" alt=""></div>
                    <div class="self2_right">
                        <div>{{item.name}}</div>
                        <div>
                           <div class="sr1">¥<span>{{item.price}}</span></div> 
                           <span class="sr2">x <span>{{item.num}}</span></span>
                        </div>
                    </div>
                </div>
                <div class="self3">
                    <span>发票类型</span>
                    <span>个人电子发票 <div><img src="../assets/images/right5.png" alt=""></div></span>
                   
                </div>

            </div>
            <!-- 优惠券 -->
            <div class="discount br">
                <van-cell title="优惠券" is-link value="暂无可用" />
                <van-cell-group>
  <van-cell title="配送方式" value="快递配送" />
  
</van-cell-group>
            </div>
            <!-- 商品金额 -->
            <div class="goodsprice br">
                <van-cell-group>
  <van-cell title="商品金额" :value="'¥'+total" />
  <van-cell title="运费" style="color:#c72e2e;" value="+¥0.00" />
</van-cell-group>
            </div>
            </div>
            
            
         </div>
    </div>
</template>

<script>



    export default {
        data(){
            return{
                radio:false,
                iss:false,
                name:"",
                tel:"",
                address:""
            }
        },
        methods:{
            a(){
                //  this.$store.state.vanTabbar = false;
                 this.$router.push('/address')
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
        },
          computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
         created(){
           
             this.lists = this.$store.state.cart.lists;
             this.sum()//计算总价格
             console.log(this.lists);
               // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data.address; //定义地址对象
            }
            console.log(data);
            
               if(this.name.length == 0&&this.tel.length == 0&&this.address.length == 0){
                 this.iss = false
             }else{
                 this.iss = true;
             }
          
           
        },
       
        // 切换组件生周期钩子，销毁函数
        // beforeDestroy(){
        //     this.$store.state.vanTabbar = true;
           
        // }
    }
</script>

<style lang="scss" scoped>
.tianjia{
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
}
.van-submit-bar{
    z-index: 1000;
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
     .all{
         width: 100%;
         margin-top: 10px;
         padding: 0 10px;
     }
     .a1{
         width: 100%;
         height: 80px;
         padding: 10px 10px;
         background-color: #fff;
         position: relative;
         
     }
      .a1 div:nth-child(1){
         width: 100%;
         height: 40px;
         line-height: 40px;
     }
      .a1 div:nth-child(2){
         width: 100%;
          height: 40px;
         line-height: 20px;

     }
     .a11{
         
         font-size: 16px;
         font-weight: 700;
       

     }
      .a12{
         font-size: 16px;
        font-weight: 700;
        
         margin-left: 10px;
     }
     .a13{
         font-size: 14px;
     }
   .aimg{
       width: 13px;
       height: 13px;
       position: absolute;
       top: 36px;
        right: 10px;

   }
   .payment{
       margin-top: 10px;
       width: 100%;
       height: 80px;
       background-color: #fff;
       position: relative;
   }
   .zhifubao{
       width: 100px;
       height: 40px;
       line-height: 40px;
   }
  
.zhifubao span:nth-child(1){
   display: block;
    width: 22px;
    height: 22px;
    float: left;
    margin-top: 9px;
    margin-left: 10px;
}
.zhifubao span:nth-child(2){
    font-size: 13px;
    margin-left: 10px;
}
 .xiaomiWallet{
       width: 100px;
       height: 40px;
       line-height: 40px;
   }
.xiaomiWallet span:nth-child(1){
   display: block;
    width: 22px;
    height: 22px;
    float: left;
    margin-top: 9px;
    margin-left: 10px;
}
.xiaomiWallet span:nth-child(2){
    font-size: 13px;
    margin-left: 10px;
}
.select{
    width: 50px;
    height: 100%;
    position: absolute;
    // background-color: pink;
    top: 0;
    right: 0;
}

.van-radio:nth-child(1){
    display: block;
    width: 15px;
    height: 15px;
    margin-top: 14px;
    margin-left: 20px;
}
.van-radio:nth-child(2){
    display: block;
    width: 15px;
    height: 15px;
    margin-top: 22px;
    margin-left: 20px;
}
.van-radio-group{
    display: block;
    width: 100%;
    height: 100%;
}
.self{
    width: 100%;
    height: 190px;
    margin-top: 10px;
    background-color: #fff;
}
.self1{
    width: 100%;
    height: 50px;
    line-height: 50px;
   
    padding: 0 10px;
}
.mi{
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 10px;

}
.self1 span{
    font-size: 15px;
    font-weight: 700;
    color: #333;
    margin-left: 10px;
}
.self2{
    width: 100%;
    height: 100px;
    //  background-color: pink;
     padding: 10px 10px;
}
.self2_img{
    width: 80px;
    height: 80px;
    float: left;
    background-color: #f2f2f2;
}
.self2_right{
    width: 255px;
    height: 100%;
    float: left;
    padding-left: 10px;
}
.self2_right div:nth-child(1){
    font-size: 16px;
}
.self2_right div:nth-child(2){
    width: 100%;
    height: 30px;
}
.sr1{
    
    color: #bf1111;
    font-size: 14px;
    float: left;
}
.sr1 span{
    font-size: 16px;
}
.sr2{
    display: block;
    // width:40px ;
   height: 20px;
    float: right;
    color: black;

}

.self3{
    width: 100%;
    height: 40px;
    padding: 0 10px;
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    
}
.self3 span:nth-child(2)>div{
    width: 13px;
    height: 13px;
    float: right;
    margin-top: 15px;
}
.self3 span:nth-child(2){

    float: right;
}
.discount{
    margin-top: 10px;
    width: 100%;
    height: 88px;
   
    // padding:  0 10px;
}
.van-cell:nth-child(1){
    padding:10px 8px 10px 10px;
     
}
.van-cell__value span{
    color: #333;

}
.van-cell:nth-child(2){
    padding: 10px;
     border-radius: 10px;
}
.goodsprice{
     margin-top: 10px;
    width: 100%;
    height: 88px;
    margin-bottom: 50px;
    

}

    
</style>