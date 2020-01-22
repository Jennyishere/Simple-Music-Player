<template>
  <div class="search">
    <div class="head">
      <van-field v-model="value1" left-icon="search" placeholder="big Jet Plane" />
      <span @click="$router.push('/')">取消</span>
      <van-icon name="manager-o" />
    </div>
    <div class="searchHistory">
      <div class="historyhead">
        <h4>搜索历史</h4>
        <van-icon name="delete" />
      </div>
      <div class="histories">
        <span>我们的歌</span>
      </div>
    </div>
    <div class="hotSearch">
      <h4>热搜榜</h4>
      <ul>
        <li>
          <span>1</span>
          <div class="hot">
            <p>
              numb
              <span></span>
            </p>
            <em>前奏好燃啊啊啊啊啊啊啊啊啊啊啊啊</em>
          </div>
        </li>
        <li>
          <span>2</span>
          <div class="hot">
            <p>
              这个年纪
              <span></span>
            </p>
          </div>
        </li>
        <li>
          <span>3</span>
          <div class="hot">
            <p>
              这个年纪hahah
              <span></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部导航栏 -->
    <BottomNav />
  </div>
</template>

<script>
import BottomNav from "@/components/bottomNav";

export default {};
</script>

<style lang="less" scoped>
.search {
  padding: 10px;
  // background-color: #2e2e2e;
  // color: #fff;
}
.head {
  display: flex;
  line-height: 44px;
  /deep/.van-cell {
    border-radius: 50px;
    background-color: #2e2e2e;
  }
  /deep/.van-icon-search {
    color: #fff;
  }
  span {
    width: 60px;
    font-size: 16px;
    padding-left: 10px;
  }
  .van-icon {
    line-height: 44px;
    padding: 0 10px;
    font-size: 20px;
  }
}
.searchHistory {
  margin-top: 20px;
  .historyhead {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 20px 0;
    .van-icon {
      font-size: 20px;
    }
    h4 {
      font-weight: 400;
    }
  }
  .histories {
    span {
      padding: 5px 10px;
      border-radius: 20px;
      background-color: #2e2e2e;
      color: #838485;
    }
  }
}
.hotSearch {
  margin-top: 40px;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      flex: 50%;
      padding: 5px;
      box-sizing: border-box;
      > span {
        padding: 5px;
      }
      .hot {
        em {
          display: block;
           width:120/360*100vw;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>