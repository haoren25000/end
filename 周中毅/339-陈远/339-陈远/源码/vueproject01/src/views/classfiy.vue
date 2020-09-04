<template>
    <div>
        <div class="classheader">
            <van-row >
                <van-col class="classleftlog" span="2">
                <router-link to="/main"><span id="leftlogo"></span></router-link>
                </van-col>
                <van-col span="20">
                    <van-search
                    shape="round"
                    background="#fff"
                    placeholder="请输入搜索关键词"
                    />
                </van-col>
                <van-col span="2"></van-col>
            </van-row>
        </div>
        <van-tree-select
        height="100%"
        :items="items"
        :main-active-index.sync="activeIndex"
        />

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
    return {
      activeIndex: 0,
      items: [
        { text: '热门推荐', children: []},
        { text: '手机数码', children: []},
        { text: '电脑办公', children: []},
        { text: '家用电器', children: []},
        { text: '计生情趣', children: []},
        { text: '美妆护肤', children: []},
        { text: '个护清洁', children: []},
        { text: '汽车生活', children: []},
        { text: '京东超市', children: []},
        { text: '男装', children: []},
        { text: '男鞋', children: []},
        { text: '女装', children: []},
        { text: '女鞋', children: []},
        { text: '母婴童装', children: []},
        { text: '图书音像', children: []},
        { text: '运动户外', children: []},
        { text: '内衣配饰', children: []},
      ],
    };
  },
}
</script>
<style lang="scss" scoped>
.classheader{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: white;
  display: inline-block;
  position: fixed;
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
  .van-search{
    height: 44px;
    line-height: 44px;
  }
}
.van-tree-select{
    margin-top: 34px;
    display: block;
}
</style>