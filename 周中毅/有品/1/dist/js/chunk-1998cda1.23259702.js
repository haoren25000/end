(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1998cda1"],{"7db0":function(t,e,s){"use strict";var d=s("23e7"),n=s("b727").find,i=s("44d2"),r=s("ae40"),o="find",a=!0,c=r(o);o in[]&&Array(1)[o]((function(){a=!1})),d({target:"Array",proto:!0,forced:a||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},ae54:function(t,e,s){"use strict";s.r(e);var d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:t.$route.name,"left-text":"返回","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),s("van-address-list",{attrs:{list:t.list,"default-tag-text":"默认"},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},n=[],i=(s("7db0"),s("d399")),r={data:function(){return{chosenAddressId:"1",list:[]}},methods:{onAdd:function(){this.$router.push("/addressAdd")},onEdit:function(t){this.$router.push({path:"/addressEdit",query:{id:t.id}}),console.log(t)},onSelect:function(t){this.$store.commit("address/editId",t.id),this.$router.go(-1)}},created:function(){this.list=this.$store.state.address.lists||[];try{this.chosenAddressId=this.list.find((function(t){return t.isDefault})).id}catch(t){Object(i["a"])("没有地址数据")}}},o=r,a=s("2877"),c=Object(a["a"])(o,d,n,!1,null,"52fafb8d",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-1998cda1.23259702.js.map