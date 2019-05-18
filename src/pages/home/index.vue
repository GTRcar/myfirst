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
  // 注册组件
  components:{
    'serach-bar':SearchBar
  },
  data() {
    return {
      // 该属性的作用：显示底部的小圆点
      indicatorDots: true,
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
