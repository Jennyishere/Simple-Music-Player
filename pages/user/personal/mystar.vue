<template>
  <div class="mystar">
    <van-nav-bar title="My Star" left-arrow @click-left="$router.back()">
      <van-icon name="bar-chart-o" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/deep/.van-nav-bar .van-icon{
    color: #333;
    font-size: 20px;
}
/deep/.van-nav-bar__title {

    font-weight: 700;
    font-size: 20px;
}
</style>