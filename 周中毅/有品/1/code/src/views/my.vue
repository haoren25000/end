<template>
    <div>
        <div class="user auto" >
            <div class="user_1">
                
                    <div class="user_1Img"><img src="../assets/images/head.png" alt=""></div>
                    <span>请登录</span>
                    <div class="us"><img src="../assets/images/right.png"  alt=""></div>
               
            </div>

            <div class="myindent" @click="myorder"><van-cell title="我的订单" is-link  /></div>
           
            <div class="user_3">
                <ul>
                    <li><div class="usImg"><img src="../assets/images/tu4-1.png"></div><div class="usfont">待付款</div></li>
                     <li><div class="usImg"><img src="../assets/images/tu4-2.png"></div><div class="usfont">待收货</div></li>
                      <li><div class="usImg"><img src="../assets/images/tu4-3.png"></div><div class="usfont">评价</div></li>
                       <li><div class="usImg"><img src="../assets/images/tu4-4.png"></div><div class="usfont">退款/售后</div></li>
                   
                </ul>
            </div>
            <div class="user_4">
                <img src="../assets/images/qiang.gif" alt="">
            </div>
         
            <div class="user_5">
                <div class="us4"><img  src="../assets/images/uc1.png" alt=""></div>
               
                <span class="us1">我的资产</span>
                <span class="us2">优惠券/积分</span>
                <div class="us3"><img src="../assets/images/right2.png" alt=""></div>
               
            </div>
           
             <div class="user_5">
                <img class="us4" src="../assets/images/uc2.png" alt="">
                <span class="us1">我的收藏</span>
                
                <img class="us3" src="../assets/images/right2.png" alt="">
            </div>
             <div class="user_5" @click="push">
                <img class="us4" src="../assets/images/uc3.png" alt="">
                <span class="us1">地址管理</span>
           
                <img class="us3" src="../assets/images/right2.png" alt="">
            </div>
             <div class="user_5 mt">
                <img class="us4" src="../assets/images/uc4.png" alt="">
                <span class="us1">资质证照</span>
            
                <img class="us3" src="../assets/images/right2.png" alt="">
            </div>
   
             <div class="user_5">
                <img class="us4" src="../assets/images/uc5.png" alt="">
                <span class="us1">协议规则</span>
              
                <img class="us3" src="../assets/images/right2.png" alt="">
            </div>
             <div class="user_5">
                <img class="us4" src="../assets/images/uc6.png" alt="">
                <span class="us1">帮助与反馈</span>
    
                <img class="us3" src="../assets/images/right2.png" alt="">
            </div>




        </div>
        <vantabber></vantabber>
    </div>
</template>

<script>
import vantabber from "../components/public/vantabbar.vue"

    export default {
        data(){
            return{

            }
        },
        methods:{
            push(){
                this.$router.push("/address")
            },
            myorder(){
                this.$router.push('/orderlist/allor')
            }
        },
         components:{
            
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
 .auto{
      margin: 0 auto;
        max-width: 420px;
        min-width: 320px;
  }
.mt{
    margin-top: 5px;
}
.user{
    width: 100%;
    // position: absolute;
    // top: 0;
    // bottom: 50px;
    background-color: #f3f3f3;
}
.user_1{
    width: 100%;
    height: 100px;
    background-image: url("../assets/images/my1.png");
    background-size: cover;
    line-height: 100px;
    display: flex;
    align-items: center;
}

.user_1Img{
    width: 60px;
    height: 60px;
    margin-left: 20px;
    

}
.user_1 span{
    color: white;
    font-size: 14px;
    margin-left: 15px;
}
.us{
    width: 18px;
    height:18px;
    position: absolute;
    right: 20px;
    
    
}
.user_3{
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    border-top: 1px solid #eaeaea;
    box-sizing: border-box;
    
}
.user_3 ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.user_3 ul li {
    width: 60px;
    height: 35px;
}
.user_3 ul li div{
    width: 60px;
    height: 25px;
    
}
// .user_3 ul li div img{
//     width: 100%;
// }
.usImg{
    width: 100%;
    text-align: center;
   
}
.usImg img{
    display: inline-block;
    width: 25px;
    height: 25px;
}
.usfont{
    color: #666666;
    font-size: 12px;
    margin-top: 6px;
}
.user_3 ul li{
    width: 52px;
    height: 48px;
    font-size: 12px;
    text-align: center;
}

.user_4{
    width: 100%;
    height: 80px;
}

.user_5{
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: relative;
   line-height: 50px;
    border-bottom: 1px solid #f3f3f3;
    
}
.us4{
    
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 10px ;
    margin-top: -20px;
    
}
.us1{
    
    color: #333333;
    font-size: 14px;
    margin-left: 50px;
    
}
.us2{
    
    color: #b7b7b7;
    font-size: 12px;
    float: right;
    margin-right: 25px;
   

}
.us3{
   

    width: 15px;
    height: 15px;
     position: absolute;
    top: 50%;
    right: 10px ;
    margin-top: -7.5px;
    
   
}
.myindent{
    margin-top: 5px;
}
</style>