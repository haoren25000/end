<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 地址 --> 
        
        <div @click="addressfun">
            <van-contact-card 
            :type="cardType" 
            :name="name" 
            :tel="tel" 
            add-text="添加联系人"
            :editable="false" />
        </div>
        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.text"
            :title="item.name"
            :thumb="item.src"
            />
        </div>

        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单" @submit="onsubmit" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:"",
                tel:""
            }
        },

        methods:{
            
            sum(){
               
                this.total = this.lists.reduce((total,item)=>{
                   
                    if(!item.isSelect) return total; 
                    return total + parseInt(item.price) * parseInt(item.num); 
                },0) 
            },
            
            addressfun(){
               
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
              // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1 //未支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:2 //已支付
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push("/orderList/orderAll")
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
    }
</script>