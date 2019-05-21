<template>
  <div>
    <!-- 搜索条 -->
    <serach-bar></serach-bar>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" interval="2000">
      <swiper-item :key="index" v-for="(item,index) in imgUrls">
        <image :src="item" class="slide-image"/>
      </swiper-item>
    </swiper>
    <!-- 菜单导航 -->
    <div class="menu">
      <img :key="index" v-for="(item, index) in menus" :src="item.image_src">
    </div>
    <!-- 商品列表布局 -->
    <div :key='index' v-for='(item, index) in getImgs' class="floor">
      <div class="floor-title">
        <img :src="item.floor_title.image_src">
      </div>
      <div class="floor-content">
        <div class="left">
          <!-- <img :src="item.product_list[0].image_src"> -->
          <img :src="item.leftImg">
        </div>
        <div class="right">
          <!-- <img v-if='i > 0' :key='i' v-for='(img, i) in item.product_list' :src="img.image_src"> -->
          <img :key='i' v-for='(img, i) in item.product_list' :src="img.image_src">
        </div>
      </div>
    </div>
    <!-- 回到顶部 -->
    <div @click='toTop' v-if='isShow' class="to-top">
      ︿
      <p>顶部</p>
    </div>
  </div>
</template>
<script>
// 导入组件
import SearchBar from "../../components/search";
import request from "../../utils/request";
export default {
  async created() {
    // 调用后台接口，获取轮播数据
    // let that = this;
    // mpvue.request({
    //   url: "https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata",
    //   success: function(res) {
    //     //  that.imgUrls = res.data.message;
    //     // 计算属型
    //     // map方法让里面的每一个元素都调用该方法
    //     let imgs = res.data.message.map(item => {
    //       return item.image_src;
    //     });
    //     that.imgUrls = imgs;
    //     // console.log(res)
    //   }
    // });

    //  request('home/swiperdata')
    //     .then(res => {
    //       // console.log(res);
    //       that.imgUrls = res.data.message.map(item => {
    //         return that.imgUrls = item.image_src
    //       });
    //         // console.log(that.imgUrls)
    //     });
    let swiper = await request("home/swiperdata");
    let imgs = swiper.data.message.map(item => {
      return item.image_src;
    });
    this.imgUrls = imgs;
    // 调用菜单接口
    // mpvue.request({
    //   // 接口地址
    //   url:'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
    //   success:function(res){
    //     // console.log(res)
    //     that.imgUrls = res.data.message
    //   }
    // })
    //  request('home/catitems')
    //   .then(res => {
    //     console.log(res);
    //     that.menus = res.data.message.map(item => {
    //       return that.menus = item.image_src
    //     });
    //     console.log(that.menus)
    //   });
    let menuRes = await request("home/catitems");
    this.menus = menuRes.data.message;
    // console.log(catitems)
    // console.log(this)
    // 获取楼层数据
    let floorRes = await request('home/floordata');
    // console.log(floorRes);
    this.floors = floorRes.data.message;
   
  },
  // 注册组件
  components: {
    "serach-bar": SearchBar
  },
  data() {
    return {
      // 该属性的作用：显示底部的小圆点
      indicatorDots: true,
      autoplay: true,
      imgUrls: [],
      menus: [],
      floors:[],
      isShow:''
    };
  },
  methods: {
    toTop () {
      // 控制页面回到顶部
      mpvue.pageScrollTo({
        scrollTop: 0
      });
    },
  },
  // 页面滚动事件
    onPageScroll (event) {
     this.isShow = event.scrollTop > 50
    },
  // 计算属性
  computed: {
    getImgs () {
      // 加工楼层数据:必须最后返回加工之后的结果
      // 计算属性依赖于data中的数据
      return this.floors.map(item => {
        // 过滤出图片的后四项数据
        let imgs = item.product_list.filter((img, index)=>{
          return index > 0
        });
        // 添加一条数据保存左侧图片
        item.leftImg = item.product_list[0].image_src;
        // 覆盖默认的5张图片
        item.product_list = imgs;
        // 把加工之后的数据返回
        return item;
      });
    }
  },

};
</script>

<style  scoped lang='scss'>
@import 'main.scss';
</style>
