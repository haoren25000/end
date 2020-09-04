<template>
    <div>
        <div class="head">
                <van-nav-bar
                title="分类"
                left-text="返回"
                left-arrow
                @click-left="$router.go(-1)"
                />

        </div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                         <div class="word">{{item.word}}</div>
                            <van-row>
                                <van-col span="8" v-for="(value,num) in  item.listImg" :key="num">
                                   <div class="img">                       
                                            <img :src="value.img" alt="">
                                    </div>
                                        <p>{{value.name}}</p>
                                </van-col>
                        
                            </van-row>
                            
                    </li>
                </ul>
            </div>
        </div>
         <vantab ></vantab>
    </div>
</template>

<script>


    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'
    // 引入底部导航
    import vantab from "../components/public/vantab"
    export default {
            data(){
                return {  
                   
                    msg:'欢迎来到vue.js学习',
                    left:["女装","女鞋","男装","男鞋","内衣","母婴","手机","数码","家电","美妆","箱包","运动","家装"],
                    // right:[
                    // {name:"新品",content:[1,2,3,4,5]},
                    // {name:"众筹",content:[1,2,3,4,5]},
                    // {name:"小米手机",content:[1,2,3,4,5]},
                    // {name:"Redmi",content:[1,2,3,4,5]},
                    // {name:"黑鲨",content:[1,2,3,4,5]},
                    // {name:"5G合约",content:[1,2,3,4,5]}],


                     right:[
                            {word:"女装" ,listImg:[
                                {img:require("../assets/img/c1.jpg"),name:'欧美风'},
                                {img:require("../assets/img/c2.jpg"),name:'文艺风'},
                                {img:require("../assets/img/c3.jpg"),name:'工装风'},
                                {img:require("../assets/img/c4.jpg"),name:'甜美风'},
                                {img:require("../assets/img/c5.jpg"),name:'学院风'},
                                {img:require("../assets/img/c6.jpg"),name:'小香风'},
            

                            ]},
                              {word:"女鞋 " ,listImg:[
                                {img:require("../assets/img/c7.jpg"),name:'玛丽珍'},
                                {img:require("../assets/img/c8.jpg"),name:'色蕾鞋'},
                                {img:require("../assets/img/c9.jpg"),name:'松糕鞋'},
                                {img:require("../assets/img/c10.jpg"),name:'乐福鞋'},
                                {img:require("../assets/img/c11.jpg"),name:'穆勒鞋'},
                                {img:require("../assets/img/c12.jpg"),name:'罗马鞋'},
                                {img:require("../assets/img/c13.jpg"),name:'奶奶鞋'},
                                {img:require("../assets/img/c14.jpg"),name:'绑带鞋'},
                                {img:require("../assets/img/c15.jpg"),name:'草编鞋'},
                               
                            ]},
                             {word:" 男装" ,listImg:[
                                {img:require("../assets/img/c16.jpg"),name:'商场同款'},
                                {img:require("../assets/img/c17.jpg"),name:'大牌上新'},
                                {img:require("../assets/img/c18.jpg"),name:'国际大牌'},
                                {img:require("../assets/img/c19.jpg"),name:'时尚品牌'},
                                {img:require("../assets/img/c20.jpg"),name:'青春流行'},
                                {img:require("../assets/img/c21.jpg"),name:'商务绅士'},
                                {img:require("../assets/img/c22.jpg"),name:'设计潮牌'},
                                {img:require("../assets/img/c23.jpg"),name:'中老年'},
                                {img:require("../assets/img/c24.jpg"),name:'大码'},
                            ]},
                             {word:" 男鞋" ,listImg:[
                                {img:require("../assets/img/c25.jpg"),name:'人字拖'},
                                {img:require("../assets/img/c26.jpg"),name:'一字拖'},
                                {img:require("../assets/img/c27.jpg"),name:'正装鞋'},
                                {img:require("../assets/img/c28.jpg"),name:'商务休闲鞋'},
                                {img:require("../assets/img/c29.jpg"),name:'板鞋'},
                                {img:require("../assets/img/c30.jpg"),name:'帆布鞋'}

                            ]},
                               {word:" 内衣" ,listImg:[
                                {img:require("../assets/img/c31.jpg"),name:'文胸套装'},
                                {img:require("../assets/img/c32.jpg"),name:'聚拢文胸'},
                                {img:require("../assets/img/c33.jpg"),name:'光面文胸'},
                                {img:require("../assets/img/c34.jpg"),name:'上托文胸'},
                                {img:require("../assets/img/c35.jpg"),name:'少女文胸'},
                                {img:require("../assets/img/c36.jpg"),name:'大牌文胸'},
                                {img:require("../assets/img/c37.jpg"),name:'调整文胸'},
                                {img:require("../assets/img/c38.jpg"),name:'大码文胸'},
                                {img:require("../assets/img/c39.jpg"),name:'无钢圈文胸'}

                            ]},
                             {word:" 母婴" ,listImg:[
                                {img:require("../assets/img/c40.jpg"),name:'牛奶粉'},
                                {img:require("../assets/img/c41.jpg"),name:'羊奶粉'},
                                {img:require("../assets/img/c42.jpg"),name:'磨牙棒'},
                                {img:require("../assets/img/c43.jpg"),name:'长粉/米糊'},
                                {img:require("../assets/img/c44.jpg"),name:'果//肉/'},
                                {img:require("../assets/img/c45.jpg"),name:'泥泡芙'},
                                {img:require("../assets/img/c46.jpg"),name:'维生素'},
                                {img:require("../assets/img/c47.jpg"),name:'钙镁锌'},
                                {img:require("../assets/img/c48.jpg"),name:'溶豆'},
                                
                            ]},
                              {word:"手机 " ,listImg:[
                                {img:require("../assets/img/c50.jpg"),name:'iPhone'},
                                {img:require("../assets/img/c51.jpg"),name:'小米'},
                                {img:require("../assets/img/c52.jpg"),name:'荣耀'},
                                {img:require("../assets/img/c53.jpg"),name:'华为'},
                                {img:require("../assets/img/c54.jpg"),name:'OPPO'},
                                {img:require("../assets/img/c55.jpg"),name:'vivo'},
                                {img:require("../assets/img/c56.jpg"),name:'三星'},
                                {img:require("../assets/img/c57.jpg"),name:'魅族'},
                                {img:require("../assets/img/c58.jpg"),name:'诺基亚'},
                                {img:require("../assets/img/c59.jpg"),name:'360'},
                                {img:require("../assets/img/c60.jpg"),name:'努比亚'},
                                {img:require("../assets/img/c61.jpg"),name:'AGM'},
                               
                            ]},
                            {word:"数码 " ,listImg:[
                                {img:require("../assets/img/c62.jpg"),name:'自拍相机'},
                                {img:require("../assets/img/c63.jpg"),name:'数码相机'},
                                {img:require("../assets/img/c64.jpg"),name:'微单'},
                                {img:require("../assets/img/c65.jpg"),name:'单反'},
                                {img:require("../assets/img/c66.jpg"),name:'镜头'},
                                {img:require("../assets/img/c67.jpg"),name:'拍立得'},
                                {img:require("../assets/img/c68.jpg"),name:'摄像机'},
                                {img:require("../assets/img/c69.jpg"),name:'佳能'},
                                {img:require("../assets/img/c70.jpg"),name:'尼康'},
                                {img:require("../assets/img/c71.jpg"),name:'卡西欧'},
                                {img:require("../assets/img/c72.jpg"),name:'索尼'},
                                {img:require("../assets/img/c73.jpg"),name:'相机配件'},
                               
                            ]},
                             {word:"家电 " ,listImg:[
                                {img:require("../assets/img/c74.jpg"),name:'洗衣机'},
                                {img:require("../assets/img/c75.jpg"),name:'冰箱'},
                                {img:require("../assets/img/c76.jpg"),name:'空调'},
                                {img:require("../assets/img/c77.jpg"),name:'吸尘器'},
                                {img:require("../assets/img/c78.jpg"),name:'电视'},
                                {img:require("../assets/img/c79.jpg"),name:'电饭煲'},
                               
                            ]},
                            {word:"美妆 " ,listImg:[
                                {img:require("../assets/img/c80.jpg"),name:'官方直售'},
                                {img:require("../assets/img/c81.jpg"),name:'护肤套装'},
                                {img:require("../assets/img/c82.jpg"),name:'面膜'},
                                {img:require("../assets/img/c83.jpg"),name:'乳液面霜'},
                                {img:require("../assets/img/c84.jpg"),name:'眼部护理'},
                                {img:require("../assets/img/c85.jpg"),name:'洁面'},
                                {img:require("../assets/img/c86.jpg"),name:'面部精华'},
                                {img:require("../assets/img/c87.jpg"),name:'T区护理'},
                                {img:require("../assets/img/c88.jpg"),name:'卸妆'},
                                {img:require("../assets/img/c89.jpg"),name:'唇部护理'},
                                {img:require("../assets/img/c90.jpg"),name:'去角质'},
                                {img:require("../assets/img/c91.jpg"),name:'防晒'},
                               
                            ]},
                            {word:"箱包 " ,listImg:[
                                {img:require("../assets/img/c92.jpg"),name:'单肩包'},
                                {img:require("../assets/img/c93.jpg"),name:'手提包'},
                                {img:require("../assets/img/c94.jpg"),name:'斜挎包'},
                                {img:require("../assets/img/c95.jpg"),name:'双肩包'},
                                {img:require("../assets/img/c96.jpg"),name:'真皮包'},
                                {img:require("../assets/img/c97.jpg"),name:'帆布包'},
                                {img:require("../assets/img/c98.jpg"),name:'PU包'},
                                {img:require("../assets/img/c99.jpg"),name:'链条包'},
                                {img:require("../assets/img/c104.jpg"),name:'铆钉包'},
                                {img:require("../assets/img/c101.jpg"),name:'饺子包'},
                                {img:require("../assets/img/c102.jpg"),name:'杀手包'},
                                {img:require("../assets/img/c103.jpg"),name:'菱格包'},
                               
                            ]},
                            {word:"运动 " ,listImg:[
                                {img:require("../assets/img/z1.jpg"),name:'跑步机'},
                                {img:require("../assets/img/z2.jpg"),name:'踏步机'},
                                {img:require("../assets/img/z3.jpg"),name:'游泳运动'}, 
                                {img:require("../assets/img/z4.jpg"),name:'轮滑运动'},       
                                {img:require("../assets/img/z5.jpg"),name:'瑜伽舞蹈'},
                                {img:require("../assets/img/z6.jpg"),name:'羽毛球'},
                                {img:require("../assets/img/z7.jpg"),name:'高尔夫'},
                                {img:require("../assets/img/z8.jpg"),name:'篮球'},
                                {img:require("../assets/img/z9.jpg"),name:'足球'},
                                {img:require("../assets/img/z10.jpg"),name:'网球'},
                                {img:require("../assets/img/z11.jpg"),name:'乒乓球'},
                                {img:require("../assets/img/z12.jpg"),name:'台球'},
                                {img:require("../assets/img/z13.jpg"),name:'跆攀道/武术'},
                             
                               
                            ]},
                            {word:"家装 " ,listImg:[
                                {img:require("../assets/img/z20.jpg"),name:'现代吸顶灯'},
                                {img:require("../assets/img/z21.jpg"),name:'水晶吸顶灯'},
                                {img:require("../assets/img/z22.jpg"),name:'欧式吊灯'},
                                {img:require("../assets/img/z23.jpg"),name:'美式吊灯'},
                                {img:require("../assets/img/z24.jpg"),name:'玻璃吊灯'},
                                {img:require("../assets/img/z25.jpg"),name:'筒灯'},
                                {img:require("../assets/img/z26.jpg"),name:'射灯'},
                                {img:require("../assets/img/z27.jpg"),name:'阅读台灯'},
                                {img:require("../assets/img/z28.jpg"),name:'小夜灯'}, 
                                {img:require("../assets/img/z29.jpg"),name:'装饰台灯'},
                                {img:require("../assets/img/z30.jpg"),name:'壁灯'},
                                {img:require("../assets/img/z31.jpg"),name:'LED灯泡'},
                                {img:require("../assets/img/z32.jpg"),name:'杀菌灯'},
                                {img:require("../assets/img/z33.jpg"),name:'麻将灯'},
                                {img:require("../assets/img/z34.jpg"),name:'马桶'},
                                {img:require("../assets/img/z35.jpg"),name:'花洒'},
                                {img:require("../assets/img/z36.jpg"),name:'淋浴房'},
                               
                            ]},

                           
                        ],
                        // {word:"女鞋 " ,listImg:[
                        //         {img:require("../assets/img/c7.jpg"),name:'玛丽珍'},
                        //         {img:require("../assets/img/c8.jpg"),name:'色蕾鞋'},
                        //         {img:require("../assets/img/c9.jpg"),name:'松糕鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'乐福鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'穆勒鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'罗马鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'奶奶鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'绑带鞋'},
                        //         {img:require("../assets/img/c1.jpg"),name:'草编鞋'},
                               
                        //     ]},
                    listHeight:[],//记录高度
                    scrollY:0,
                  
                }
            },
            // props:["left","right"],
            methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        probeType:3 //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    console.log(pos.y);
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                 
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }   
                 
                    console.log(this.listHeight)
                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                       console.log(index)
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                       
                        this.rights.scrollToElement(el);
                       
                        // this.currentIndex = index; //左侧效果
                    }
                    
                }   
            },
            created(){
                 this.$store.state.active=1
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY <height2)){
                        console.log(height,height2)
                          
                            console.log(this.scrollY )
                      
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
            },
         components:{
            vantab
        },  
    }
    
</script>
<style lang="scss" scoped>
        ul{
            list-style: none;
        }
        .head{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            background-color: #eeeeee;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            background-color: #f7f7f7;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            background-color: #ffffff;
            color:#ff0036;
            font-weight: bold;
            border-left: 2px solid #ff0036;
            
        }
        .left li span{
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .right{
            flex:1;
            background-color: #fff;
        }
        .right li{
            line-height: 30px;
            text-align: center;
            padding:10px ;
            overflow: auto;
            .van-col{
                text-align: center;
                .img{
                    width: 60px;
                    height:60px;
                    overflow: hidden;
                    margin-left: 15px;
                
                
                }
            }
            .word{
                width: 100%;
                font-size: 16px;
                text-align: center;
                margin-bottom: 12px;
            }
            .word::after{
                content:'';
                width: 30px;
                height: 1px;
                background-color: #ccc;
                display: inline-block;
                vertical-align: middle;
            }
            .word::before{
                content:'';
                width: 30px;
                height: 1px;
                background-color: #ccc;
                display: inline-block;
                vertical-align: middle;
            }
          
           
        
        }    
</style>