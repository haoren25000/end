<template>
  <div>
    <div class="content">
      <!-- 左边 -->
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
      <!-- 右边 -->
      <div class="right" ref="right">
        <ul>
          <li v-for="(item,index) in right" :key="index" class="right-item-hook">
            <h1>{{item.name}}</h1>
            <ul>
              <li v-for="(item,index) in item.content" :key="index">
                <van-row style="text-align:center" :gutter="20">
                  <van-col span="8">
                    <img :src="item.src1" alt />
                    <p>{{item.name1}}</p>
                  </van-col>
                  <van-col span="8">
                    <img :src="item.src2" alt />
                    <p>{{item.name2}}</p>
                  </van-col>
                  <van-col span="8">
                    <img :src="item.src3" alt />
                    <p>{{item.name3}}</p>
                  </van-col>
                </van-row>
                <van-row style="text-align:center" :gutter="20">
                  <van-col span="8">
                    <img :src="item.src4" alt />
                    <p>{{item.name4}}</p>
                  </van-col>
                  <van-col span="8">
                    <img :src="item.src5" alt />
                    <p>{{item.name5}}</p>
                  </van-col>
                  <van-col span="8">
                    <img :src="item.src6" alt />
                    <p>{{item.name6}}</p>
                  </van-col>
                </van-row>
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
      msg: "欢迎来到vue.js学习",
      value: "",
      left: [
        "热门推荐",
        "手机数码",
        "大家电",
        "食品酒水",
        "品质男装",
        "苏宁国际",
        "珠宝首饰",
        "居家生活",
       "运动户外",
        "家居家纺",
        "家装建材",
        "二手优品",
        "苏宁生鲜",
        "流行女装",
        "汽车生活",
        
      
      ],
      right: [
        {
          name: "热门推荐",
          content: [
            {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
        {
          name: "手机数码",
          content: [
            {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
        {
          name: "食品酒水",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
        {
          name: "品质男装",
          content: [
            {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
        {
          name: "苏宁国际",
          content: [
            {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
        {
          name: "珠宝首饰",
          content: [
            {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
        {
          name: "居家生活",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
             {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
            {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
            {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
            {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
         {
          name: "居家生活",
          content: [
             {
              name1: "苹果",
              src1:
                 require("../../assets/images/classify (10).jpg"),
              name2: "华为",
              src2:
                  require("../../assets/images/classify (6).jpg"),
              name3: "小米",
              src3:
                 require("../../assets/images/classify (7).jpg"),
              name4: "oppo",
              src4:
                 require("../../assets/images/classify (8).jpg"),
              name5: "vivo",
              src5:
                 require("../../assets/images/classify (9).jpg"),
              name6: "三星",
              src6:
                 require("../../assets/images/classify (9).jpg"),
            }
          ]
        },
         {
          name: "流行女传",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
        {
          name: "流行女传",
          content: [
             {
              name1: "手机",
              src1:
                require("../../assets/images/classify (3).png"),
              name2: "笔记本",
              src2:
               require("../../assets/images/classify (3).jpg"),
              name3: "平板电脑",
              src3:
                 require("../../assets/images/classify (2).png"),
              name4: "冰箱",
              src4:
                 require("../../assets/images/classify (2).jpg"),
              name5: "电风扇",
              src5:
                 require("../../assets/images/classify (11).jpg"),
              name6: "空调",
              src6:
                 require("../../assets/images/classify (5).jpg"),
            }
          ]
        },
      
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
      //console.log(pos.y);
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
        let el = rightItems[index]; //通过下标获取对象
        // 通过滚动事件指定目标元素
        this.rights.scrollToElement(el);

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
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}

.content {
  display: flex;
  position: absolute;
  /* 定位里面不写左右样式，不写高度，自动获取高度 */
  top: 52px;
  bottom: 50px;
  background-color: #eeeeee;
  width: 100%;
  overflow: hidden;
}
.left {
  flex: 0 0 80px;
  width: 80px;
  background-color: white;
  border-right: 1px solid #efefef;
   border-top: 1px solid #efefef;

}
.left li {
  width: 100%;
  height: 100%;
}
.left li.current {
  background-color: #007aae;
  color: #fff;
  font-weight: bold;
}
.left li span {
  display: block;
  width: 100%;
  height: 49px;
  line-height: 50px;
  text-align: center;
}
.right {
  flex: 1;
 background-color: white;
}
.right li {
  line-height: 50px;
  text-align: left;
 
}

</style>