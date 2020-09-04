<template>
    <div >
        <van-swipe @change="onChange">
  <van-swipe-item><img src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/44552/2/9194/64626/5d69d979Ea8eec173/20b7451c4e0b58bb.jpg!q70.dpg.webp" alt=""></van-swipe-item>
  
  <van-swipe-item><img src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/70034/31/3491/31283/5d1b16d0Eeb5a282b/a465d40ecbc93bc3.jpg!q70.dpg.webp" alt=""></van-swipe-item>
   
  <van-swipe-item><img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/118625/39/5617/52919/5eb52b11E915c1a6c/598827aff9a8e7fd.jpg!q80.dpg.webp" alt=""></van-swipe-item>
  
  <van-swipe-item><img src="https://m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/113988/4/5736/25289/5eb52b11Eed5d013d/baa9300099682130.jpg!q70.dpg.webp" alt="">
   
  <van-button type="info" to="home">点击体验</van-button>
  </van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/4
    </div>
  </template>
</van-swipe>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      
    
      current: 0,
    
  }
  },
 
  methods: {
    onChange(index) {
      this.current = index;
    },
  },

  created(){
            //隐藏导航
            this.$store.state.vanTabbar = false;
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            this.$store.state.vanTabbar = true;
        },
}

</script>

<style lang="scss" scoped>  
    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .van-swipe{
    text-align: center;
  }
</style>