(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a0394ae"],{"0265":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.list,(function(n,s){return e("div",{key:s,staticClass:"orderlist"},[e("van-cell",{attrs:{center:"",title:"订单："+n.orderId,value:t.typeList[n.type],label:String(n.dateTime)}}),t._l(n.goodlist,(function(n,s){return e("van-row",{key:s,staticClass:"goodcart"},[e("van-col",{attrs:{span:"8"}},[e("van-image",{attrs:{height:"5rem",fit:"contain",src:n.img}})],1),e("van-col",{attrs:{span:"16"}},[e("div",{staticClass:"content"},[e("h1",[t._v(t._s(n.title))]),e("h2",[t._v(t._s(n.nextTitle))]),e("div",{staticClass:"box"},[e("p",{staticClass:"price"},[t._v("￥"+t._s(n.price)+" ")]),e("p",{staticClass:"count"},[t._v(" × "+t._s(n.num)+" ")])])])])],1)})),e("div",{staticClass:"orderfooter"},[1==n.type?e("div",[e("van-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.onPay(n.orderId)}}},[t._v("支付订单")]),e("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.onDel(n.orderId)}}},[t._v("删除订单")])],1):2==n.type?e("div",[e("van-button",{attrs:{size:"small",type:"warning"}},[t._v("退款申请")]),e("van-button",{attrs:{size:"small",type:"info"},on:{click:function(e){return t.onGoods(n.orderId)}}},[t._v("已收货")])],1):3==n.type?e("div",[e("van-button",{attrs:{type:"primary",size:"small"}},[t._v("商品评价")])],1):t._e()])],2)})),0)},i=[],r=(e("c740"),e("a434"),{data:function(){return{}},created:function(){this.list=this.$store.state.order.lists.reverse(),this.typeList=this.$store.state.order.typeList},methods:{onPay:function(t){var n=this.list.findIndex((function(n){return n.orderId==t}));this.list[n].type=2},onGoods:function(t){var n=this.list.findIndex((function(n){return n.orderId==t}));this.list[n].type=3},onDel:function(t){var n=this.list.findIndex((function(n){return n.orderId==t}));this.list.splice(n,1)}}}),a=r,o=(e("437f"),e("2877")),c=Object(o["a"])(a,s,i,!1,null,"d2bc0a0e",null);n["default"]=c.exports},"437f":function(t,n,e){"use strict";var s=e("691b"),i=e.n(s);i.a},"691b":function(t,n,e){}}]);
//# sourceMappingURL=chunk-2a0394ae.2977ff84.js.map