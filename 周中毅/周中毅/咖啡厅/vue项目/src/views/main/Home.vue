<template>
    <div class="home">
        <van-nav-bar title="百亿补贴，全民省钱">
            <template #right>
              <p>登录</p>
              <van-icon name="user-o" size="18" ></van-icon>
            </template>
            <template #left>
              <van-icon name="apps-o" size="18" ></van-icon>
              <p>分类</p>
            </template>
        </van-nav-bar>
        <van-search
          shape="round"
          background="rgb(255,219,71)"
          placeholder="商品/店铺"
        />
        <div class="shuffling">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in bannerData" :key="index">
                    <img class="auto-img" v-lazy="item.image_src" alt />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="catitems">
            <ul>
                <li v-for="(item,index) in catitemsData" :key="index">
                    <img class="auto-img" v-lazy="item.image_src" alt />
                </li>
            </ul>
        </div>
        <div class="Floor">
         <ul v-for="(item,index) in floorData" :key="index" >
            <li>  
                <img :src="item.floor_title.image_src" alt="" class="title">
                <img :src="item.product_list[0].image_src" alt="" class="floo">
                <img :src="item.product_list[1].image_src" alt="" class="floo">
                <img :src="item.product_list[2].image_src" alt="" class="floo">
                <img :src="item.product_list[3].image_src" alt="" class="floo">
                <img :src="item.product_list[4].image_src" alt="" class="floo">
            </li>
        </ul>
        </div>
        
    </div>
</template>

<script>    
    export default {
        data(){
            return{
                bannerData:[],
                catitemsData:[],
                floorData:[],
                productlistData:[]
            }
        },

        created(){
            this.Banner();
            this.Catitems();
            this.Floor();
        },

        methods:{
            Banner() {
                //开启加载提示
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: 'GET',
                    url: '/home/swiperdata',
                }).then(result => {
                    this.$toast.clear();
                    console.log('result ==> ',result)
                    if (result.data.meta.status == 200) {
                        this.bannerData = result.data.message;                           
                    }
                }).catch(err => {
                    this.$toast.clear();       
                })
            },
            Catitems() {
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: 'GET',
                    url: '/home/catitems',
                }).then(result => {
                    this.$toast.clear();
                    console.log('result ==> ',result)
                    if (result.data.meta.status == 200) {
                        this.catitemsData = result.data.message;                           
                    }
                }).catch(err => {
                    this.$toast.clear();       
                })
            },
            Floor(){
                this.$toast.loading({
                    message: "加载中...",
                    forbidClick: true,
                    duration: 0
                });

                this.axios({
                    method: 'GET',
                    url: '/home/floordata',
                }).then(result => {
                    console.log('result ==> ',result)
                    this.$toast.clear();
                    if (result.data.meta.status == 200) {
                        this.floorData = result.data.message;
                        console.log("this.floorData =>",this.floorData)
                        this.productlistData = this.floorData.product_list
                        console.log("productlistData =>",productlistData)
                    }
                }).catch(err => {
                    this.$toast.clear();       
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .shuffling{
        background-image: url(../../assets/images/bg.png) ;
        height: 159px;
        background-size:375px 159px;
        background-repeat:no-repeat;
    }
    /deep/.van-swipe{
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
        border-radius: 10px;
        height: 159px;
        margin: 0 12px;
    }
    .van-search__content--round{
        background-color: white;
    }
    .van-field__control,/deep/.van-icon-search{
        color: rgb(117,117,117);
    }
    /deep/.van-nav-bar{
        background-color: rgb(255,219,71);
    }
    .van-hairline--bottom::after{
        border-bottom-width: 0;
    }
    /deep/.van-nav-bar__left,/deep/.van-nav-bar__right{
        padding: 0 12px;
        color: white;
    }
    .van-icon-apps-o,.van-icon-user-o{
        color:white
    }
    /deep/.van-nav-bar__title{
        color: white;
    }
    .catitems ul{
        display: flex;
        li{
            flex: 25%;
            margin: 12px 16px;
        }
    }
    
  
    .floo{
        width: 100px;
        height: 140px;
        margin-left: 20px;
        margin-top: 10px;
        
    }
    .title{
        width: 375px;
        height: 100px;
    }
</style>