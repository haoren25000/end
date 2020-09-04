export default {//地址
    namespaced:true,//命名空间
    state:{
       lists:[
        // {
        //     id: '1',
        //     name: '张三',
        //     tel: '13000000000',
        //     address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //     isDefault: true,//默认
        //     province:"浙江省",
        //     city:"杭州市",
        //     county:"西湖区",
        //     areaCode:"",
        //     addressDetail:"文三路 138 号东方通信大厦 7 楼 501 室",
        //   },
         
       ]
    },
    mutations:{
       add(state,obj){
           console.log(obj);
           //去除默认选项
           state.lists.forEach((item)=>{
            item.isDefault = false;
           })
           //默认选项
           obj.isDefault = true;
           obj.id = state.lists.length+1;
           state.lists.push(obj);//添加地址
       },
        // 修改数据
        edit(state,obj){
            // 找到数据下标
            let index = state.lists.findIndex(item=>item.id == obj.id);
            Object.assign(state.lists[index],obj);
        },
        // 修改默认id
        editId(state,id){
            // 去除默认选项
            state.lists.forEach((item)=>{
                item.isDefault = item.id == id?true:false;
            })

        }
    },
    actions:{}
}