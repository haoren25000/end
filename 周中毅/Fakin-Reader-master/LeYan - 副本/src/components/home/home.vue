<template>
  <div>
    <m-header></m-header>

    <div class="home">
      <div class="banner">
        <swipe :auto="4000">
          <swipe-item v-for="(item,index) in banner" :key="index">
            <img :src="item" alt="banner" class="banner-item" />
          </swipe-item>
        </swipe>
      </div>
      <div class="search">
        <div class="search-con">
          <input type="text" :placeholder="placeholder" class="input" v-model="search" />
        </div>
        <div class="search-btn" @click="goSearch()">
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div class="books" v-show="maleList.length">
        <h4 class="title">
          男生最爱
          <i class="tip"></i>
        </h4>
        <div class="book-list">
          <book-list v-for="book in maleList" :book="book" :key="book._id" :home="home"></book-list>
        </div>
        <div class="see-more" @click="goMaleList" v-show="maleList.length">查看更多></div>
      </div>
      <div class="books" v-show="femaleList.length">
        <h4 class="title">
          女生最爱
          <i class="tip"></i>
        </h4>
        <div class="book-list">
          <book-list v-for="book in femaleList" :book="book" :key="book._id" :home="home"></book-list>
        </div>
        <div class="see-more" @click="goMaleList">查看更多></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
import BookList from "common/book-list";
import { rank } from "../../api/api";
import { Indicator } from "mint-ui";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      banner: [
        "https://plf-new.zhuishushenqi.com/management/images/20200717/04841fc0b2254b7585f6d3d6c54e186d.jpg",
        "https://plf-new.zhuishushenqi.com/management/images/20200724/55ce222d6e36467d8cb29486aec5f3d1.jpg",
        "https://plf-new.zhuishushenqi.com/management/images/20200717/4fa0c1d24edb421e88b4a1a1f7cc6506.jpg",
        "https://plf-new.zhuishushenqi.com/management/images/20200717/800183ba3eaf4e72854750232f7d2256.jpg",
      ],
      maleList: [],
      femaleList: [],
      search: "",
      placeholder: "无敌血脉",
      home: true,
    };
  },

  created() {
    this.getBookBill();
  },
  methods: {
    getBookBill() {
      Indicator.open("加载中");
      rank("54d42d92321052167dfb75e3").then(
        (res) => {
          if (res.data.ok) {
            this.maleList = this._unEscape(
              this.normalizeBooks(res.data.ranking.books.slice(0, 5))
            );
            Indicator.close();
          }
        },
        (error) => {
          Indicator.close();
          Indicator.open("网络错误");
          setTimeout(() => {
            Indicator.close();
          }, 1500);
        }
      );
      rank("54d43437d47d13ff21cad58b").then(
        (res) => {
          if (res.data.ok) {
            this.femaleList = this._unEscape(
              this.normalizeBooks(res.data.ranking.books.slice(0, 5))
            );
            Indicator.close();
          }
        },
        (error) => {
          Indicator.close();
          Indicator.open("网络错误");
          setTimeout(() => {
            Indicator.close();
          }, 1500);
        }
      );
    },
    _unEscape(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].cover = unescape(arr[i].cover);
        arr[i].cover = arr[i].cover.replace("/agent/", "");
      }
      return arr;
    },
    goMaleList() {
      this.$router.push({
        path: "/rank",
      });
    },
    goSearch() {
      if (!this.search) {
        this.$router.push({
          path: "/search",
          query: {
            val: this.placeholder,
          },
        });
        this.setSearch(this.placeholder);
      } else {
        this.$router.push({
          path: "/search",
          query: {
            val: this.search,
          },
        });
        this.setSearch(this.search);
      }
    },
    ...mapMutations({
      setSearch: "SET_SEARCH",
    }),
  },
  components: {
    BookList,
  },
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.banner {
  width: 100%;
  height: 300px;

  .banner-item {
    width: 100%;
    height: 100%;
  }
}

.search {
  padding: 15px 18px;
  position: relative;

  .search-con {
    border: 1px solid #ffffff; /* no */
    overflow: hidden;

    .input {
      line-height: 50px;
      padding: 0 10px;
      width: 100%;
      box-sizing: border-box;
      outline: none;
    }
  }

  .search-btn {
    position: absolute;
    right: 18px;
    top: 15px;
    width: 1.5rem;
    height: 50px;
    background-color: #070707;
    color: #fff;
    border: 1px solid #070707;
    line-height: 50px;
    text-align: center;
  }
}

.books {
  border-bottom: 1px solid #f5f5f5; /* no */

  .title {
    display: block;
    position: relative;
    padding: 0 18px;
    font-size: 14px; /* no */
    line-height: 35px; /* no */

    .tip {
      position: absolute;
      width: 2px; /* no */
      height: 30px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: #cdcdcd;
    }
  }

  .book-list {
    .book-item {
      display: flex;
      padding: 18px;
      height: 160px;
      border-bottom: 1px solid #f5f5f5;
    }

    /* no */
    &:last-child {
      border-bottom: none;
    }

    .cover {
      flex: 0 0 120px;
      height: 2rem;
      margin-right: 10px;
      overflow: hidden;
      background: url('../../assets/images/default.jpg') no-repeat;
      background-position: 50%;
      background-size: 100%;

      img {
        max-width: 100%;
      }
    }

    .item-txt {
      flex: 1;
      height: 2rem;
      width: 100%;
      overflow: hidden;

      .name {
        font-weight: 400;
        font-size: 14px; /* no */
        line-height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      p {
        line-height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      .desc, .author {
        color: #999;
      }

      .cat {
        color: #666;
      }

      .c-rq {
        color: red;
      }
    }
  }

  .see-more {
    line-height: 50px;
    text-align: center;
    color: red;
    margin: 0 18px;
    padding: 20px 0;
  }
}
</style>
