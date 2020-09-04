<template>
    <div>
     

          <img src="../../assets/img/hong.jpg" alt="">
          <div class="title">{{num}}秒</div>
          <div class="btn" @click="gohome">跳过</div> 
      
    </div>
</template>

<script>
    export default {
      data(){
        return{
          num:3,
          timer:null
        }
      },
      methods:{
        gohome(){
          this.$router.push("/home")
        },
       
      },
        created(){
            //隐藏导航

             this.timer=setInterval(( )=>{
               
               if(this.num==0){
                 this.$router.push("/home")
                }else{
                  this.num--
                }
             },1000)
            
               this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
          clearInterval(this.timer)
            this.$store.state.vanTabbar = true;
        }
    }
</script>

<style lang="scss" scoped>
.title{
  position: absolute;
  top:0.3rem;
  left: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
}
.btn{
  position: absolute;
  top:0.3rem;
  color: #fff;
  font-size: 0.8rem;
  right: 0.5rem;
}
</style>