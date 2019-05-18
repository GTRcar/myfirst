<template>
  <div>
    <!-- 搜索条 -->
    <serach-bar></serach-bar>
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
    return {};
  }
};
</script>

<style  scoped>

</style>
