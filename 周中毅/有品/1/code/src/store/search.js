export default {
    namespaced:true,//命名空间
    state:{
        history:[],//历史搜索
        isHis:false,
    },
    mutations:{
        add1(state,arr){
            if(arr.length > 0){
               state.history.push(arr)
            state.isHis = true
            }
           
          },
          del(state){
            state.history = [];
            state.isHis = false
          },
          skip(state){
            state.active = 0
          }
    },
    actions:{}
}