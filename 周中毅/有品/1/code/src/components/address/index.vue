<template>
    <div>
      
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />

        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
        />
    </div>
</template>

<script>
 import { Toast } from 'vant';
   export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        // {
        //   id: '1',
        //   name: '张三',
        //   tel: '13000000000',
        //   address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        //   isDefault: true,
        // },
      
      ],
    
    };
  },
  methods: {
    onAdd() {
      // Toast('新增地址');
      this.$router.push("/addressAdd")
    },
    onEdit(item) {
      this.$router.push({path:"/addressEdit",query:{id:item.id}})
        console.log(item);
        
    },
      onSelect(item){
                this.$store.commit("address/editId",item.id);
                this.$router.go(-1)
            }
  },
  created(){
            //隐藏导航
            // this.$store.state.vanTabbar = false;
            
            this.list = this.$store.state.address.lists || [];
            // 获取id值
            try {
                this.chosenAddressId = this.list.find(item=>item.isDefault).id
            } catch (error) {
                Toast('没有地址数据');
            }
            // this.list = this.$store.state.address.lists
            // let defaultId = this.list.find(item=>item.isDefault)
            // this.chosenAddressId = defaultId.id
            
          },
};
    
</script>

<style lang="scss" scoped>
 
</style>