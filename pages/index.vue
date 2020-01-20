<template>
  <div class="index">
    <!-- 头部搜索部分 -->
    <div class="head" @click="$router.push('/search')">
      <div class="headbox">
        <van-icon name="search" class="searchIcon" />Ed Sherren
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="#ccc">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.pic" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 导航栏 -->
    <div class="navbar">
      <ul>
        <li>
          <van-icon name="send-gift-o" />
          <span>Recommend</span>
        </li>
        <li>
          <van-icon name="music-o" />
          <span>Sheel</span>
        </li>
        <li>
          <van-icon name="video-o" />
          <span>Live</span>
        </li>
        <li>
          <van-icon name="label-o" />
          <span>Ranking</span>
        </li>
      </ul>
    </div>
    <!-- 分类栏 -->
    <div class="classify">
      <div class="classifyhead">
        <h3>Classify</h3>
        <span>
          More Views
          <van-icon name="arrow" />
        </span>
      </div>
      <ul>
        <li v-for="(image, index) in images" :key="index">
          <img v-lazy="image.pic" />
          <span>rock</span>
        </li>
      </ul>
    </div>
    <!-- 底部导航栏 -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '@/components/bottomNav'
import {Banner} from '@/apis/music'
export default {
  // 注册
  components: {
    BottomNav
  },
  data() {
    return {
      // 轮播图数据
      images: [
       
      ]
    };
  },
  // 获取banner的图片
   mounted() {
   this.$axios.$get('/banner?type=2')
   .then(res=> {
     console.log(res);
     this.images = res.banners
    //  console.log(this.images);
     
   })
    
  }
};
</script>

<style lang="less" scoped>
.head {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  .headbox {
    width: 100%;
    height: 30px;
    border-radius: 220px;
    background-color: #f0f1f3;
    line-height: 30px;
    font-size: 14px;
    color: #666;
    .searchIcon {
      padding: 0 10px;
      font-size: 18px;
      vertical-align: middle;
    }
  }
}
.banner {
  padding: 0 10px;
  img {
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    height: 150px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  }
}
.navbar {
  padding: 10px;
  ul {
    display: flex;
    // font-size: 18px;
    align-items: center;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .van-icon {
      display: block;
      color: #a3323d;
      font-weight: 500;
      font-size: 40px;
    }
  }
}
.classify {
  padding: 10px;
  .classifyhead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    span {
      color: #666;
      font-size: 12px;
      .van-icon {
        vertical-align: middle;
      }
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #000;
  }
  ul {
    display: flex;
    li {
      width: 35%;
      margin-right: 10px;
      position: relative;
    }
    span {
      position: absolute;
      bottom: 5px;
      left: 5px;
      padding: 0 10px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50px;
    }
  }
}
</style>