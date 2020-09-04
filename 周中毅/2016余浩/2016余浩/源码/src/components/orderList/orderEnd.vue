<template>
    <div>
        <div class="orderlists" v-for="(item,index) in lists" :key="index">
            <div v-if="item.type==3">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
                <div v-for="(value,key) in item.goodsList" :key="key">
                    <van-card
                    :num="value.num"
                    :price="value.price"
                    desc="描述信息"
                    :title="value.name"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                    >
                </van-card>
                </div>
                <div class="orderfooter">
                    <!-- 已完成 -->
                    <van-button size="mini">商品评价</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        created(){
            let dataList = this.$store.state.order.lists;
            this.lists = dataList.filter(item=>item.type == 3); //类型为一生成新数组
            this.typeList = this.$store.state.order.typeList;
            console.log(this.lists.length)
            if(!this.lists.length){
                Toast('添加商品');
            }
        },
        methods:{
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editId",this.lists);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
        }
    }
</style>