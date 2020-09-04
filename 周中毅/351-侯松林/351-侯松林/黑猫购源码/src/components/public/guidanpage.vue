<template>
    <div>
      
            <div class="guid">
              
                <img src="../../assets/img/guid1.jpg" alt="" class="one">
                <img src="../../assets/img/guid2.jpg" alt=""  class="two" >
                <img src="../../assets/img/guid3.jpg" alt="">
                <img src="../../assets/img/guid4.jpg" alt="">
                <img src="../../assets/img/guid5.jpg" alt="">
                <img src="../../assets/img/guid6.jpg" alt="">
                <img src="../../assets/img/guid7.jpg" alt="">
                <img src="../../assets/img/guid8.jpg" alt="">
           
            </div>
           <div class="btn" @click="$router.push('/home')"><img src="../../assets/img/guid9.jpg" alt=""></div> 

    </div>
</template>

<script>

    export default {
         created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
       
} 
</script>

<style lang="scss" scoped>


    .div{
        width:100%;
        height: 4rem;
        background:rgba(255,255,255,0.8);
        position: fixed;
        bottom: 0;
        left: 0;
        border-radius: 15px;
    }
    .one{
        width: 100%;
    

    }
    img{
        width: 90%;
        margin: 0 auto;
       
        margin-top: 1rem;
    }
    .two{
       
        z-index: 100;
    }
   .btn{
       position:fixed;
       width: 80%;
        display: fixed;
        bottom:0 ;
        left: 50%;
        margin-left: -6.2rem;
   }  
</style>