<template>
  <div class="ranking">
    <div class="head">
      <van-nav-bar title="Ranking List" left-arrow @click-left="$router.back()" @click-right="$router.push('/musicPlay')">
        <van-icon name="bar-chart-o" slot="right" />
      </van-nav-bar>
    </div>
    <ul class="ranks">
      <li>
        <div class="img">
          <img src="../assets/leo.jpg" alt />
        </div>
        <ul class="list">
          <li>1.Girls like you <span>Maroon 5</span></li>
          <li>1.Girls like you <span>Maroon 5</span></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head {
  .van-icon {
    color: #000;
    font-size: 20px;
  }
  .van-nav-bar__title {
    font-weight: 700;
  }
}
.ranks {
    padding: 15px;
  > li {
    display: flex;
    > .img {
      flex: 30%;
      margin-right: 10px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .list {
      flex: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
          color: #666;
          font-size: 14px;
      }
    }
  }
}
</style>