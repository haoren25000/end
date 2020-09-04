<template>
    <div>
        <header class="jd_header">
            <div class="jd_header_box">
                <a href="javascript:;" class="jd_logo">
                    <span></span>
                </a>
                <form>
                    <span class="icon">
                        <img src="../assets/images/serch.png" alt />
                    </span>
                    <input type="text" placeholder="请输入关键词" @focus="getsearch"/>
                    <!-- <input type="text" placeholder="搜索"> -->
                </form>
                <a href="javascript:void(0)" class="jd_login" @click="userBtn">
                    <van-icon name="user-o" size="26"/>
                </a>
            </div>
        </header>

        <!-- <van-search
            v-model="value"
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
            /> -->

        <!-- 轮播图 -->
        <van-swipe class="my-swipe vanSwipeBanner" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/124071/1/2703/82933/5ec7aa14Ecb0af2c0/e46bd90a0b3cb273.jpg!q70.jpg.dpg" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/122597/18/2916/135105/5ecb7047E856eae9e/436fedc46f203381.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/124187/19/1232/100316/5eba7c6cEe8cab20d/53630b89ae90e00f.jpg!cr_1125x445_0_171!q70.jpg.dpg" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="//imgcps.jd.com/ling4/100013112318/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c134fc882acdd181dcabc1d/eb8c4260/cr_1125x445_0_171/s1125x690/q70.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
                <img src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/115456/40/7331/100669/5ec3a9c6E3dcbadb7/46071c04455c0d5b.jpg!q70.jpg.dpg" alt />
            </van-swipe-item>
        </van-swipe>
        <!-- 轮播图 end -->

        <!-- Swiper
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
            </div>
            Add Pagination
            <div class="swiper-pagination"></div>
            Add Arrows
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div> -->

        <!-- 导航栏 -->
        <van-grid square :column-num="5">
            <!-- <van-grid-item text="文字">
                <van-image :src="navImage[0]" />
                <div style="font-size:12px;margin-top:5px">{{navName[0]}}</div>
            </van-grid-item>-->

            <van-grid-item v-for="(item,index) in nav.navImage" :key="index"
                @click="$router.push('/digital')">
                <van-image :src="nav.navImage[index]" style="width:40px" />
                <div style="font-size:12px;margin-top:5px">{{nav.navName[index]}}</div>
            </van-grid-item>
        </van-grid>
        <!-- 导航栏 end-->

        <!-- 618主会场 -->
        <van-row @click="$router.push('/details')">
            <van-col span="24">
                <img src="//m.360buyimg.com/mobilecms/s750x200_jfs/t1/128495/3/3205/74574/5ecf5ef0E951226c9/06db9704503388ab.png.webp" style="width:100%" alt="">
            </van-col>
        </van-row>
        <!-- 618主会场 end -->

        

        <!-- 掌上秒杀 -->
        <section class="jd_activity">
            <div class="top">
                <div class="l">
                    <!-- <img class="icon" src="../assets/images/seckill-icon.png" alt /> -->
                    <span class="word">掌上秒杀</span>

                    <van-count-down :time="time" style="float:left">
                        <template v-slot="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                    </van-count-down>
                </div>
                <div class="r">
                    <a class="link" href="javascript:;">更多秒杀 &gt;</a>
                </div>
            </div>

            <!--带滑动效果 掌上秒杀 -->
            <div class="swiper-container homeSeckillSwiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide homeSeckillSwiperSlide" 
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 3999</p>
                            <p>¥ 5999</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/95782/16/19586/188673/5ea14734Ea1294273/9356c599c022ca52.jpg.dpg" style="width:80%" alt="">
                            <p>¥ 2999</p>
                            <p>¥ 3198</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/120155/22/2623/43909/5ec68cbcEa3ca2f24/2cbecda1bf5c4b11.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 99</p>
                            <p>¥ 198</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/133004/19/57/148086/5ec7da56E258e511c/b185a679015e9ab4.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 59</p>
                            <p>¥ 99</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/115846/27/6859/292789/5ebe7c18E6ed6348b/5f1b7774c5c61faf.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 99</p>
                            <p>¥ 198</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 2999</p>
                            <p>¥ 3198</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 2999</p>
                            <p>¥ 3198</p>
                        </div>
                    </div>
                    <div class="swiper-slide"
                    @click="$router.push('/details')">
                        <div>
                            <img src="https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/128390/37/2776/147241/5ec9f9ecE1e06fd3d/a4367558173f56f9.jpg.dpg"
                            style="width:80%" alt="">
                            <p>¥ 2999</p>
                            <p>¥ 3198</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>

        </section>

        <!-- 新人9.9/专享 -->
        <section class="jd_newpeo clearfix">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg"
                            alt
                        />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg"
                            alt
                        />
                    </a>
                </li>
            </ul>
        </section>

        <!-- 嘉年华  活动  轮播-->
        <van-swipe class="my-swipe vanSwipeBanner2" :autoplay="3000" indicator-color="transparent">
            <van-swipe-item>
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/132018/4/504/76578/5ece0151E477668f6/0d7e5454fd2bcf94.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/114530/26/8922/70563/5ed4d295E74981c1b/b1273fd7947f57c1.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/126831/5/3119/72321/5ece11baE29ac6004/e16b7b138c68cf9a.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                </ul>
            </van-swipe-item>
            <van-swipe-item>
                <ul  class="clearfix">
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/113586/34/7826/101462/5ec7b804E51ad94ea/fec35f4d11323f30.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/111280/22/7486/74328/5ec2a35bEe37cedbc/7c9a30c52fab9fff.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img
                                src="//m.360buyimg.com/mobilecms/s244x187_jfs/t1/127066/9/2487/71944/5ec67592Ecc891188/1aec658744a7cf95.png!q70.jpg.dpg"
                                alt
                            />
                        </a>
                    </li>
                </ul>
            </van-swipe-item>
        </van-swipe>
        <!-- 嘉年华  活动  轮播 end -->

        <!---------------------->
        <!-- 走心推荐 -->
        <!-- <section class="jd_recommend">
            <div class="top">
                <img
                    src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/118970/4/8049/17143/5ec89eb9E80e7acdf/b0b2232b947db59a.png!q70.jpg.dpg"
                    alt
                />
            </div>
            <ul>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>

                    
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/118105/17/7671/6607/5ec51adcEecc38818/efb859522f035697.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
            </ul>
        </section> -->

        <!----------------------->
        <!-- 精品会场 -->
        <!-- <section class="jd_choiceness">
            <div class="top">
                <img
                    src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/112721/40/8040/17850/5ec89e23E4ddf63cb/4a1488c990869a56.png!q70.jpg.dpg"
                    alt
                />
            </div>
            <ul>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>

                    
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img
                            src="//m.360buyimg.com/mobilecms/s184x242_jfs/t1/126229/25/2343/9161/5ec5331eE3267d774/14032c6a8f9ae628.png!q70.jpg.dpg"
                            class="bg"
                            alt
                        />
                    </a>
                </li>
            </ul>
        </section> -->

        <!-- 商品列表 -->
        <!-- <router-link to="/details">
            <van-card
                price="38.80"
                desc="每日坚果炒货干果进口休闲零食120g/袋"
                title="三只松鼠碧根果"
                thumb="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/132460/7/12/247833/5ec7875eE5d105dca/4ef440d6c9e5fa42.jpg!q80.dpg.webp"
            >
                <template #tags>
                    <van-tag plain type="danger">618</van-tag>
                    <van-tag plain type="danger">京东超市</van-tag>
                </template>
                <template #footer>
                    <van-button size="mini">加入购物车</van-button>
                    <van-button size="mini">购买</van-button>
                </template>
            </van-card>
        </router-link> -->

        <!-- <van-card
            price="8.80"
            desc=" 休闲食品小吃 零食 坚果 葵花籽"
            title="华味亨 山核桃味香瓜子500g/袋"
            thumb="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/73855/33/1996/235125/5d05a200E03034e3d/a2aaad23963b866e.jpg!q80.dpg.webp">
            <template #tags>
                <van-tag plain type="danger">618</van-tag>
                <van-tag plain type="danger">京东超市</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">加入购物车</van-button>
                <van-button size="mini">购买</van-button>
            </template>
        </van-card>

        <van-card
            price="47.90"
            desc="夏威夷果160g/袋 坚果炒货每日坚果干果送开口器 160g"
            title="【满300减200】三只松鼠 休闲零食"
            thumb="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/116543/8/7803/181207/5ec78af7E880bd575/d4450879a6cd87bb.jpg!q80.dpg.webp">
            <template #tags>
                <van-tag plain type="danger">618</van-tag>
                <van-tag plain type="danger">京东超市</van-tag>
            </template>
            <template #footer>
                <van-button size="mini">加入购物车</van-button>
                <van-button size="mini">购买</van-button>
            </template>
        </van-card> -->
        <!-- 商品列表 end -->

        <!-- goodlists 为你推荐 商品 -->
        <div class="goodlists">
            <img style="width: calc(100% - 1rem); width: 100%; opacity: 1;" src="//m.360buyimg.com/mobilecms/s750x80_jfs/t1/120923/17/2694/23804/5ec72f68E2f3e035f/b1d1e4318bc02934.png!q70.jpg.dpg">
            <van-row>
                <van-col span="12" @click="$router.push('/details')">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
                <van-col span="12" @click="$router.push('/details')">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
            <van-row>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/85701/3/3164/116271/5ddcffaeEd7924f35/013d69c48b507982.jpg!q80.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            三星Galaxy Note10+ 5G(SM-N9760)骁龙855 后置四摄 智能S Pen 全网通双卡双待 游戏手机12GB+256GB莫奈彩
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 6999</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
                <van-col span="12">
                    <div style="height:260px" class="content">
                        <img onerror="__reloadResource(this)" src="//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/128089/10/3100/210786/5ecddf92Ebc651dc0/2e13642df18a700f.jpg!q70.dpg.webp" class="j_rec_goods_pic opa1 ll_fadeIn" observing="1" loaded="1" style="width: 176px; height: 176px; opacity: 1;">
                        <h2>
                            <van-tag class="vanTagOne" color="#f2270c" size="small" text-color="#fff">618</van-tag>
                            <van-tag color="#f2270c" size="small" text-color="#fff">京东超市</van-tag>
                            朵唯9Xpro 6G+64/128G 全面屏拍照游戏智能手机渐变玻璃超薄机身 八核学生老人全网通4G  极光白(6G+128G) 京东仓速发
                        </h2>
                        <p>
                            <span class="price"><span class="icon">¥</span> 888</span>
                            <van-button type="default" size="small">看相似</van-button>
                        </p>

                    </div>
                </van-col>
            </van-row>
        </div>
        <!-- goodlists end 为你推荐 商品 -->

        <vantabbar :activevue="0"></vantabbar>
        

    </div>
</template>

<script>
import Swiper from "swiper";
import vantabbar from "../components/public/vantabbar.vue"

export default {
    data() {
        return {
            // time: 30 * 60 * 60 * 1000,
            time: 30 * 60 * 60 * 50,
            nav: {
                navImage: [
                    require("../assets/index/nav/1.webp"),
                    require("../assets/index/nav/2.webp"),
                    require("../assets/index/nav/3.webp"),
                    require("../assets/index/nav/4.webp"),
                    require("../assets/index/nav/5.webp"),
                    require("../assets/index/nav/6.webp"),
                    require("../assets/index/nav/7.webp"),
                    require("../assets/index/nav/8.webp"),
                    require("../assets/index/nav/9.webp"),
                    require("../assets/index/nav/10.webp")
                ],
                navName: [
                    "京东超市",
                    "数码电器",
                    "京东服饰",
                    "京东生鲜",
                    "京东到家",
                    "充值缴费",
                    "9.9元拼",
                    "领券",
                    "赚钱",
                    "PLUS会员"
                ]
            }
        };
    },
    methods:{
        getsearch(){
            //跳转路由
            this.$router.push("/search");
        },
        userBtn(){
            if (this.$store.state.username) {
                    this.$router.push('/myjd');
                } else {
                    this.$router.push('/login');
                    /* this.$router.push({
                        path:'/login',
                        query:{
                            path:"/myjd"
                        }
                    }); */
                }
        }
    },
    mounted(){
        new Swiper('.homeSeckillSwiperContainer', {
                slidesPerView: 4, //显示个数
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
        });
    },
    components:{
        vantabbar
    }
};
</script>

<style lang="scss" scoped>
// 嘉年华轮播
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
}

html , body {
    width: 100%;
}
/* 搜索框 */
.jd_header {
    width: 100%;
    height: 2.5rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: #e43130;
}
.jd_header .jd_header_box {
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;
    height: 2.5rem;
    background-color:rgba(201,35,21 ,0);
    /* 弹性盒子 */
    display: flex;
}
/* 70 / 20 =  3.5 */
.jd_header .jd_header_box .jd_logo {
    display: block;
    width: 3.5rem;
    height: 2.5rem;
    /* background-color: pink; */
}

.jd_header .jd_header_box .jd_logo span  {
    display: block;
    width: 2.8rem;
    height: 1.1rem;
    background-image: url(../assets/images/sprites.png);
    background-position: 0 -5.5rem;
    background-size: 10rem 10rem;
    margin: 0.7rem auto;
}
.jd_header .jd_header_box form {
    flex: auto;
    height:1.5rem;
    align-self: center;
    display: flex;
    background-color:white;
    border-radius: 0.75rem;
}
.jd_header .jd_header_box form .icon{
    width: 1em;
    height:1.5rem;
    line-height: 1.5em;
}
.jd_header .jd_header_box form .icon img{
    width: 1em;
    height: 1em;
    transform: translate(0.5em,0.4em);
}

.jd_header .jd_header_box form input {
    height:1.5rem;
    /* width: 100%; */
    flex: auto;
    display: block;
    border-radius: 0.75rem;
    padding-left: 10px;
    box-sizing: border-box;
    /* margin-top:0.5rem ; */
}

.jd_header .jd_header_box .jd_login {
    width: 2.5rem;
    height: 2.5rem;
    /* background-color: blue; */
    text-align: center;
    line-height: 2.5rem;
    color: white;
    font-size: 16px;
    .van-icon{
        transform: translateY(6px);
    }
}

/* 掌上秒杀  */
.jd_activity {
    width: 95%;
    max-width: 640px;
    min-width: 320px;
    margin: 10px auto;
    /* background-color: #ccc; */
    /* margin: 10px 0; */
    // margin: 8px;
    background-color: white;
}
.jd_activity .top  {
    height: 1.6rem;
    padding:0 0.5rem;
    margin-bottom:0.5rem;
}
.jd_activity .top .l {
    float: left;
}
.jd_activity .top .l .icon {
    float: left;
    height: 1rem;
    margin-top: 0.3rem;
}
.jd_activity .top .l .word {
    float: left;
    font-size: 16px;
    color: red;
    margin: 0 0.3rem;
    height: 1.6rem;
    line-height: 1.6rem;
}
.jd_activity .top .r {
    float: right;
}
.jd_activity .top .r .link {
    color: #f23030;
    font-size: 16px;
}

/* <!-- 新人9.9/专享 --> */
.jd_newpeo{
    width: 100%;
    max-width: 640px;
    min-width: 320px;
}
.jd_newpeo ul li a{
    display: block;
    width: 50%;
    float: left;
}

.jd_newpeo img{
    width: 100%;
}


.goodlists{
    padding: 3px;
    .van-row{
        margin-bottom: 3px;
        .van-col{
            .content{
                background:white;
                h2{
                   text-overflow: -o-ellipsis-lastline;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-line-clamp: 2; //行数需设置
                   line-clamp: 3;
                   -webkit-box-orient: vertical; 
                }
                p{
                    .price{
                        color: #f44f4f;
                        font-size: 20px;
                        font-weight:bolder;
                        .icon{
                            font-size: 14px;
                        }
                    }
                    .van-button{
                        float: right;
                    }
                }
            }
        }
    }
}

.mybottom{
    margin-bottom: 50px;
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

.jd_activity{
    .homeSeckillSwiperContainer{
        .swiper-wrapper{
            padding-bottom: 10px;
            .swiper-slide{
                img{
                    margin: 0px auto;
                }
                p:nth-of-type(1){
                    color: #f2270c;
                    font-size: 14px;
                }
                p:nth-of-type(2){
                    color: #999999;
                    text-decoration:line-through;
                    font-size: 12px;
                }
            }
        }
    }
}

// ---------------
.vanSwipeBanner2{
    width: 100%;
    .van-swipe-item{
        width: 100%;
        ul {
            width: 100%;
            li {
                a {
                    display: block;
                    width: 33%;
                    float: left;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
}

.jd_recommend {
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    .top {
        img {
            width: 100%;
        }
    }
    ul {
        display: flex;
        li {
            flex: 1;
            margin: 0px 3px;
            a {
                display: block;
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
}

.jd_choiceness {
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    .top {
        img {
            width: 100%;
        }
    }
    ul {
        display: flex;
        li {
            flex: 1;
            margin: 0px 3px;
            a {
                display: block;
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
    }
}

// 轮播图
/* .my-swipe .van-swipe-item img{
    width: 100%;
    border-radius: 10px;
} */
.vanSwipeBanner{
    width: 92%;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 10px;
    .van-swipe-item img{
        width: 100%;
        border-radius: 10px;
    }
}

.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
</style>