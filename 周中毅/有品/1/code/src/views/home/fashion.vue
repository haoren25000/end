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
                        {img:require("../../assets/images/t51.png"),f1:"谷小酒初心版",f2:"好入口不上头",f3:"¥139起",f4:"¥169",hot:false,spe:true,pre:false},
                    {img:require("../../assets/images/t52.png"),f1:"中性Pro光学眼镜",f2:"双重防护 60%阻隔率 耐磨损",f3:"¥239起",f4:"¥299",hot:false,spe:false,pre:true},
                    ],
                    [
                       {img:require("../../assets/images/t53.png"),f1:"台式洗碗机",f2:"创新双进水 上下旋转双喷",f3:"¥1188",f4:"¥1399",hot:false,spe:false,pre:true},
                      {img:require("../../assets/images/t54.png"),f1:"米家扫拖机器人",f2:"智能扫拖机器人",f3:"¥1749",f4:"¥1999",hot:false,spe:true,pre:false},
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