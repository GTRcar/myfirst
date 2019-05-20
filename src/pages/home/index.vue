<template>
  <div>
    <!-- 搜索条 -->
    <serach-bar></serach-bar>
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" interval=2000>
      <swiper-item :key="index" v-for="(item,index) in imgUrls">
        <image :src="item" class="slide-image"/>
      </swiper-item>
    </swiper>
    <div class="menu">
      <img :key='index' v-for='(item, index) in menus' :src="item.image_src">
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
   let swiper = await request('home/swiperdata');
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
      let menuRes = await request('home/catitems');
      this.menus = menuRes.data.message;
      // console.log(catitems)
      // console.log(this)
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
      menus:[]
    };
  },
  methods:{
   
  }
};
</script>

<style  scoped>
.slide-image {
  width: 750rpx;
}
.menu {
  display: flex;
  justify-content: space-around;
}
.menu img {
  width: 128rpx;
  height: 140rpx;
}
</style>
