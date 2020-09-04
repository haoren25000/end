<template>
    <div>
        
        <van-nav-bar class="nav"
            :title="$route.name"
        />
        
        <van-row gutter="20" class="top">
            <van-col span="4">
                <van-image
                    round
                    width="50px"
                    height="50px"
                    type="cover"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <van-col span="20">
                <div v-if="$store.state.username">
                    <h3 v-text="$store.state.username"></h3>
                    <h5 @click="$store.state.username=''">退出</h5>
                </div>
                <div v-else>
                    <router-link to="/login" >登陆</router-link>
                    <router-link to="/register" >注册</router-link>
                </div>
            </van-col>
        </van-row>
        
        <!-- 列表 -->
        <van-cell-group>
            <van-cell title="我的订单" is-link to="/orderlist"  />
            <van-cell title="我的收藏" is-link />
            <van-cell title="我的地址" @click="address" is-link />
            <van-cell title="优惠卷" is-link />
            <van-cell title="设置" is-link />
        </van-cell-group>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        methods:{
            // 定义跳转方法
            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            }
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 3;
        }
    }
</script>

<style lang="scss" scoped>
.top{
    background: #F37D0F url("../assets/img/bg.png") center center no-repeat;
    background-size: 100% auto;
    
    h3,h5{
        display: inline-block;
        width: 80px;
        color:#fff;
    }
    h5{
        font-size: 12px;
    }
}
.van-image{
    float: right;
    margin-top:15px;
}
.van-col{
    height: 80px;
    line-height: 80px;
    font-size: 16px;

    a{
        margin-left: 20px;
        color:#fff;
    }
}
.nav{
    background-color: #F2F2F2;
}
</style>