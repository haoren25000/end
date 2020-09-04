<template>
    <div>
        <div class="menure">
                <div class="title">箱包配饰</div>
                <img src="@/assets/img/home12.jpg" alt="">
                <div class="box">
                    <van-row>
                        <van-col span="8">
                            <span>质感气质包包榜</span>
                            <span>月销1.1万件</span>
                            <img src="@/assets/img/home13.jpg" alt="">
                        </van-col>
                        <van-col span="8"> 
                            <span>IN季鞋靴</span>
                            <span>限时折上5折</span>
                            <img src="@/assets/img/home14.jpg" alt="">
                        </van-col>
                        <van-col span="8">
                             <span>潮饰尖货</span>
                            <span>抢大牌600元</span>
                            <img src="@/assets/img/home15.jpg" alt="">
                        </van-col>
                    </van-row>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.menure{
        
        background: #98002f;
       
        width: 95%;
        margin: 5px auto;
        padding-bottom: 0.5rem;
        
       .title{
           margin: 10px;
           text-align: center;
           font-size: 18px;
           font-weight: 700;
           color: #fff;
       }
        img{
            width: 100%;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            overflow: hidden;
        }
        .box{
            background: #fff;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
            overflow: hidden;
            text-align: center;
            .van-col{
               border-left: 1px solid #eee;
               padding: 0.2rem 0.1rem  0;
                span{
                    display: inline-block;
                    font-size:0.65rem ;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                span:nth-child(2){
                    color: red;
                    font-weight: 600;
                    font-size: 0.6rem;
                }
                img{
                    margin-left: 1rem;
                   width: 3rem;
                }
            }
            
        }
    }
  
</style>