<template>
    <div>
        <div class="myheader">
            <van-row >
                <van-col class="classleftlog" span="2">
                <router-link to="/main"><span id="leftlogo" @click="$router.go(-1)"></span></router-link>
                </van-col>
                <van-col class="classtitle" span="20">
                    <span>我的京东</span>  
                </van-col>
                <van-col class="classmore" span="2">
                    <img src="../assets/icon01/其他.png" alt="">
                </van-col>
            </van-row>
        </div>

        <!-- <div class="my-login-header">
            <div class="my-login-headportrait">
                
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.myheader{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: white;
  position: flex;
  top:0;
  z-index: 999;
  .classleftlog{
      width: 34px;
      height: 34px;
      overflow: hidden;
  }
  #leftlogo{
    margin: 14px 0 0 15px;
    width: 200px;
    height: 180px;
    display: block;
    background: url("../assets/icon02/jd-sprites.png") no-repeat;
    background-position: -20px 0;
    background-color: rgba($color: #fff, $alpha: 0);
    background-size: 100% 100%;
  }
  .classtitle{
    text-align: center;
  }
  .classmore{
      position: relative;
      top: 10px;
      right: 8px;
      img{
          width: 34px;
          height: 34px;
      }
  }
}
</style>