<template>
    <div>
         <div class="header">
             <van-search
  v-model="value"
  shape="round"
  background="white"
  placeholder="请输入搜索关键词"
  @focus="go"
/>

</div>



        <!-- 分类列表 -->
        <bscroll></bscroll>
        <vantabber></vantabber>
    </div>
</template>

<script>
import vantabber from "../components/public/vantabber"
    import bscroll from "../components/classify/BScroll" 
    export default {
         data(){
                return {
                    value:""
                }
            },
        methods: {
            go(){
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
.header{
    border: 1px solid #efefef;
        .van-search{
            height: 50px;
        }
    }
</style>