<template>
    <div>
       <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 联系方法 -->
         <van-contact-card 
        :type="cardType" 
        :name="name" 
        :tel="tel" 
        add-text="添加联系人"
        @click="address"
        :editable="true" />
        <!-- 商品 -->
        <van-row class="goodcart" v-for="(item,index) in lists" :key="index">
                <!-- <van-col span="2"> -->
                    <!-- <van-checkbox v-model="item.flag"></van-checkbox> -->
                    <!-- <input type="checkbox" class="checkinput" :checked="item.flag" @click="inputselet(index)">
                </van-col> -->
                <van-col span="8">
                    <van-image
                        
                        height="5rem"
                        fit="contain"
                        :src="item.img"
                        />
                </van-col>
                <van-col span="16">
                    <div class="content">
                        <h1 >{{item.title}}</h1>
                        <h2>{{item.nextTitle}}</h2>
                            <div class="box">

                                <p class="price">￥{{item.price}} </p>       
                                <p class="count"> × {{item.num}}   </p>    
                            </div>
     
                    </div>
                </van-col>
            </van-row>
    
            <!-- 提交订单        -->
              <van-submit-bar 
                :price="total*100" 
                button-text="支付订单" @submit='onsubmit'  />
    
    </div>
</template>

<script>
import { Toast } from 'vant'
    export default {
        data(){
            return{
               
              name:'',
              tel:'',
              lists:'',
           
                // list:[
                //     {   flag:true,
                //         img:"http://g.search.alicdn.com/img/bao/uploaded/i4/i3/2616970884/O1CN01pqJY2Y1IOuirEm8hi_!!0-item_pic.jpg_360x360.jpg",
                //         title:"Apple/苹果 iPhone XR全网通4G 双卡双待手机苏宁易购官方旗舰店 苹果iPhoneXR",
                //         nextTitle:"万客户的共阴选择。具电子发票。OOO专属客服苏宁直发花呗分期",
                //         price:3999,
                //         num:1,

                //     },
                // ]
               
            }
        },
         methods:{
            
              sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            address(){
                if(this.$store.state.username){
                    if(this.$store.state.address.lists.length==0){
                        this.$router.push("./addressAdd")
                    }else{
                        this.$router.push('address')
                    }
                }else{
                    this.$router.push({
                        path:"/login",
                        query:{
                            path:"./addressAdd"
                        }
                    })
                }
            },
            cartvue(){
           
              let order ={
                  orderId:new Date().getTime(),
                  address:this.address,
                  goodlist:this.lists,
                  dateTime:new Date(),
                  type:1,
              }
            //   将数据传递给order.js
              this.$store.commit("order/add",order)
              this.$store.state.cart.lists=[];
              this.$store.state.cart.nun=0;
              this.$router.push('/cart')
              this.$store.state.vanTabbar
            },
            onsubmit(){
           
            if(this.$store.state.address.lists.length==0||this.lists==""){
                Toast("信息错误");
            }else{
                    let order ={
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodlist:this.lists,
                    dateTime:new Date(),
                    type:2,
                }
            
                //   将数据传递给order.js
                this.$store.commit("order/add",order)
                this.$store.state.cart.lists=[];
                this.$store.state.cart.nun=0;
                this.$router.push('/orderlist/orderAll')
                }
            }
        },
        computed:{
            cardType(){
                 return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        created(){
            
            let address=this.$store.state.address.lists.find(item=>item.isDefault)
        
            if(address){
                this.name = address.name;
                this.tel = address.tel;
            }
          
             this.lists = this.$store.state.cart.lists||this.$store.state.order.obj;
            this.sum();//计算总价格
          
        },
       
    }
</script>

<style lang="scss" scoped>
.goodcart{
  
     position: relative;
    margin: 0 auto ;
    margin-top: 0.5rem;
    width: 95%;
    border: 1px solid #ccc;
    box-sizing: border-box;
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
           position: absolute;
           overflow: auto;
            bottom:0.5rem;
            left:5.3rem;
            display: flex;
            .price{
                color: #ff0036;
                font-size: 0.8rem;
                margin-top: 0.5rem;
                
            }
            .count{
                margin-left: auto;
                margin-top: 0.7rem;
                margin-left: 6rem;
                
            }
        }
        .van-button{
            width: 90%;
            margin: 0 auto;
            height: 1rem;
            
        }
    }
}
</style>