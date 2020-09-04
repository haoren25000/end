export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            // 订单完整性，不可修改
            // {
            //     orderId:"1536423764527635472",//订单固定id
            //     address:{  //地址

            //     },
            //     goodslist:[ //商品列表

            //     ],
            //     type:1 //状态 1 待支付 2 待收货 3 已完成
            // },
        ],
        obj:{},
        typeList:["全部订单","待支付","待收货","已完成"]
    },
    mutations:{
        add(state,obj){
           
            state.lists.push(obj);
        },
        edited(state,obj){
            for(let i=0;i<obj.length;i++){
              for(let j=0;j<state.lists.length;j++){
                  if(obj[i].orderId==state.lists[j].orderId&&obj[i].type==6){
                      state.lists.splice(j,1)
                  }else if(obj[i].orderId==state.lists[j].orderId){
                    state.lists[j].type = obj[i].type;
                  }

                 }
            }
         },
         buy(state,obj){
            Object.assign(state.obj,obj)
         }
        
    },
    actions:{}
}