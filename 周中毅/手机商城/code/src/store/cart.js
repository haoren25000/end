export default {
    namespaced:true,
    state:{
        lists:[],
        num:0 
    },
    mutations:{
        add(state,obj){
            
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ 
                state.lists[index].num += 1;
                state.num = state.lists[index].num;
            }else{ 
                obj.isSelect = true; 
                state.lists.push(obj);
                state.num = 1;
            }
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        }
    },
    actions:{}
}