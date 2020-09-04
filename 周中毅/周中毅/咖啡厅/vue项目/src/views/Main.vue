<template>
    <div class="main">
        <div>
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" active-color="rgb(255,156,0)" @change="toggleTabBar">
            <van-tabbar-item v-for="(item,index) in tabBarData" :key="index" :icon="item.icon">{{item.title}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data()  {
            return  {
                active: 0,
                tabBarData:[
                    {
                        icon: 'wap-home-o',
                        title: '首页',
                        routeName: 'Home',
                        url: '/main/home'
                    },
                    {
                        icon: 'search',
                        title: '分类',
                        routeName: 'Classification',
                        url: '/main/classification'
                    },
                    {
                        icon: 'shopping-cart-o',
                        title: '购物车',
                        routeName: 'Shopcart',
                        url: '/main/shopcart'
                    },
                    {
                        icon: 'user-o',
                        title: '我',
                        routeName: 'My',
                        url: '/main/my'
                    }
                ]
            }
        },
        created() {
            let hash = location.hash.slice(1);     

            for (let i = 0; i < this.tabBarData.length; i++) {
                if (this.tabBarData[i].url == hash) {
                    this.active = i;
                    break;
                }
            }
        },
        methods: {
            toggleTabBar(index) {
                this.$router.push({name: this.tabBarData[index].routeName});
            }
        }
    }
</script>

<style lang="less" scoped>
    /deep/.van-tabbar-item__text{
        color:black;
    }
</style>