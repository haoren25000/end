(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312492ce"],{"6c64":function(t,e,a){"use strict";var s=a("6e0b"),n=a.n(s);n.a},"6e0b":function(t,e,a){},"768f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:t.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.push("/person")}}}),s("div",{staticClass:"logo"},[s("van-form",{on:{submit:t.onSubmit}},[s("van-field",{attrs:{name:"username",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)],1),s("div",{staticClass:"bottom"},[s("h1",[t._v("可选择其他登录方式")]),s("van-row",{attrs:{gutter:"30"}},[s("van-col",{attrs:{span:"8"}},[s("img",{attrs:{src:a("b279"),alt:""}})]),s("van-col",{attrs:{span:"8"}},[s("img",{attrs:{src:"https://res.suning.cn/project/passport/login/wapV8/images/icon_epp.png",alt:""}})]),s("van-col",{attrs:{span:"8"}},[s("img",{attrs:{src:a("81fc"),alt:""}})])],1)],1)],1)],1)},n=[],r=a("d399"),o={data:function(){return{username:"",password:""}},methods:{onSubmit:function(t){var e=this,a="path"in e.$route.query?e.$route.query.path:"/person";this.$axios.get("login",{params:t}).then((function(t){console.log(t),"200"==t.data?Object(r["a"])({message:"登陆成功",onOpened:function(){e.$store.state.username=e.username,e.$router.push(a)}}):Object(r["a"])("登陆失败")}))}}},i=o,u=(a("6c64"),a("2877")),c=Object(u["a"])(i,s,n,!1,null,"da8205dc",null);e["default"]=c.exports},"81fc":function(t,e,a){t.exports=a.p+"img/aa.152a54fa.jpg"},b279:function(t,e,a){t.exports=a.p+"img/qq.b47372ee.jpg"}}]);
//# sourceMappingURL=chunk-312492ce.1b8db7eb.js.map