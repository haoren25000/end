<template>
    <div>
        <!-- 搜索框 -->
    <div class="header">
      <van-row >
        <van-col span="3">
          <router-link to="/classfiy"><span id="listlogo"></span></router-link>
        </van-col>
        <van-col span="18">
            <van-search
            shape="round"
            background="#e43130"
            placeholder="请输入搜索关键词"
            />
        </van-col>
        <van-col span="3" class="top_login">登录</van-col>
      </van-row>
    </div>
    

    <!-- 轮播图 -->
      <van-swipe class="scrollPicture" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="scrollpic" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    
    <!-- 选项 -->
    <van-swipe  height="180">
      <van-swipe-item>
          <van-grid :column-num="5">
            <van-grid-item class="grid" v-for="item of photos.slice(0,10)" :key="item.id" :icon="item.pic" :text="item.name" />
          </van-grid>
      </van-swipe-item>
      <van-swipe-item>
          <van-grid :column-num="5">
            <van-grid-item class="grid" v-for="item of photos.slice(10,20)" :key="item.id" :icon="item.pic" :text="item.name" />
          </van-grid>
      </van-swipe-item>
    </van-swipe>

      <!-- 中间图片 -->
      <img class="main_img" src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/128002/18/2563/74206/5ec64e83E98712f71/2f27ce69c94e8db3.png.webp" alt="">
    
    <!-- 京东秒杀 -->
    <div class="JD_spike">
      <div class="title_wrap">
        <span>京东秒杀</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <span style="color:#e43130;">更多秒杀</span>
        <i class="seckill-more-icon"></i>
      </div>

      <div class="seckill-store">
        <ul >
          <li v-for="(item,index) in JD_spike" :key="index">
            <img :src="item.imgsrc" alt="">
            <span class="spikeprice">¥&nbsp;{{item.spike_price}}</span>
            <span class="price">¥&nbsp;{{item.price}}</span>
          </li>
        </ul>        
      </div>

    </div>

    <!-- 各种推荐 -->
    <!-- <div class="recommend">
      <van-row>
        <van-col span="12">
          <img src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg" alt="">
        </van-col>
        <van-col span="12">
          <img src="https://m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" alt="">
        </van-col>
      </van-row>
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div> -->

    <!-- 商品列表 -->
    <div class="storelist">
      <h2>为你推荐</h2>
      <van-row>
        <van-col span="12" v-for="(item,index) in storelists" :key="index" @click="$router.push('/main/good')">
          <div class="storeimg">
            <van-image width="100%" height="200" :src="item.imgsrc" />
          </div>
          <div class="storestruction">
            <span>{{item.struction}}</span>
          </div>
          <p class="storeprice">
            <span>¥&nbsp;{{item.price}}</span>
            <van-button type="default">看相似</van-button>
          </p>
        </van-col>
      </van-row>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      active: 0,
      images: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/116756/38/7534/183071/5ec3c28fE5a27d924/12932a4156113071.jpg!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/110084/1/14374/98112/5ea70cd5Eebab6f2c/94a0048dcab062d8.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/120971/15/2284/150899/5ec4a810E85c75b25/b579afaeee96bca6.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://imgcps.jd.com/ling4/100012253152/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c1361ed82acdd181dd72183/b9c25316/cr_1125x445_0_171/s1125x690/q70.jpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/120837/25/2273/133502/5ec3b286Ec58a174f/e8444eee1b50b4e9.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/92728/38/19344/127537/5e9e4ebaE92938500/a233f70ba7fa809d.jpg!cr_1125x445_0_171!q70.jpg.dpg'
      ],
      photos:[
        {
          id:0,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/90907/33/16508/7338/5e7cd12fE18b7f28c/62495feb17944a2c.png",
          name:"京东超市"
        },
        {
          id:1,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png",
          name:"数码电器"
        },
        {
          id:2,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png",
          name:"京东服饰"
        },
        {
          id:3,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/85541/12/16732/5068/5e7d60f9E0ff389b4/de3b049134031e56.png",
          name:"京东生鲜"
        },
        {
          id:4,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png",
          name:"京东到家"
        },
        {
          id:5,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png",
          name:"充值缴费"
        },
        {
          id:6,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86437/25/16675/6585/5e7d62e4E1095d733/d0d685ed0477d268.png",
          name:"9.9元拼"
        },
        {
          id:7,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png",
          name:"领券"
        },
        {
          id:8,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96795/33/16662/4749/5e7d6385Ec31e4b29/f36c778122286405.png",
          name:"赚钱"
        },
        {
          id:9,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97837/22/16281/7606/5e7d6411E0c0a91d6/93e0b359bfdf0239.png",
          name:"PLUS会员"
        },
        // 第二部分
        {
          id:10,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/127726/14/1342/5188/5ebb88feEd234750d/945abaa631eb7059.png.webp",
          name:"京东国际"
        },
        {
          id:11,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/108499/22/10229/4960/5e7cc7e3Ef0042744/e18bb8a5ee24049d.png.webp",
          name:"京东拍卖"
        },
        {
          id:12,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/108831/16/10402/4901/5e7cc891Ec4a1e209/7ec6358526c83cda.png.webp",
          name:"唯品会"
        },
        {
          id:13,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/87813/33/16566/5552/5e7cc8deEddd6bcb5/9afe008178b12b2b.png.webp",
          name:"玩3C"
        },
        {
          id:14,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104372/23/16606/5314/5e7cc980E1b828146/d789952095cd80b9.png.webp",
          name:"沃尔玛"
        },
        {
          id:15,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/103791/30/16676/5170/5e7cca68E0ab1f829/2fa77dd75f56ce9f.png.webp",
          name:"美妆馆"
        },
        {
          id:16,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/87481/10/16552/5320/5e7ccbc7Eb8454450/c8f70349dc66e093.png.webp",
          name:"京东旅行"
        },
        {
          id:17,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/88799/13/16665/5240/5e7d6448E42016d3c/77b343418a8a890d.png.webp",
          name:"拍拍二手"
        },
        {
          id:18,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/107817/13/10442/6306/5e7cccc8E7f9d6c59/9e06aa68ba7ba0f0.png.webp",
          name:"物流查询"
        },
        {
          id:19,
          pic:"https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/98535/20/16481/5760/5e7d646aE9b72c32e/8e063cfb6bad4654.png.webp",
          name:"全部"
        },
      ],
      storelists:[
        {
          imgsrc:"https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/58474/2/9456/444287/5d6cefc2E6fbc75fd/19eeb8adcfd2db8d.jpg!q70.dpg.webp",
          struction:"华为 HUAWEI 畅享10 Plus 超高清全视屏前置悬浮式镜头4800万超广角AI三摄 8GB+128GB天空之境全网通双4G手机",
          price:1599
        },
        {
          imgsrc:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/117596/15/7821/259473/5ec61bc4Edcef4be9/4563064aeb4078b1.jpg!q70.dpg.webp",
          struction:" 靓威（LW） 接待桌椅 洽谈桌椅组合接待桌椅组合圆形会客商务谈判桌椅钢化玻璃小餐桌圆桌套装阳台桌椅 单桌（颜色备注）",
          price:486
        },
        {
          imgsrc:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/89040/36/18883/261470/5e984c42E8e67cc2c/eecf4f5da3ed55ab.jpg!q70.dpg.webp",
          struction:"2020年新茶绿茶明前高山云雾茶叶日照充足浓香型多规格可选 【活动中】 高山云雾【1斤装 赠半斤】实发一斤半 ",
          price:63
        },
        {
          imgsrc:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/80489/5/4010/98183/5d21fcf0E886a6275/370bf15e01b89481.jpg!q70.dpg.webp",
          struction:"连衣裙夏天2019夏季新款流行女装气质修身显瘦包臀裙子 黑色 L 建议100-115斤",
          price:50
        },
        {
          imgsrc:"https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/47193/2/3369/231278/5d11cb39Ef3674059/ba3c0a1d956429e2.jpg!q70.dpg.webp",
          struction:" 华为 HUAWEI nova 5 Pro 前置3200万人像超级夜景4800万AI四摄麒麟980芯片8GB+128GB绮境森林全网通双4G手机 ",
          price:2399
        },
        {
          imgsrc:"https://img12.360buyimg.com/mobilecms/s372x372_jfs/t28906/30/1571661431/255345/986f5fcb/5ce4148aN55586a52.jpg!q70.dpg.webp",
          struction:"荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 幻夜黑 全面屏手机 ",
          price:2299
        },
      ],
      JD_spike:[
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/38972/27/9358/200407/5d0b1479Eaa922601/64c551dce622c892.jpg.dpg",
          spike_price:89,
          price:139
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/120445/16/2734/161408/5ec7744dEbb5c7956/c6f005e3a456923c.jpg.dpg",
          spike_price:1418,
          price:1898
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/113447/17/7894/114087/5ec8cbebE770ddc9c/a6ca1e0dbcd38cc8.jpg.dpg",
          spike_price:1998,
          price:2398
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/125390/24/2427/194680/5ec5d866E471d5f76/ae12706393ce1ec0.jpg.dpg",
          spike_price:299,
          price:699
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/111712/28/7454/187148/5ec38bf1Eb893cba3/e69055f23fb23427.jpg.dpg",
          spike_price:59,
          price:129
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t29245/182/1580102633/199948/d7b26834/5ce4eaaaN88ce43e6.jpg.dpg",
          spike_price:148.9,
          price:219
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/126497/31/2642/172867/5ec793c5E09a03b22/0e004b47c03b56e9.jpg.dpg",
          spike_price:148,
          price:199
        },
        {
          imgsrc:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/124436/10/2050/199562/5ec209bfE93e99154/487149a2e4124d2e.jpg.dpg",
          spike_price:199,
          price:309
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #e43130;
  position:fixed;
  top:0;
  z-index: 999;
  #listlogo{
    margin: 14px 0 0 15px;
    width: 20px;
    height: 18px;
    display: block;
    background: url("../assets/icon02/列表.png") no-repeat;
    background-color: #e43130;
    background-size: 100% 100%;
  }
  .van-search{
    height: 44px;
    line-height: 44px;
  }
  .top_login{
    color: white;
  }
}

.scrollPicture{
  width: 90%;
  height: 136px;
  padding-top: 44px;
  margin: 5px auto;
}
.scrollpic{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.grid{
  cursor: pointer;
}
.main_img{
  width: 100%;
  background-size: 100% 100%;
}

.JD_spike{
  width: 100%;
  .title_wrap{
    width: 100%;
    height: 37.53px;
    position: relative;
    span{
      height: 37.53px;
      line-height: 37.53px;
      margin-left: 10px;
    }
    .seckill-more-icon{
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #ee0a24;
      background: url('../assets/icon01/向右.png');
      background-size: cover;
      position: absolute;
      top: 10px;
      right: 5px;
    }
    .van-count-down{
      width: 55%;
      display: inline-block;
      span{
        height: 20px;
        line-height: 20px;
      }
    }
    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #ee0a24;
    }
    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #ee0a24;
    }
    img{
      width: 73.27px;
      height: 73.27px;
      margin: 0 auto;
    }
  }
  .seckill-store{
    overflow-x:scroll;
      ul{
      width: 694.011px;
      transition: all 0.3 ease 0s;
      transform: translate3d(0px,0px,0px);
      height: 130.29px;
      overflow: hidden;
      li{
        width: 84.29px;
        height: 100%;
        float: left;
        img{
          width: 73.27px;
          height: 73.27px;
          background-size: 100% 100%;
          display: block;
          margin: 0 auto;
        }
        .spikeprice,.price{
          display: block;
          text-align: center;
        }
        .spikeprice{
          margin-top: 8px;
          color: #ee0a24;
        }
        .price{
          color: #999;
          text-decoration: line-through;
        }
      }
    }
  }
} 

.storelist{
  width: 95%;
  margin: 0 auto;
  background: #fff;
  .van-col{
    padding: 0 5px;
  }
  h2{
    width: 100%;
    text-align: center;
    height: 35px;
    line-height: 35px;
    background-image:-webkit-linear-gradient(top right,#0598ec,rgb(3, 211, 248));
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent; 
  }
  .storeimg{
    width: 100%;
    height: 200px;
  }
  .storestruction{
    width: 100%;
    height: 31px;
    span{
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 20px;
      margin-top: 8px;
    }
  }
  .storeprice{
    width: 100%;
    height: 46px;
    display: inline-block;
    span{
      line-height: 46px;
      float: left;
      color: #e43130;
      margin-left: 10px;
    }
    .van-button{
      float: right;
      color: #ccc;
      margin-right: 10px;
    }
  }
}
</style>