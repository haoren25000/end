(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-604a9bcf"],{"1c5c":function(t,a,n){t.exports=n.p+"img/poster.7de8a6dc.jpg"},"228b":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("img",{staticClass:"poster",attrs:{src:n("1c5c"),alt:""}}),e("van-button",{attrs:{round:"",type:"info",color:"rgba(255,255,255,0.4)"},on:{click:t.gotomain}},[t._v("点击跳过("+t._s(t.time)+")")])],1)},r=[],c={data:function(){return{time:5,cleardata:null}},methods:{gotomain:function(){this.$router.push("/main")}},created:function(){var t=this;this.cleardata=setInterval((function(){0==t.time?t.$router.push("/main"):t.time--}),1e3),this.$store.state.vanTabbar=!1},beforeDestroy:function(){this.$store.state.vanTabbar=!0,clearInterval(this.cleardata)}},i=c,o=(n("5868"),n("4023")),s=Object(o["a"])(i,e,r,!1,null,"60d66875",null);a["default"]=s.exports},5868:function(t,a,n){"use strict";var e=n("854c"),r=n.n(e);r.a},"854c":function(t,a,n){}}]);
//# sourceMappingURL=chunk-604a9bcf.285e2316.js.map