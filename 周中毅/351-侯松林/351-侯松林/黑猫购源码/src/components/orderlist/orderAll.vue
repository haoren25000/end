<template>
    <div>
        <div class="orderlist" v-for="(item,index) in  list" :key="index">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
            <van-row class="goodcart" v-for="(value,count) in item.goodlist" :key="count">
                <van-col span="8">
                    <van-image
                        
                        height="5rem"
                        fit="contain"
                        :src="value.img"
                        />
                </van-col>
                <van-col span="16">
                    <div class="content">
                        <h1 >{{value.title}}</h1>
                        <h2>{{value.nextTitle}}</h2>
                            <div class="box">

                                <p class="price">￥{{value.price}} </p>       
                                <p class="count"> × {{value.num}}  </p>    
                            </div>
     
                    </div>
                </van-col>
            </van-row>

             <div class="orderfooter">
                    <!-- 待支付 -->
                    <div v-if="item.type == 1">
                        <van-button size="small" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                        <van-button size="small" type="danger"  @click="onDel(item.orderId)">删除订单</van-button>
                    </div>
                    <!-- 待收货 -->
                    <div v-else-if="item.type == 2">
                        <van-button size="small"  type="warning">退款申请</van-button>
                        <van-button size="small"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                    </div>
                    <!-- 已完成 -->
                    <div v-else-if="item.type == 3">
                        <van-button type="primary" size="small">商品评价</van-button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // list:[
                //     {
                //         orderId:"516516132",
                //         dateTime:"2019/05/05  22:22:22",
                //         type:1,
                //         goodlist:[
                //            {
                //                img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                //                 title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                //                 nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                //                 price:"4999",
                //                 num:1
                //            }
                //         ]
                //     },
                //      {
                //         orderId:"516516132",
                //         dateTime:"2019/05/05  22:22:22",
                //         type:3,
                //         goodlist:[
                //            {
                //                img:"https://gw.alicdn.com/bao/uploaded/i1/3020738924/O1CN01QMXptF2FnF3Y4uywl_!!3020738924.jpg_290x10000Q75.jpg_.webp",
                //                 title:"法犀卡潮牌加大加肥大码男装胖子高弹力秋冬季肥佬九分牛仔裤四季",
                //                 nextTitle:"双面穿夹克优质面料赠运费险退换无忧",
                //                 price:"4999",
                //                 num:1
                //            }
                //         ]
                //     },
                // ],
               
            }
        },
        
        created(){ 
          
             this.list = this.$store.state.order.lists.reverse();
    
            this.typeList = this.$store.state.order.typeList;
        },
        methods:{
            onPay(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=2
            },
            onGoods(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=3
            },
            onDel(orderId){
                 let index=this.list.findIndex(item=>item.orderId==orderId)
                 this.list.splice(index,1)
            }
        }
       
    }
</script>

<style lang="scss" scoped>
.orderlist{
    width: 95%;
    margin:0.8rem auto 0 auto;

    .goodcart{
        background: #fff;
        border-radius: 5px;
        .van-checkbox{
            position: relative;
            left:0.2rem;
            top:2rem;
        }
        .van-image{
            margin-top: 0.5rem;
        }
        .content{
        
            padding: 0.8rem 0.3rem;
            h1{
            text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            h2{
                font-size: 0.6rem;
                background-color: #ccc;
                color:#999;
                margin-top: 0.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .box{
                margin-top: 0.5rem;
                display: flex;
                justify-content: space-between;
                height:1rem;
                line-height: 1rem;
            
                .price{
                    color: #ff0036;
                    font-size: 0.8rem;    
                }
                .count{
                    margin-left: auto;
                }
            }
            
        }
    }
    .orderfooter{
        width: 100%; 
        background: #fff;
        display: flex;
        justify-content: flex-end;
        .van-button{
         margin: 0  0.5rem 0.3rem 0;

        }
    }
}
</style>