(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4b3658a"],{"092dc":function(t,e,s){"use strict";var n=s("b262"),d=s.n(n);d.a},b262:function(t,e,s){},cbfa:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"地址编辑","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("van-address-list",{attrs:{list:t.$store.state.cart.sidedata,"default-tag-text":"默认","add-button-text":"使用地址"},on:{add:t.add,edit:t.edit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}}),s("van-contact-card",{on:{click:t.addattn}})],1)},d=[],a={data:function(){return{chosenAddressId:"1"}},methods:{add:function(){this.$store.state.cart.chosenAddressId=this.chosenAddressId,this.$router.push({path:"/indent"})},edit:function(t,e){console.log(t),console.log(e),this.$store.state.cart.editnum=e,this.$router.push({path:"/editside"})},onClickLeft:function(){this.$router.go(-1)},addattn:function(){this.$router.push({path:"/addside"})}},beforeCreate:function(){this.$store.state.isb=!1}},o=a,c=(s("092dc"),s("2877")),i=Object(c["a"])(o,n,d,!1,null,"28ff7483",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-f4b3658a.50af2c23.js.map