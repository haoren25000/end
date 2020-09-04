<template>
    <div>
                <van-nav-bar
                    :title="$route.name"
                    left-text="返回"
                    left-arrow 
                    @click-left="$router.push('/person')"
                />
                    <!-- 基本信息 -->
                <div class="message">
                    
            
                    <!--个人信息 -->
                    <div class="cell"  @click="$router.push('/address')">
                        <div class="left">
                            <van-icon name="manager-o" />个人信息
                        </div>
                        <div class="right" >
                            <span>收货地址管理</span>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 账号安全 -->
                    <div class="cell">
                        <div class="left">
                            <span class="iconfont icon-zhanghaoanquan"></span>账号安全
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 通知消息提醒 -->
                    <div class="cell">
                        <div class="left">
                            <van-icon name="chat-o" />通知消息提醒
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 通用 -->
                    <div class="cell">
                        <div class="left">
                            <van-icon name="setting-o" />通用
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 隐私 -->
                   <div class="cell">
                        <div class="left">
                           <span class="iconfont icon-ziyuan"></span>隐私
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                 </div> 


                 <div class="condition">
                     <!-- 主题状态  -->

                    <div class="cell">
                        <div class="left">
                           <span class="iconfont icon-zhuti"></span>主题状态
                        </div>
                        <div class="right">
                            <span>默认皮肤</span>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 通用 -->
                   <div class="cell">
                        <div class="left">
                          <span class="iconfont icon-tupian"></span>图片质量
                        </div>
                        <div class="right">
                            <span>智能模式</span>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 自动下载最新安装包 -->
                   <div class="cell">
                        <div class="left">
                          <span class="iconfont icon-xiazai"></span>自动下载最新安装包
                        </div>
                        <div class="right">
                            <span>仅wi-Fi网络</span>
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
                <!-- 系统设置 -->
                <div class="ourselves">
                    <!-- 关于我们 -->
                    <div class="cell">
                        <div class="left">
                            <van-icon name="warning-o" />关于我们
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <!-- 意见反馈 -->
                   <div class="cell">
                        <div class="left">
                            <van-icon name="records" />意见反馈
                        </div>
                        <div class="right">
                        
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
                <!-- 退出登录按钮 -->
                <div class="del" @click="onsubit">
                    退出登录
                </div>
    </div>
</template>

<script>
    export default {
        methods:{
            onsubit(){
                this.$store.state.username=""
                this.$router.push("/person")
            }
        },
        
       
       
       
    }
</script>

<style lang="scss" scoped>
.van-nav-bar{
    margin-bottom: 5px;
}
.message{
    margin-bottom: 20px;
        
}
.condition{
    margin-bottom: 30px;
}
.cell{
        
        background: #fff;
        color: #000;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        span{
            color:#ccc;
            font-size: 12px;
            margin-right: 5px;
        }
        .van-icon{
            color: #999;
            font-size: 15px;
            vertical-align: middle;
            margin-right: 5px;
        }
        }
.del{
    background: #fff;
    padding: 10px;
    text-align: center;
    color: red;
    font-weight: 500;
    font-size: 15px;
}

</style>