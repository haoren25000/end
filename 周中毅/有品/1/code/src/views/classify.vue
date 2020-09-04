<template>
    <div>
        <div class="nav auto">
            <van-search @focus="getSearch"
  
  shape="round"
  background="#ffffff"
  placeholder="搜一搜"
/>
        </div>
        <div>
            <bscroll class="mb"></bscroll>
        </div>
        <vantabber></vantabber>
        
      
        
    </div>
</template>

<script>
// import fenlei from "../components/fenlei.vue"
import bscroll from "../components/category/BScroll"
import vantabber from "../components/public/vantabbar.vue"

    export default {
        data(){
            return {
              
            }
        },
        methods:{
             getSearch(){
      this.$router.push("/search")
    }
        },
        components:{
            bscroll,
            vantabber
        }
      
    }
</script>

<style lang="scss" scoped>
.mb{
  margin-bottom: 50px;

}
   .auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
    .nav{
        width: 100%;
        height: 50px;
        background-color: skyblue;
        position: fixed;
        top: 0;

    }
    .van-search{
        width: 100%;
        height: 100%;
        border-bottom: 1px solid #f3f3f4;
    }
    
</style>