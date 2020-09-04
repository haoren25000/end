<template>
    <div>
        <div class="recommed auto">
            <div class="big" v-for="(item,index) in com2" :key="index">
                <div class="goods" @click="detail" v-for="(item2,index2) in item" :key="index2">
                     <div class="goods_top">
                    <img :src="item2.img" alt="">
                </div>
                <div class="goods_bot">
                    <div class="bot_font1">{{item2.f1}}</div>
                    <div class="bot_font2">{{item2.f2}}</div>
                   <div class="bf"><span class="bot_font3">{{item2.f3}}</span><span class="bot_font4">{{item2.f4}}</span></div> 
                </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                com2:[
                    [
                         {img:require("../../assets/images/t1.png"),f1:"米家落地扇1X",f2:"小爱控制，14米送风，7羽叶",f3:"¥289",f4:"¥299",hot:false,spe:true,pre:false},
                        {img:require("../../assets/images/t2.png"), f1:"米家空调伴侣2",f2:"远程控制，小爱声控",  f3:"¥79",hot:false,spe:false,pre:false},
                    ],
                    [
                        {img:require("../../assets/images/t3.png"),f1:"寻本%65天然猫粮",f2:"寻本可溯源全价猫粮",f3:"¥65",f4:"¥79",hot:false,spe:true,pre:false},
                        {img:require("../../assets/images/t4.png"),f1:"睿米随手吸 NANO",f2:"轻巧便携、随手除  尘、持久续航、无线手持、强劲吸力",f3:"¥279",f4:"¥299",hot:true,spe:true,pre:false}, 
                    ]
                ],
               
            }
        },
        methods:{
            detail(){
                this.$router.push("/detailpage")
            }
        }
    }
</script>

<style lang="scss" scoped>







.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
  margin-bottom: 50px;
}
    .recommed{
        
        width: 100%;
        // height: 50px;
        // background-color: pink;
        padding: 0 10px;
        display: flex;
        flex-wrap: wrap;
        .big{
            width: 100%;
            height: 265px;
            position: relative;
            margin-top: 8px;
        }
        .big .goods:nth-child(1){
            width: 49%;
            height:100%;
            background-color:#fff;
            // margin-right: 10px;
            border-radius: 5px;
            // margin-top: 10px;
           
            position: absolute;
            left: 0;
            overflow: hidden;
            float: left;
            
        }
         .big .goods:nth-child(2){
            width: 49%;
            height:100%;
            background-color:#fff;
            // margin-right: 10px;
            border-radius: 5px;
            // margin-top: 10px;
           
            position: absolute;
            right: 0;
            overflow: hidden;
            float: left;
           
        }
        .goods_bot{
            width: 100%;
            // height: 172px;
            padding: 0 5px;
        }
        .bot_font1{
            font-size: 16px;
            color: #373737;
             overflow: hidden;
         white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bot_font2{
            width: 100%;
            font-size: 12px;
            color: #9b9b9b;
            overflow: hidden;
         white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bot_font3{
            margin-top: px;
            font-size: 16px;
            color: red;
        }
         .bot_font4{
             margin-left: 5px;
             font-size: 14px;
             color: #9b9b9b;
             text-decoration: line-through;
         }
        .bf{
            margin-top: 5px;
        }
        .p1{
            width: 30px;
            height: 16px;
            float: left;
            font-size: 11px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            
        }
        .p{
            width: 100%;

            position: absolute;
            top: 155px;
            left: 0;

        }
        #yell{
            background-color: #f2b364;
        }
        .red{
            background-color: #d96b6c;
            margin-left: 4px;
        }
        .imge{
            height: 25px;
        }
        
        

    //   <!-- <div class="goods" v-for="(item4,index4) in com" :key="index4"> -->
    //             <!-- 特价标签 -->
    //             <!-- <div class="p">
    //                 <div class="p1" id="yell" v-if="item4.hot">HOT</div>
    //                 <div class="p1 red" v-if="item4.spe">特价</div>
    //                 <div class="p1 imge" v-if="item4.pre"><img src="../../assets/images/presell.png" alt=""></div>

    //             </div> -->
                    
    //             <!-- 特价标签 -->

               
    //         <!-- </div> -->
         
    }
</style>