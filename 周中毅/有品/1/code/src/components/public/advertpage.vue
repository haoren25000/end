<template>
    <div>
        <!-- 广告页advertpage.vue -->
        <!-- <h1>广告页<font style="font-size:40px;">{{num}}</font></h1> -->
        
        <!-- <button @click="goHome">跳过</button> -->
        <div class="img auto" ><img src="../../assets/images/ggy.png" alt="">
          <div class="tg" @click="goHome">跳过 <span>{{num}}</span></div>
        </div>
      
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommed");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home/recommed");//跳转首页
                }else{
                    this.num--;
                }
            },1000)

           
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
          
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
.auto{
    margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
    .img{
       position: absolute;
       width: 100%;
       height: 100%;
    //    position: relative;
      
    }
    .img img{
        width: 100%;
        height: 100%;
      

    }
    .tg{
        position: absolute;
        top: 10px;
        right:10px;
        width: 55px;
        height: 30px;
        color: #fff;
        background-color: rgba(129, 129, 129,0.5);
        font-size: 14px;
        z-index: 2000;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
     
    }
</style>