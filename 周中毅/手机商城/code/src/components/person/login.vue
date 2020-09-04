<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/person')"
        />
            <div class="logo">
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
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
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data() {
            return {
            username: '',
            password: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                // 判断是否传参，修改返回路径
                let path = "path" in _this.$route.query ? _this.$route.query.path:'/person';

                this.$axios.get("login",{params}).then((res)=>{
                    console.log(res);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                // 登陆成功用户名存入vuex
                                _this.$store.state.username = _this.username;
                                // 回调跳转路由
                                _this.$router.push(path);
                            }
                            });
                    }else{
                        Toast("登陆失败");
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

.bottom{
    width: 70%;
    margin: 0 auto;
    margin-top: 150px;
    text-align: center;
    img{
        display: inline-block;
        border-radius: 100px;
    }
    h1{
        text-align: center;
        font-size:14px;
        margin-bottom: 15px;
    }
}
</style>