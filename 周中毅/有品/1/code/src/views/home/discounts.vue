<template>
    <div>
       <div class="recommed auto">
            <div class="big" v-for="(item,index) in com2" :key="index">
                <div class="goods" v-for="(item2,index2) in item" :key="index2">
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
                        {img:require("../../assets/images/t61.png"),f1:"男子休闲羽绒服",f2:"三层复合面料，仿粘绒工艺",f3:"¥299",f4:"¥399",hot:false,spe:true,pre:false},
                    {img:require("../../assets/images/t62.png"),f1:"男士圆领运动卫衣",f2:"时尚款式亲肤面料",f3:"¥129",f4:"¥149",hot:false,spe:true,pre:false},
                    ],
                    [
                     {img:require("../../assets/images/t63.png"),f1:"多功能折叠电脑桌",f2:"天然楠竹 灵活组件",f3:"¥159",f4:"¥169",hot:false,spe:true,pre:false},
                      {img:require("../../assets/images/t64.png"),f1:"莫比智能椭圆机",f2:"保护膝盖 瘦全身",f3:"¥3799",f4:"¥4299",hot:false,spe:true,pre:false},
                    ]
                ],
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
        

     
         
    }
</style>