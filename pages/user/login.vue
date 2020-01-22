<template>
  <div class="login">
    <div class="head" @click="$router.back()">
      <van-icon name="arrow-left" />
    </div>
    <div class="welcome">
      <h2>
        <em>Welcome to the</em>
      </h2>
      <h4>Music Enthusiast Community</h4>
    </div>
    <div class="form">
      <div class="username">
        <van-field
          v-model="users.phone"
          left-icon="graphic"
          placeholder="Phone Number"
        />
      </div>
      <div class="password">
        <van-field v-model="users.password" left-icon="lock" placeholder="Password" type="password"/>
      </div>
    </div>
    <div class="btn" @click="login">
      <span>LOGIN IN</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        phone:'15202041310',
        password:'z123456'
      }
    }
  },
  methods: {
    login() {
      // console.log(123);
      this.$axios(`/login/cellphone?phone=${this.users.phone}&password=${this.users.password}`)
      .then(res=> {
        console.log(res);
        if (res.data.code == 200) {
          console.log(123);
          localStorage.setItem('music_token',res.data.token)
          this.$router.push('/')
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  padding: 20px;
  .head {
    height: 120px;
    .van-icon {
      font-size: 30px;
    }
  }
}
.welcome {
  em {
    font-style: italic;
    font-size: 40px;
  }
  h4 {
    margin-top: 10px;
    color: #666;
    font-size: 20px;
  }
}
.form {
  > div {
    padding: 5px 20px;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin: 20px 0;
    /deep/.van-field__left-icon .van-icon {
      font-size: 30px;
      color: #666;
    }
  }
}
.btn {
  background-color: #3b3b3b;
  color: #fff;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-shadow: 2px 4px 5px rgba(0,0,0,0.3);
  border-radius: 50px;
  font-size: 20px;
}
</style>