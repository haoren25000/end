(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6441da6e"],{"02ac":function(t,e,s){"use strict";var a=s("8d98"),r=s.n(a);r.a},"8d98":function(t,e,s){},b0a5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"地址编辑","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"form"},[s("van-field",{attrs:{label:"姓名",placeholder:"姓名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("van-field",{attrs:{label:"电话",placeholder:"电话"},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),s("van-field",{attrs:{label:"地址",placeholder:"地址"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:t.edit}},[t._v("提交")])],1)],1)},r=[],i=(s("b0c0"),{data:function(){return{username:"",tel:"",address:""}},methods:{edit:function(){this.$store.state.cart.sidedata[this.$store.state.cart.editnum].name=this.username,this.$store.state.cart.sidedata[this.$store.state.cart.editnum].tel=this.tel,this.$store.state.cart.sidedata[this.$store.state.cart.editnum].address=this.address,this.$router.push({path:"/alterside"})},onClickLeft:function(){this.$router.go(-1)}},created:function(){this.username=this.$store.state.cart.sidedata[this.$store.state.cart.editnum].name,this.tel=this.$store.state.cart.sidedata[this.$store.state.cart.editnum].tel,this.address=this.$store.state.cart.sidedata[this.$store.state.cart.editnum].address},beforeCreate:function(){console.log(this.$store.state.isb),this.$store.state.isb=!1},beforeDestroy:function(){this.$store.state.isb=!0}}),n=i,o=(s("02ac"),s("2877")),d=Object(o["a"])(n,a,r,!1,null,"c730ef6e",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6441da6e.96c55ef9.js.map