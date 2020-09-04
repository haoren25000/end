<template>
  <div>
    <!-- <div class="head">head</div> -->
    <div class="content auto">
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item,index) in left"
            :class="{current:index == currentIndex}"
            @click="selectItem(index,$event)"
            :key="index"
          >
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul>
          <li v-for="(item,index) in right" :key="index" class="right-item-hook">
            <!-- 开头那个图片 -->
            <div class="tu1">
              <img :src="item.t1" alt />
            </div>
            <!-- 内容 -->
            <ul>
              <li class="li2">
                <div class="li2_top">{{item.name1}}</div>
                <div class="li2_bot">
                  <div class="lb1">
                    <div>
                      <img :src="item.t2" alt />
                    </div>
                    <div>{{item.n3}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t3" alt />
                    </div>
                    <div>{{item.n4}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t4" alt />
                    </div>
                    <div>{{item.n5}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t5" alt />
                    </div>
                    <div>{{item.n6}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t6" alt />
                    </div>
                    <div>{{item.n7}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t7" alt />
                    </div>
                    <div>{{item.n8}}</div>
                  </div>
                </div>
              </li>
              <li class="li2">
                <div class="li2_top">{{item.name2}}</div>
                <div class="li2_bot">
                  <div class="lb1">
                    <div>
                      <img :src="item.t8" alt />
                    </div>
                    <div>{{item.n9}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t9" alt />
                    </div>
                    <div>{{item.n10}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t10" alt />
                    </div>
                    <div>{{item.n11}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t11" alt />
                    </div>
                    <div>{{item.n12}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t12" alt />
                    </div>
                    <div>{{item.n13}}</div>
                  </div>
                  <div class="lb1">
                    <div>
                      <img :src="item.t13" alt />
                    </div>
                    <div>{{item.n14}}</div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// npm install @better-scroll/core@next --save
// 单独引入js文件
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      left: [
        "有品推荐",
        "家用电器",
        "居家餐厨",
        "电视影音",
        "家具家装",
        "智能家庭",
        "手机电脑",
        "数码周边",
        "日用文创",
        "服装配饰",
        "鞋靴箱包",
        "美妆个护",
        "运动户外"
      ],
      right: [
        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/af1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/bf1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/cf1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/df1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/ef1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/ff1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/gf1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/hf1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/if1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/jf1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/kf1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        },

        {
          content: 6,
          name1: "频道精选",
          name2: "电视",
          n3: "热卖爆款",
          n4: "厨电新品",
          n5: "清凉家电",
          n6: "新品上市",
          n7: "米粉最爱",
          n8: "灯具",
          n9: "小米电视5",
          n10: "Redmi电视",
          n11: "全面屏",
          n12: "43英寸",
          n13: "50英寸",
          n14: "59英寸",
          t1: require("../../assets/images/lf1.png"),
          t2: require("../../assets/images/bf2.png"),
          t3: require("../../assets/images/bf3.png"),
          t4: require("../../assets/images/bf4.png"),
          t5: require("../../assets/images/bf5.png"),
          t6: require("../../assets/images/bf6.png"),
          t7: require("../../assets/images/bf7.png"),
          t8: require("../../assets/images/bf8.png"),
          t9: require("../../assets/images/bf9.png"),
          t10: require("../../assets/images/bf10.png"),
          t11: require("../../assets/images/bf11.png"),
          t12: require("../../assets/images/bf12.png"),
          t13: require("../../assets/images/bf13.png")
        },

        {
          content: 6,
          name1: "为你推荐",
          name2: "精选专区",
          n3: "空调",
          n4: "智能手表",
          n5: "耳机",
          n6: "电视机",
          n7: "行李箱",
          n8: "灯具",
          n9: "吃喝到家",
          n10: "安心出行",
          n11: "装修好物",
          n12: "亲子时光",
          n13: "运动健身",
          n14: "事力湖北",
          t1: require("../../assets/images/mf1.png"),
          t2: require("../../assets/images/af2.png"),
          t3: require("../../assets/images/af3.png"),
          t4: require("../../assets/images/af4.png"),
          t5: require("../../assets/images/af5.png"),
          t6: require("../../assets/images/af6.png"),
          t7: require("../../assets/images/af7.png"),
          t8: require("../../assets/images/af8.png"),
          t9: require("../../assets/images/af9.png"),
          t10: require("../../assets/images/af10.png"),
          t11: require("../../assets/images/af11.png"),
          t12: require("../../assets/images/af12.png"),
          t13: require("../../assets/images/af13.png")
        }
      ],
      listHeight: [], //记录高度
      scrollY: 0
    };
  },
  // props:["left","right"],
  methods: {
    _initScroll() {
      // 左边联动效果
      this.lefts = new BScroll(this.$refs.left, {
        click: true, //拥有触发事件
        probeType: 3 //滚动位置探针效果
      });
      // 右边联动效果
      this.rights = new BScroll(this.$refs.right, {
        probeType: 3 //滚动位置探针效果
      });
      // 获取滚动效果高度
      this.rights.on("scroll", this.onScrollfun);
    },

    onScrollfun(pos) {
    //   console.log(pos.y);
      this.scrollY = Math.abs(Math.round(pos.y)); //滚动条y轴
    },
    // 获取高度
    _getHeight() {
      // 获取每个类对象
      let rightItems = this.$refs.right.getElementsByClassName(
        "right-item-hook"
      );
      let height = 0; //设置默认高度
      this.listHeight.push(height);
      // 循环对象获取各自到顶部高度
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i];
        height += item.clientHeight; //对象高度
        this.listHeight.push(height);
      }
    },
    // 左侧点击效果
    selectItem(index, event) {
      // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
      if (!event._constructed) {
        return;
      } else {
        // 联动效果
        let rightItems = this.$refs.right.getElementsByClassName(
          "right-item-hook"
        );
        // console.log(rightItems);
        
        // let el = rightItems[index+1];//通过下标获取对象
        // // 通过滚动事件指定目标元素
        // this.rights.scrollToElement(el);
        this.rights.scrollToElement(rightItems[index]);

        // this.currentIndex = index; //左侧效果
      }
    }
  },
  // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
  mounted() {
    // 能在虚拟DOM执行完后，在回调方法
    this.$nextTick(() => {
      this._initScroll(); //调用滚动效果
      this._getHeight(); //获取右边列表内容高度
    });
  },
  // 组件销毁前阻止滚动事件
  beforeDestroy() {
    this.rights.off("scroll", this.onScrollfun);
  },
  // 计算属性
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i];
        let height2 = this.listHeight[i + 1];

        // 判断高度之间为当前左选项变化
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          // 左边联动
          let leftItems = this.$refs.left.getElementsByTagName("li");
          let elLI = leftItems[i];
          this.lefts.scrollToElement(elLI);
          return i;
        }
      }
      // 如果没有高度值，默认为0，第一位
      return 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.right-item-hook {
  padding: 9px;
}
.li2 {
  width: 100%;
  height: 240px;
  background-color: #fff;
  margin-top: 10px;
  padding:  10px;
  border-radius: 5px;
}
.li2_top {
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}
.tu1 img {
  border-radius: 5px;
}

.li2_bot {
  width: 100%;
  height: 190px;
  // background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
}
.lb1 {
  width: 33.3332%;
  height: 50%;
  // border-radius: 5px;
}
.lb1 div:nth-child(1) {
  width: 100%;
  height: 80%;
}
.lb1 div:nth-child(2) {
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
}

.auto {
  margin: 0 auto;
  max-width: 420px;
  min-width: 320px;
}
ul {
  list-style: none;
}
.head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.content {
  display: flex;
  position: absolute;
  /* 定位里面不写左右样式，不写高度，自动获取高度 */
  top: 46px;
  bottom: 50px;
  // background-color: #eeeeee;
  width: 100%;
  overflow: hidden;
}
.left {
  flex: 0 0 90px;
  width: 90px;
  background-color: #fff;
}
.left li {
  width: 100%;
  height: 100%;
}
.left li.current {
  width: 90px;
  height: 50px;
  position: relative;
}
.left li.current > span {
  line-height: 24px;
  width: 80px;
  height: 24px;
  background-color: #ef4c33;
  color: #fff;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -40px;
  border-radius: 20px;
}
.left li span {
  display: block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.right {
  flex: 1;
  // background-color: azure;
}
.right>ul>li {
 height: 600px;
line-height: 100px;
  text-align: center;
//   border: 1px solid yellow;
}
</style>

