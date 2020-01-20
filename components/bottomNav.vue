<template>
  <div class="bottomNav">
    <ul>
      <li class="active">
        <van-icon name="music" />Find
      </li>
      <li>
        <van-icon name="video" />video
      </li>
      <li>
        <van-icon name="star" />Mymusic
      </li>
      <li>
        <van-icon name="friends" />Mysocial
      </li>
      <li>
        <van-icon name="manager" />Mine
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bottomNav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      .van-icon {
        font-size: 30px;
        color: #333;
      }
      font-size: 12px;
      color: #333;
      &.active {
        color: #a3323d;
        .van-icon {
        color: #a3323d;

        }
      }
    }
  }
}
</style>