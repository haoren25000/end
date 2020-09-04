<template>
    <div>
        <div class="search">
            <div class="back" @click="$router.go(-1)"><img src="../assets/images/left2.png" alt=""></div>
            <div class="sea">
                <van-search v-model="val"
                shape="round"
                background="#f4f4f4"
                placeholder="搜一搜"/>
            </div>
            <div class="seek" @click="add">搜索</div>
        </div>
            <div class="recommend auto">
                <!-- 历史记录 -->
                <div class="history" v-show="$store.state.search.isHis">
                    <div class="history_top">
                        <div class="ht1">历史记录</div>
                        <div class="ht2" @click="delt"><img src="../assets/images/del.png" alt=""></div>
                    </div>
                     <div class="history_bot">
                       <div class="hb" v-for="(item2,index2) in $store.state.search.history" :key="index2" ><div>{{item2}}</div></div>
                       
                    </div>
                </div>
                <!-- 搜索发现 -->
                <div class="find">
                    <div class="find_top">
                        <div class="ft">搜索发现</div>
                    </div>
                    <div class="find_bot">
                        <div class="fb" v-for="(item,index) in fb" :key="index"><div>{{item}}</div></div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                val:'',
                fb:["车锁","电子称","手电筒","极峰","滑板","沙发","拖鞋","冰箱","车载香薰","帆布鞋","女装","米家运动鞋","石头","拖把桶","鹿客","拖把配件","猫眼","耳机","小米净化器滤芯","吸顶灯","平板电视"],
               
            }
        },
        methods:{
           add(){
              
               this.$store.commit("search/add1",this.val)
           },
           delt(){
               this.$store.commit("search/del")
           }
        },
        
    }
</script>

<style lang="scss" scoped>
.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
    .recommend{
        // width: 100%;
        position: absolute;
        top:50px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        border-radius: 15px 15px 0 0;
        padding: 15px;
    }
    .history{
        width: 100%;
        height: 100px;
        overflow: hidden;
        // background-color: pink;
        // margin-top: 20px;
    }
    .history_top{
        width: 100%;
        height: 40px;
        line-height: 30px;
    }
    .ht1{
        float: left;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
    }
    .ht2{
        float: right;
        width: 30px;
        height: 30px;
    }
    .history_bot{
        width: 100%;
        height: 60px;
        
    }
    .hb{
        float: left;
        height: 25px;
        background-color: #f4f4f4;
        padding: 0 10px;
        border-radius: 20px;
        line-height: 25px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .hb div{
        font-size: 14px;
        color: #676767;
    }
    .find{
        width: 100%;
        height: 300px;
        margin-top: 5px;
        // background-color: skyblue;
    }
    .find_top{
        width: 100%;
        height: 40px;
         line-height: 30px;
    }
    .find_bot{
        width: 85%;
    }
    .ft{
         float: left;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
    }
    .fb{
        float: left;
        height: 25px;
        background-color: #f4f4f4;
        padding: 0 10px;
        border-radius: 20px;
        line-height: 25px;
        margin-right: 10px;
         margin-right: 10px;
        margin-bottom: 10px;
    }
    .fb div{
        font-size: 14px;
        color: #676767;
    }









    .search{
        width: 100%;
        height: 50px;
        background-color: #f4f4f4;
        position: relative;
    }
    .back{
        width: 45px;
        height: 45px;
        position: absolute;
        top: 0;
        left: 15px;
    }
    .sea{
        width: 252px;
        height: 40px;
        background-color: pink;
        position: absolute;
        top: 2px;
        left: 55px;
    }
    .van-search__content--round{
        background-color: #fff;
    }
    .van-search{
        width: 100%;
        height: 100%;
        padding: 0;
        color: #9d9d9d;
    }
    .seek{
        width: 50px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        color: #fff;
        position: absolute;
        top: 8px;
        right: 10px;
        background-color: #d91915;
        border-radius: 20px;
    }
</style>