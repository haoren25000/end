<template>
    <div>
       

     
        <div class="orderlist" v-for="(item,index) in  list" :key="index">
            <div v-if="item.type==2">
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
                    
                            <van-button size="small"  type="warning">退款申请</van-button>
                        <van-button size="small"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
         created(){ 
          
             this.list = this.$store.state.order.lists.reverse();
                
            this.typeList = this.$store.state.order.typeList;
        },
        methods:{
              onGoods(orderId){
                let index=this.list.findIndex(item=>item.orderId==orderId)
                this.list[index].type=3
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