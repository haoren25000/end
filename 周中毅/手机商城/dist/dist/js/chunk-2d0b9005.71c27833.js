(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9005"],{"30a3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:e.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(t){return e.$router.go(-1)}}}),a("van-address-edit",{attrs:{"area-list":e.areaList,"show-search-result":"","search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave}})],1)},s=[],n=(a("b0c0"),a("c37d")),o={data:function(){return{areaList:n["a"],searchResult:[]}},methods:{onSave:function(e){var t=e.name,a=e.tel,r=e.province,s=e.city,n=e.county,o=e.areaCode,c=e.addressDetail;this.$store.commit("address/add",{name:t,tel:a,address:r+s+n+c,province:r,city:s,county:n,areaCode:o,addressDetail:c}),this.$router.go(-1)}},created:function(){this.$store.state.vanTabbar=!1},beforeRouteLeave:function(e,t,a){"/person"==e.path&&(this.$store.state.vanTabbar=!0),a()}},c=o,i=a("2877"),u=Object(i["a"])(c,r,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b9005.71c27833.js.map