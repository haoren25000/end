<template>
  <div id="app">
    
    
        <router-view></router-view>
    

  </div>
</template>

<script>
export default {
    data(){
      return{
        active:this.$store.state.active
      }
    }
}
</script>
<style lang="scss">
#app{
  
  padding-bottom: 50px;
}

</style>
