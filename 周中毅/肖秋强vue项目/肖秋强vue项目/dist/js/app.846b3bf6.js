(function(e){function n(n){for(var c,a,o=n[0],d=n[1],i=n[2],f=0,h=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&h.push(u[a][0]),u[a]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(h.length)h.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==u[o]&&(c=!1)}c&&(r.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},a={app:0},u={app:0},r=[];function o(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-09cded8c":"e3341e1b","chunk-1998cda1":"80454963","chunk-1a56d046":"04cde860","chunk-21adea70":"dda66ae2","chunk-2d0b308c":"075210f5","chunk-2d0c0fd7":"72526c3a","chunk-2d20fe32":"78b198e7","chunk-1a8afb89":"4f5237e9","chunk-28cf88c0":"bfe9bf3d","chunk-3cddfe64":"3358b4dc","chunk-794ff027":"7a2a6faf","chunk-a68301b0":"bd18c65a","chunk-e416e338":"412909e7","chunk-2d216833":"ac251b28","chunk-2b4ea8f4":"ecd82e78","chunk-2d0b9005":"eabadd44","chunk-2d231599":"1446895b","chunk-31747537":"c74c6042","chunk-3d062a6b":"58a8f53d","chunk-47f1d868":"943cdf7c","chunk-56d501fa":"4a8a0203","chunk-5eceefc6":"af375ef9","chunk-5f775d5d":"e1145225","chunk-6e22c71e":"a44e7778","chunk-7d5789a2":"505dc300","chunk-90590248":"e4f12aec","chunk-e1d8c4c4":"5f9387eb"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-1a56d046":1,"chunk-21adea70":1,"chunk-1a8afb89":1,"chunk-28cf88c0":1,"chunk-3cddfe64":1,"chunk-794ff027":1,"chunk-a68301b0":1,"chunk-e416e338":1,"chunk-31747537":1,"chunk-3d062a6b":1,"chunk-47f1d868":1,"chunk-56d501fa":1,"chunk-5eceefc6":1,"chunk-5f775d5d":1,"chunk-6e22c71e":1,"chunk-7d5789a2":1,"chunk-90590248":1,"chunk-e1d8c4c4":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-09cded8c":"31d6cfe0","chunk-1998cda1":"31d6cfe0","chunk-1a56d046":"34a865ff","chunk-21adea70":"41f81f3d","chunk-2d0b308c":"31d6cfe0","chunk-2d0c0fd7":"31d6cfe0","chunk-2d20fe32":"31d6cfe0","chunk-1a8afb89":"f1fc1e0d","chunk-28cf88c0":"ff26556f","chunk-3cddfe64":"61620bc5","chunk-794ff027":"be96ef06","chunk-a68301b0":"89e0fee5","chunk-e416e338":"a3e37277","chunk-2d216833":"31d6cfe0","chunk-2b4ea8f4":"31d6cfe0","chunk-2d0b9005":"31d6cfe0","chunk-2d231599":"31d6cfe0","chunk-31747537":"b5cf8026","chunk-3d062a6b":"b7a6f4b8","chunk-47f1d868":"611b531b","chunk-56d501fa":"4d0d4fd0","chunk-5eceefc6":"62562805","chunk-5f775d5d":"678d1c74","chunk-6e22c71e":"eb668ae9","chunk-7d5789a2":"19014303","chunk-90590248":"28656271","chunk-e1d8c4c4":"54b4e304"}[e]+".css",u=d.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var i=r[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===u))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){i=h[o],f=i.getAttribute("data-href");if(f===c||f===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],l.parentNode.removeChild(l),t(r)},l.href=u;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){a[e]=0})));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise((function(n,t){c=u[e]=[n,t]}));n.push(c[2]=r);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=o(e);var h=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",h.name="ChunkLoadError",h.type=c,h.request=a,t[1](h)}u[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var h=0;h<i.length;h++)n(i[h]);var l=f;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3aff":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],r={data:function(){return{}}},o=r,d=(t("5c0b"),t("2877")),i=Object(d["a"])(o,a,u,!1,null,null,null),f=i.exports,h=(t("99af"),t("2909")),l=t("8c4f"),s=(t("d3b7"),{path:"/home",name:"首页",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-794ff027")]).then(t.bind(null,"6511"))},children:[{path:"recommend",name:"推荐",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-3cddfe64")]).then(t.bind(null,"a813"))}},{path:"phone",name:"手机",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-1a8afb89")]).then(t.bind(null,"e16c"))}},{path:"intelligence",name:"智能",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-28cf88c0")]).then(t.bind(null,"b0fb"))}},{path:"televisions",name:"电视",component:function(){return t.e("chunk-7d5789a2").then(t.bind(null,"e3ba"))}},{path:"notebook",name:"笔记本",component:function(){return t.e("chunk-31747537").then(t.bind(null,"52e8"))}},{path:"electricity",name:"家电",component:function(){return t.e("chunk-47f1d868").then(t.bind(null,"bb4b"))}}]}),p={path:"/category",name:"分类",component:function(){return t.e("chunk-5eceefc6").then(t.bind(null,"8fce"))}},b=[{path:"/cart",name:"购物车",component:function(){return t.e("chunk-6e22c71e").then(t.bind(null,"da83"))}},{path:"/order",name:"订单",component:function(){return t.e("chunk-09cded8c").then(t.bind(null,"958b"))}}],k=[{path:"/my",name:"我的",component:function(){return t.e("chunk-e1d8c4c4").then(t.bind(null,"0c6f"))}},{path:"/login",name:"登陆",component:function(){return t.e("chunk-2d0b308c").then(t.bind(null,"273d"))}},{path:"/register",name:"注册",component:function(){return t.e("chunk-2d231599").then(t.bind(null,"efbd"))}}],m={path:"/search",name:"搜索",component:function(){return t.e("chunk-90590248").then(t.bind(null,"4e22"))}},g={path:"/details",name:"详情",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-a68301b0")]).then(t.bind(null,"58cc"))}},v=[{path:"/guidepage",name:"引导页",component:function(){return Promise.all([t.e("chunk-2d20fe32"),t.e("chunk-e416e338")]).then(t.bind(null,"62b0"))}},{path:"/advertpage",name:"广告页",component:function(){return t.e("chunk-21adea70").then(t.bind(null,"228b"))},beforeEnter:function(e,n,t){localStorage.advertpage?t():(localStorage.advertpage=!0,t("/guidepage"))}}],y=[{path:"/address",name:"地址",component:function(){return t.e("chunk-1998cda1").then(t.bind(null,"ae54"))}},{path:"/addressAdd",name:"新增地址",component:function(){return Promise.all([t.e("chunk-2d216833"),t.e("chunk-2d0b9005")]).then(t.bind(null,"30a3"))}},{path:"/addressEdit",name:"修改地址",component:function(){return Promise.all([t.e("chunk-2d216833"),t.e("chunk-2b4ea8f4")]).then(t.bind(null,"952f"))}}],O=[{path:"/orderlist",name:"订单列表",component:function(){return t.e("chunk-2d0c0fd7").then(t.bind(null,"43ac"))},children:[{path:"orderAll",name:"全部订单",component:function(){return t.e("chunk-5f775d5d").then(t.bind(null,"9e1b"))}},{path:"orderPay",name:"未支付",component:function(){return t.e("chunk-56d501fa").then(t.bind(null,"6050"))}},{path:"orderGoods",name:"待收货",component:function(){return t.e("chunk-1a56d046").then(t.bind(null,"1074"))}},{path:"orderEnd",name:"已完成",component:function(){return t.e("chunk-3d062a6b").then(t.bind(null,"652e"))}}]}];c["a"].use(l["a"]);var j=[{path:"/",redirect:"/advertpage"},s,p].concat(Object(h["a"])(b),Object(h["a"])(k),[m,g],Object(h["a"])(v),Object(h["a"])(y),Object(h["a"])(O)),w=new l["a"]({mode:"history",base:"/",routes:j}),P=w,E=t("2f62"),S=(t("c740"),{namespaced:!0,state:{lists:[],num:0},mutations:{add:function(e,n){var t=e.lists.findIndex((function(e){return e.id==n.id}));"-1"!=t?(e.lists[t].num+=1,e.num=e.lists[t].num):(n.isSelect=!0,e.lists.push(n),e.num=1)},edit:function(e,n){Object.assign(e.lists,n)}},actions:{}}),x=(t("4160"),t("159b"),{namespaced:!0,state:{lists:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",isDefault:!0,province:"浙江省",city:"杭州市",county:"西湖区",areaCode:"330106",addressDetail:"文三路 138 号东方通信大厦 7 楼 501 室"}]},mutations:{add:function(e,n){e.lists.forEach((function(e){e.isDefault=!1})),n.isDefault=!0,n.id=e.lists.length+1,e.lists.push(n)},edit:function(e,n){var t=e.lists.findIndex((function(e){return e.id==n.id}));Object.assign(e.lists[t],n)},editId:function(e,n){e.lists.forEach((function(e){e.isDefault=e.id==n}))}},actions:{}}),_=(t("a434"),{namespaced:!0,state:{lists:[],typeList:["全部订单","待支付","待收货","已完成"]},mutations:{add:function(e,n){e.lists.push(n)},editId:function(e,n){for(var t=0;t<n.length;t++)for(var c=0;c<e.lists.length;c++)n[t].orderId==e.lists[c].orderId&&6==n[t].type?e.lists.splice(c,1):n[t].orderId==e.lists[c].orderId&&(e.lists[c].type=n[t].type)}},actions:{}});c["a"].use(E["b"]);var I=new E["b"].Store({state:{vanTabbar:!0,username:null,active:0},mutations:{},actions:{},modules:{cart:S,address:x,order:_}}),T=(t("3aff"),t("a342"),t("b970")),A=(t("157a"),t("f4bd"),t("bc3a")),C=t.n(A);c["a"].config.productionTip=!1,C.a.defaults.baseURL="http://127.0.0.1:3000/",c["a"].prototype.$axios=C.a,c["a"].use(T["a"]),new c["a"]({router:P,store:I,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),a=t.n(c);a.a},"9c0c":function(e,n,t){},a342:function(e,n,t){}});
//# sourceMappingURL=app.846b3bf6.js.map