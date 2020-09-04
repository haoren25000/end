<template>
    <div>
        <div class="loginheader">
            <van-row >
                <van-col class="classleftlog" span="2">
                <router-link to="/main"><span id="leftlogo"></span></router-link>
                </van-col>
                <van-col class="classtitle" span="20">
                    <span>京东登录注册</span>  
                </van-col>
                <van-col class="classmore" span="2"></van-col>
            </van-row>
        </div>

        <div class="loginform">
            <van-form>
                <van-field  type="tel" label="手机号" />
                <van-field
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
                >
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
                </van-field>
                <div style="margin: 16px;">
                    <van-button class="login" round block type="info" native-type="submit">
                    登录
                    </van-button>
                </div>
                <div style="margin: 16px;">
                    <van-button class="oneclicklogin" round block type="info" native-type="submit">
                    一键登录
                    </van-button>
                </div>
                <p class="quick-btn">
                    <span>账号密码登录</span>
                    <span>手机快速注册</span>
                </p>
            </van-form>
            <van-divider
            :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
            >
            其他登录方式
            </van-divider>

            <!-- 每个元素的两侧间隔相等 -->
            <van-row type="flex" justify="space-around">
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
                <van-col span="6">span: 6</van-col>
            </van-row>
            <span class="end">未注册的手机号验证后将自动创建京东账号,登录即代表您已同意<a href="">京东隐私政策</a></span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.loginheader{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: white;
  position: flex;
  top:0;
  z-index: 999;
  .classleftlog{
      width: 34px;
      height: 34px;
      overflow: hidden;
  }
  #leftlogo{
    margin: 14px 0 0 15px;
    width: 200px;
    height: 180px;
    display: block;
    background: url("../assets/icon02/jd-sprites.png") no-repeat;
    background-position: -20px 0;
    background-color: rgba($color: #fff, $alpha: 0);
    background-size: 100% 100%;
  }
  .classtitle{
    text-align: center;
  }
}

.loginform{

    .login{
        background-image:linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
        border:1px solid #ffbcb3;
        color:#fff;
    }
    .oneclicklogin{
        background:#fff;
        border:1px solid #ff2000;
        color:#f10000;
    }
    .end{
        width: 100%;
        text-align: center;
    }
}

</style>