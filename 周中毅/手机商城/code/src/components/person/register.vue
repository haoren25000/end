<template>
  <div>
    <van-nav-bar
      :title="$route.name"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/person')"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="password2"
        type="password"
        name="password2"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

    <div class="bottom">
      <h1>可选择其他登录方式</h1>
      <van-row gutter="30">
        <van-col span="8" >
            <img src="../../assets/images/qq.jpg" alt="">
        </van-col>
        <van-col span="8">
            <img src="https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png" alt="">
        </van-col>
        <van-col span="8">
            <img src="../../assets/images/aa.jpg" alt="">
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    onSubmit(params) {
      let _this = this;
      this.$axios.get("register", { params }).then(res => {
        console.log(res);
        // 请求数据成功后提示
        if (res.data == "200") {
          Toast({
            message: "注册成功",
            onOpened() {
              // 回调跳转路由
              _this.$router.push("/login");
            }
          });
        } else {
          Toast("注册失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom{
    width: 70%;
    margin: 200px auto;
    h1{
        text-align: center;
        font-size:14px;
        margin-bottom: 15px;
    }
}
</style>