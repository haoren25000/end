<template>
    <div>
        <!-- 广告页advertpage.vue -->
        <img class="poster" src="../../assets/img/poster.jpg" alt="">
        <van-button round type="info" color="rgba(255,255,255,0.4)" @click="gotomain">点击跳过({{time}})</van-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                time:5,
                cleardata:null
            }
        },
        methods:{
            gotomain(){
                this.$router.push("/main");
            }
        },
        created(){
            this.cleardata = setInterval(()=>{
                if(this.time == 0){
                    this.$router.push("/main");
                }else{
                    this.time--;
                }
            },1000)

            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
            // 路由切换，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
.poster{
    width: 100%;
    height: 100%;
    position: relative;
}
.van-button{
    position: absolute;
    top:20px;
    right: 15px;
    width: 110px;
    height: 30px;
}
</style>