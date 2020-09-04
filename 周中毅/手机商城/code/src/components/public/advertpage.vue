<template>
    <div>
        <!-- 广告页advertpage.vue -->
        <div class="left" style="float:left">
       <van-button type="info" @click="goHome" class="btn" size="mini">点击跳过</van-button>
       <van-button type="danger" size="mini" class="btn1">{{num}}</van-button>
       </div>
        <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/97638/39/12751/129331/5e509804E3043ecea/6c66e03d3e672eea.jpg!q80.dpg.webp" alt="">
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
                this.$router.push("/home");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home");//跳转首页
                }else{
                    this.num--;
                }
            },1000)

            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>


<style lang="scss" scoped>
.btn{
    top: 22px;
    right: -323px;
}
.btn1{
    top: 0;
    right: -270px;
}
</style>