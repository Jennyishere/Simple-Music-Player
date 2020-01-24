<template>
  <div class="bottomNav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="music" @click="$router.push('/')">Find</van-tabbar-item>
      <van-tabbar-item icon="label" @click="$router.push('/ranking')">Ranking</van-tabbar-item>
      <van-tabbar-item icon="star" @click="$router.push('/user/personal')">Mymusic</van-tabbar-item>
      <van-tabbar-item icon="friends">Mysocial</van-tabbar-item>
      <van-tabbar-item icon="manager" >Mine</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less" scoped>
.bottomNav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #18191d;
  .van-tabbar {
      padding: 5px 0;
  }
  .van-tabbar-item {
      /deep/.van-tabbar-item__icon {
      font-size: 26px;
    }
  }
  .van-tabbar-item--active {
      color: #a3323d;
  }
}
</style>