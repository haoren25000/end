(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6898ba02"],{"0c6f":function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("van-contact-card",{attrs:{type:t.cardType,name:t.currentContact.name,tel:t.currentContact.tel},on:{click:function(n){t.showList=!0}}}),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(n){t.showList=n},expression:"showList"}},[i("van-contact-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenContactId,callback:function(n){t.chosenContactId=n},expression:"chosenContactId"}})],1),i("van-popup",{attrs:{position:"bottom"},model:{value:t.showEdit,callback:function(n){t.showEdit=n},expression:"showEdit"}},[i("van-contact-edit",{attrs:{"contact-info":t.editingContact,"is-edit":t.isEdit},on:{save:t.onSave,delete:t.onDelete}})],1),i("div",[i("van-coupon-cell")],1),i("van-cell",{attrs:{"is-link":"",title:"我的订单"}}),i("van-cell",{attrs:{"is-link":"",title:"待支付"}}),i("van-cell",{attrs:{"is-link":"",title:"已完成"}}),i("van-cell",{attrs:{"is-link":"",title:"售后",to:"/after"}})],1)},e=[],s=(i("4de4"),i("d81d"),{data:function(){return{chosenContactId:null,editingContact:{},showList:!1,showEdit:!1,isEdit:!1,list:[{name:"张三",tel:"13000000000",id:0}]}},computed:{cardType:function(){return null!==this.chosenContactId?"edit":"add"},currentContact:function(){var t=this.chosenContactId;return null!==t?this.list.filter((function(n){return n.id===t}))[0]:{}}},methods:{onAdd:function(){this.editingContact={id:this.list.length},this.isEdit=!1,this.showEdit=!0},onEdit:function(t){this.isEdit=!0,this.showEdit=!0,this.editingContact=t},onSelect:function(){this.showList=!1},onSave:function(t){this.showEdit=!1,this.showList=!1,this.isEdit?this.list=this.list.map((function(n){return n.id===t.id?t:n})):this.list.push(t),this.chosenContactId=t.id},onDelete:function(t){this.showEdit=!1,this.list=this.list.filter((function(n){return n.id!==t.id})),this.chosenContactId===t.id&&(this.chosenContactId=null)}}}),c=s,a=i("2877"),d=Object(a["a"])(c,o,e,!1,null,"0c862044",null);n["default"]=d.exports},"1dde":function(t,n,i){var o=i("d039"),e=i("b622"),s=i("2d00"),c=e("species");t.exports=function(t){return s>=51||!o((function(){var n=[],i=n.constructor={};return i[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"4de4":function(t,n,i){"use strict";var o=i("23e7"),e=i("b727").filter,s=i("1dde"),c=i("ae40"),a=s("filter"),d=c("filter");o({target:"Array",proto:!0,forced:!a||!d},{filter:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,n,i){"use strict";var o=i("23e7"),e=i("b727").map,s=i("1dde"),c=i("ae40"),a=s("map"),d=c("map");o({target:"Array",proto:!0,forced:!a||!d},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6898ba02.a5a5b44f.js.map