<template>
  <div class="menu">
    <div class="menu-content">
      <div class="aside-menu fl">
        <div
          class="item"
          :ref="'item' + index"
          :class="{active: item.isActive}"
          v-for="(item, index) in typeData"
          :key="index"
          @click="toggleAsideMenu(item, index)"
        >{{item.cat_name}}</div>
        <div class="line" :style="{top: top + 'px'}"></div>
      </div>
      <div class="content fl clearfix">
        <div
          class="fl content-item"
          v-for="(item,index) in typeData"
          :key="index"
        >
          {{item.children[0].cat_name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

export default {
  data() {
    return {
      //商品类型
      typeData: [],

      //移动线条的top
      top: 0,

      //商品数据
      productData: [],
    };
  },

  created() {
    //获取商品类型数据
    this.getTypeData();

    //根据类型获取商品数据
    this.getProductByType({ type: "isHot" });

    this.moveLine();
  },

  methods: {
    //初始化时移动线条
    moveLine() {
      for (let i = 0; i < this.typeData.length; i++) {
        if (this.typeData[i].isActive) {
          this.top = i * this.height;
          return;
        }
      }
    },

    //获取商品类型数据
    getTypeData() {
      //开启加载提示
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
        duration: 0,
      });
      this.axios({
        method: "GET",
        url: "/categories",
      })
        .then((result) => {
          this.$toast.clear();
          console.log("result ==> ", result);
          if (result.data.meta.status == 200) {
            result.data.message.forEach((v) => {
              v.isActive = false;
            });
            this.typeData = result.data.message;
            this.productData = this.typeData[0].children
          }
          console.log('this.productData ==> ',this.productData)
          console.log('this.typeData ==> ',this.typeData)
        })
        .catch((err) => {
          this.$toast.clear();
          console.log("err ==> ", err);
        });
    },
    //切换标签
    toggleAsideMenu(item, index) {
      if (item.isActive) {
        return;
      }
      for (let i = 0; i < this.typeData.length; i++) {
        if (this.typeData[i].isActive) {
          this.typeData[i].isActive = false;
          break;
        }
      }
      item.isActive = true;
      //移动线条
      this.top = this.height * index;
      //根据类型获取商品数据
      this.getProductByType(item);
    },

    //根据类型获取商品数据
    getProductByType(item) {
      this.productData = [];
      let params = {
        key: "type",
        value: item.type,
      };
      //最近推荐
      if (item.type == "isHot") {
        params.key = "isHot";
        params.value = 1;
      }
      //开启加载提示
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        //延迟自动关闭加载提示，如果该值为0，则不会自动关闭
        duration: 0,
      });
      this.axios({
        method: "GET",
        url: "/typeProducts",
        params,
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 500) {
            this.productData = result.data.result;
            //缓存商品数据
            this.changeProducts({
              type: item.type,
              value: result.data.result,
            });
            console.log("缓存商品数据");
          }
        })
        .catch((err) => {
          this.$toast.clear();
          console.log("err ==> ", err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.menu {
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  width: 100%;
}
.menu-content {
  height: calc(~"100% - 163.03px");
}
.aside-menu {
  width: 100px;
  height: 100%;
  position: relative;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.content {
  padding: 10px 10px 0;
  width: calc(~"100% - 120px");
  height: calc(100% - 10px);
  overflow-y: auto;
}
.item {
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  &.active {
    background-color: #fff;
    color: #2a1b1d;
  }
}

.line {
  position: absolute;
  width: 2px;
  height: 44px;
  background-color: rgb(126, 47, 47);
  left: 0;
  top: 0;
  transition: top 0.1s linear;
}

.content-item {
  width: calc(~"50% - 25px");
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  &.left {
    margin-right: 5px;
  }
  &.right {
    margin-left: 5px;
  }
}
</style>