<template>
  <div>
    <!-- 搜索条 -->
    <serach-bar></serach-bar>
    <swiper :indicator-dots='indicatorDots'>
    <swiper-item :key="index" v-for="(item,index) in imgUrls">
      <image :src="item" class="slide-image" />
    </swiper-item>
</swiper>
  </div>
</template>

<script>
// 导入组件
import SearchBar from '../../components/search'

export default {
  created() {
    // 调用后台接口，获取轮播数据
    let that = this;
    mpvue.request({
      url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      success: function (res) {
    //  that.imgUrls = res.data.message;
    // 计算属型
    // map方法让里面的每一个元素都调用该方法
    let imgs = res.data.message.map( item => {
      return item.image_src
    })
    that.imgUrls = imgs
  
    // console.log(res)
  }
})
  },
  // 注册组件
  components:{
    'serach-bar':SearchBar
  },
  data() {
    return {
      // 该属性的作用：显示底部的小圆点
      indicatorDots: true,
      autoplay: false,       // 自动播放
       imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    };
  }
};
</script>

<style  scoped>
.slide-image {
  width: 750rpx;
}
</style>
