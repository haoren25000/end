<template>
    <div>
        <div class="auto">
 <van-nav-bar title="我的订单" fixed >
  <template #right>
    <van-icon name="search" size="18" :color="'#666'"/>
  </template>
</van-nav-bar>
<!-- 导航 --> 
<div class="left4" @click="back"><img src="../assets/images/left4.png" alt=""></div>
<!-- <div class="nav">
   
         <router-link to="/orderlist/allor" tag="div">全部</router-link>
    <router-link to="/orderlist/obligation" tag="div">待付款</router-link>
    <router-link to="/orderlist/wait" tag="div">待收货</router-link>
    <router-link to="/orderlist/refund" tag="div">退款订单</router-link>
    <router-link to="/orderlist/received" tag="div">已收货</router-link>
   
</div> -->


    <router-view></router-view>    
        </div>
            
       


      
        
    </div>
</template>

<script>
    export default {
        data(){
           return{
               a:0,
           }
        },
        methods:{
            back(){
                this.$router.push('/my')
            }
        }
    }
</script>

<style lang="scss" scoped>
.auto{
    padding-top: 60px;
}
.van-nav-bar{
    background-color: #f4f4f4;
}
.van-icon{
    color: none;
}
.left4{
    width: 40px;
    height: 40px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000;
}
.nav{
    width: 100%;
    height: 50px;
    background-color: #f4f4f4;
    position: fixed;
    top: 45px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.nav ul{
    width: 100%;
    height: 100%;
}
.acti{
    // width: 60px;
    padding: 0 8px;
    height: 25px;
    background-color: #deb354;
    border-radius: 15px;
    color: #fff;
    text-align: center;
    line-height: 25px;
}



</style>