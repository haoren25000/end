<template>
  <div>
    <div class="header">
      <van-row>
        <van-col span="3">
          <van-icon name="arrow-left" class="leftIcon" @click="$router.go(-1)" />
        </van-col>
        <van-col span="18">
          <a href="#">
            <img src="https://image2.suning.cn/uimg/cms/img/159042094481934324.gif" alt />
          </a>
        </van-col>
        <van-col span="3">
          <van-icon name="new-arrival-o" class="rightIcon" />
        </van-col>
      </van-row>
    </div>
    <div class="search">
      <van-search v-model="value" shape="round" background="#eeeeee" placeholder="请输入搜索关键词" />
    </div>

    <div class="main">
      <p>热门搜索</p>

      <van-grid :gutter="10" :column-num="3">
        <van-grid-item text="华为大酬宾" to="/phone" />
        <van-grid-item text="手机" to="/ipad" />
        <van-grid-item text="电脑" to="/computer" />
      </van-grid>
      <van-grid :gutter="10" :column-num="3" style="margin-top:10px">
        <van-grid-item text="冰箱" to="/phone" />
        <van-grid-item text="空调" to="/phone" />
        <van-grid-item text="电风扇" to="/phone" />
      </van-grid>
      <van-grid :gutter="10" :column-num="3" style="margin-top:10px">
        <van-grid-item text="耳机" to="/phone" />
        <van-grid-item text="笔记本" to="/phone" />
        <van-grid-item text="沙发" to="/phone" />
      </van-grid>
      <van-grid :gutter="10" :column-num="3" style="margin-top:10px">
        <van-grid-item text="伊利" to="/phone" />
        <van-grid-item text="蒙牛" to="/phone" />
        <van-grid-item text="特仑苏" to="/phone" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 54px;
  text-align: center;
  background: black;
  border-bottom: 1px solid #dedede;
  .leftIcon {
    display: block;
    font-size: 28px;
    height: 100%;
    line-height: 54px;
    color: white;
  }
  img {
    margin-top: 8px;
    margin-left: 40px;
  }
  .rightIcon {
    display: block;
    font-size: 40px;
    height: 100%;
    line-height: 54px;
    color: white;
  }
}
.main {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  p {
    text-align: left;
    font-size: 20px;
    margin-left: 10px;
  }
}
</style>