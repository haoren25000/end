(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d799a"],{7803:function(e,a,s){"use strict";s.r(a);var r=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("van-nav-bar",{attrs:{title:"注册","left-text":"返回","left-arrow":""},on:{"click-left":function(a){return e.$router.go(-1)}}}),s("van-form",{on:{submit:e.onSubmit}},[s("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),s("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),s("van-field",{attrs:{type:"password",name:"password2",label:"密码",placeholder:"确认密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password2,callback:function(a){e.password2=a},expression:"password2"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"#ff5000"}},[e._v(" 注册 ")])],1)],1)],1)},t=[],n=s("d399"),o={data:function(){return{username:"",password:"",password2:""}},methods:{onSubmit:function(e){var a=this;this.$axios.get("register",{params:e}).then((function(e){"200"==e.data?Object(n["a"])({message:"注册成功",onOpened:function(){a.$router.push("/login")}}):Object(n["a"])("注册失败")}))}}},l=o,u=s("2877"),i=Object(u["a"])(l,r,t,!1,null,"6d262714",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d799a.5b0b9c11.js.map