(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1d8c4c4"],{"0c6f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{staticClass:"nav",attrs:{title:t.$route.name}}),e("van-row",{staticClass:"top",attrs:{gutter:"20"}},[e("van-col",{attrs:{span:"4"}},[e("van-image",{attrs:{round:"",width:"50px",height:"50px",type:"cover",src:"https://img.yzcdn.cn/vant/cat.jpeg"}})],1),e("van-col",{attrs:{span:"20"}},[t.$store.state.username?e("div",[e("h3",{domProps:{textContent:t._s(t.$store.state.username)}}),e("h5",{on:{click:function(a){t.$store.state.username=""}}},[t._v("退出")])]):e("div",[e("router-link",{attrs:{to:"/login"}},[t._v("登陆")]),e("router-link",{attrs:{to:"/register"}},[t._v("注册")])],1)])],1),e("van-cell-group",[e("van-cell",{attrs:{title:"我的订单","is-link":"",to:"/orderlist"}}),e("van-cell",{attrs:{title:"我的收藏","is-link":""}}),e("van-cell",{attrs:{title:"我的地址","is-link":""},on:{click:t.address}}),e("van-cell",{attrs:{title:"优惠卷","is-link":""}}),e("van-cell",{attrs:{title:"设置","is-link":""}})],1),e("vantabber")],1)},n=[],r=e("aed8"),i={methods:{address:function(){0==this.$store.state.address.lists.length?this.$router.push("/addressAdd"):this.$router.push("/address")}},components:{vantabber:r["a"]},created:function(){this.$store.state.active=3}},o=i,c=(e("a274"),e("2877")),l=Object(c["a"])(o,s,n,!1,null,"374cf74a",null);a["default"]=l.exports},"0ccd":function(t,a,e){},"4d25":function(t,a,e){"use strict";var s=e("e5d9"),n=e.n(s);n.a},a274:function(t,a,e){"use strict";var s=e("0ccd"),n=e.n(s);n.a},aed8:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-tabbar",{attrs:{id:"vanTabbar",route:!0},model:{value:t.$store.state.active,callback:function(a){t.$set(t.$store.state,"active",a)},expression:"$store.state.active"}},[e("van-tabbar-item",{attrs:{to:"/home/recommend",icon:"home-o"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{to:"/category",icon:"bar-chart-o"}},[t._v("分类")]),e("van-tabbar-item",{attrs:{to:"/cart",icon:"shopping-cart-o"}},[t._v("购物车")]),e("van-tabbar-item",{attrs:{to:"/my",icon:"user-o"}},[t._v("我的")])],1)],1)},n=[],r={},i=r,o=(e("4d25"),e("2877")),c=Object(o["a"])(i,s,n,!1,null,"1b159276",null);a["a"]=c.exports},e5d9:function(t,a,e){}}]);
//# sourceMappingURL=chunk-e1d8c4c4.5f9387eb.js.map