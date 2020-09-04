<template>
    <div>
       
      <van-nav-bar
                title="登录"
                left-text="返回"
                left-arrow
                @click-left="$router.go(-1)"
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
                    <van-button round block type="info" native-type="submit"   color="#ff5000"  >
                  登录
                    </van-button>
                </div>
        </van-form>

    <div class="login-link">
        <a href="javascript:;" class="autoCode">短信验证码登录</a>
        <a href="javascript:;" class="register" @click="$router.push('/register')">免费注册</a>
    </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    export default {
        data(){
            return{
                username: '',
                password: '',
            }
        },
        methods:{
            onSubmit(params) {
                let _this=this
                
                let path="path" in  _this.$route.query? _this.$route.query.path:"/person"
                 this.$axios.get("login",{params}).then((res)=>{
                     if(res.data=="200"){
                           Toast({
                               message:"登录成功",
                               onOpened(){
                                   _this.$store.state.username=_this.username
                                   console.log(_this.$store.state.username)
                                   _this.$router.push(path)
                               }
                           })
                     }else{
                         Toast("登录失败")
                     }
                 })
                    
            },
        },
        
    }
</script>

<style lang="scss" scoped>
html,header,input,button,p{
    padding: 0;
    margin: 0;
}
$mainColor:#ff0036;
.van-nav-bar{
    margin-bottom: 1rem;
}
.van-button{
    background: $mainColor;
}
    .login-link{
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
        a{
            display: inline-block;
            color: $mainColor;
            text-decoration: none;
            font-size:0.6rem;
            height:16px;
            line-height:16px;
            cursor: pointer;
        }
         .auotCode{
             float: left;
         }
         .register{
             margin-top:6px;
             float: right;
         }

    }
</style>