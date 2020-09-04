<template>
    <div>
        <div class="menure">
                <div class="title">男装运动</div>
                <img src="@/assets/img/home19.jpg" alt="">
                <div class="box">
                    <van-row>
                        <van-col span="8">
                            <span>品质长袖夹克</span>
                            <span>1.1万人想要</span>
                            <img src="@/assets/img/home20.jpg" alt="">
                        </van-col>
                        <van-col span="8"> 
                            <span>运动尖货</span>
                            <span>尖货限量</span>
                            <img src="@/assets/img/home21.jpg" alt="">
                        </van-col>
                        <van-col span="8">
                             <span>运动尖货运动鞋服</span>
                            <span>2件75折</span>
                            <img src="@/assets/img/home22.jpg" alt="">
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