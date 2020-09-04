<template>
    <div>
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.push('/my')"
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
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
            </van-form>
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
                let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';

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

</style>