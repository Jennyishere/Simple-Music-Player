<template>
  <div class="personal">
    <div
      class="head"
      v-if="isLogin==true"
      :style="'background:url('+user.profile.backgroundUrl+')'"
    >
      <div class="left">
        <h2>{{user.profile.nickname}}</h2>
        <div class="like">
          <span>
            fens
            <em>{{user.profile.followeds}}</em>
          </span>
          <span>
            follows
            <em>{{user.profile.follows}}</em>
          </span>
        </div>
      </div>
      <div class="right">
        <img :src="user.profile.avatarUrl" alt />
      </div>
    </div>
    <div class="head unlogin" v-else-if="isLogin==false">
      <div class="left">
        <h2>登录享多端同步</h2>
        <div class="login">
          <span @click="$router.push('/user/login')">立即登录</span>
        </div>
      </div>
      <div class="right">
        <img src="../../assets/leo.jpg" alt />
      </div>
    </div>
    <div class="collection">
      <div class="box">
        <h2>My Collection</h2>
        <ul>
          <li>
            <van-icon name="music" />
            <span>Single</span>
          </li>
          <li>
            <van-icon name="send-gift-o" />
            <span>Sheet</span>
          </li>
          <li>
            <van-icon name="gem" />
            <span>Musician</span>
          </li>
          <li>
            <van-icon name="bullhorn-o" />
            <span>Activity</span>
          </li>
          <li>
            <van-icon name="video-o" />
            <span>Video</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mybags">
      <van-cell title="My Work" icon="column">
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
      <van-cell title="Wallet" icon="card">
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
      <van-cell title="My Order" icon="bill">
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
      <van-cell title="Apply Musician" icon="star">
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
      <van-cell title="Settings" icon="setting">
        <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
      </van-cell>
    </div>
    <!-- 底部导航栏 -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from "@/components/bottomNav";

export default {
  components: {
    BottomNav
  },
  data() {
    return {
      isLogin: false,
      user: {}
    };
  },
  mounted() {
    // 看用户是否处于登录状态
    let token = localStorage.getItem("music_token");
    if (token) {
      this.isLogin = true;
      // 并把本地的users渲染出来
      this.user = JSON.parse(localStorage.getItem("users"));
      console.log(this.user);
    } else {
      this.isLogin = false;
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  height: 200px;
  background-color: #2d2d2d;
  color: #fefefe;
  .right {
    width: 60/360 * 100vw;
    height: 60/360 * 100vw;
    border: 1px solid #fff;
    border-radius: 100px;
  }
  .left {
    h2 {
      margin-bottom: 20px;
    }
    span {
      color: #a3a3a3;
    }
    em {
      padding: 5px;
      font-weight: 700;
      color: #fff;
    }
  }
  img {
    width: 100%;
    border-radius: 100px;
  }
}
.unlogin {
  h2 {
    font-weight: 400;
    font-size: 20px;
  }
  .login {
    span {
      padding: 5px 10px;
      border-radius: 20px;
      border: 1px solid #ccc;
    }
  }
}
.collection {
  position: relative;
}
.box {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: -50px;
  width: 80%;
  // border: 1px solid #000;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  ul {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        padding: 10px;
        font-size: 12px;
      }
      .van-icon {
        color: #ea6368;
        font-size: 20px;
      }
    }
  }
}
.mybags {
  margin-top: 100/360 * 100vw;
}
</style>