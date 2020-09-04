<template>
    <div>
        <div class="nav">
         <router-link to="/orderlist/allor" tag="div" class="acti">全部</router-link>
    <router-link to="/orderlist/obligation" tag="div">待付款</router-link>
    <router-link to="/orderlist/wait" tag="div">待收货</router-link>
    <router-link to="/orderlist/refund" tag="div">退款订单</router-link>
    <router-link to="/orderlist/received" tag="div">已收货</router-link>
</div>
      <!-- 如果没有订单 -->
      <div class="noorder">
          <div class="nd">
              <div><img src="../../assets/images/noorder.png" alt=""></div>
          <div>目前没有订单哦~</div>
          </div>
          
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.noorder{
    width: 100%;
    height: 200px;
    position: relative;
    background-color: pink;
}
.nd{
    width: 100%;
    height: 130px;
   margin-top: 35px;
   position: relative;
}
.nd div:nth-child(1){
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -50px;
    width: 100px;
    height: 100px;

   
}
.nd div:nth-child(2){
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -60px;
    width: 120px;
    height: 30px;
    text-align: center;

   
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