<template>
  <div>
    <div class="search">
      <div class="search-item">
        <icon type="search"/>
        <span>搜索</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style  scoped>
.search {
  padding: 20rpx;
  background-color: #eb4450;
}
.search .search-item {
  text-align: center;
  background-color: #fff;
}
.search .search-item icon {
  vertical-align: middle;
}
</style>
