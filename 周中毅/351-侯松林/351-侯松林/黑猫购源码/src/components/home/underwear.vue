<template>
    <div>
       <div class="menure">
                <div class="title">内衣睡衣</div>
                <img src="@/assets/img/home.jpg" alt="">
                <div class="box">
                    <van-row>
                        <van-col span="8">
                            <span>潮流七分袖外套榜</span>
                            <span>月销4.3万件</span>
                            <img src="@/assets/img/home1.jpg" alt="">
                        </van-col>
                        <van-col span="8"> 
                            <span>风格内衣</span>
                            <span>抢百元大额券</span>
                            <img src="@/assets/img/home2.jpg" alt="">
                        </van-col>
                        <van-col span="8">
                             <span>风格女装</span>
                            <span>好货不只2折</span>
                            <img src="@/assets/img/home3.jpg" alt="">
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