<template>
  <div class="player">
    <div class="head">
      <van-icon name="arrow-left" @click="$router.back()"/>
      <div class="title">
        <p>{{musicDetails.name}}</p>
        <span>
          {{singer}}
          <van-icon name="arrow" />
        </span>
      </div>
      <van-icon name="share" />
    </div>
    <!-- <div class="pic">
      <img src="../assets/leo.jpg" alt />
    </div>-->
    <div class="play">
      <!--audio标签-->
      <audio :src="musicUrl.url" ref="play" volume duration></audio>

      <!--歌曲信息-->
      <div class="song-info-box">
        <!-- <div class="song-info-txt"><span class="song-name">默</span>-<span class="song-author">那英</span></div> -->
        <div class="poster-box">
          <!-- <img src="https://p2.music.126.net/ZDUo6vF_5ykD6E_08HE1kw==/3385396303317256.jpg" class="music-poster" /> -->
          <img :src="url.picUrl" class="music-poster" />
        </div>
      </div>
      <!--时间进度条-->
      <div class="content-box">
        <div class="left-box played-progress">{{currentTime|buling}}</div>
        <div class="center-box">
          <div class="slider-bar">
            <!-- <div class="slider-progress" :style="{width:progress+'%'}">
              <div class="slider-dot-control"></div>
            </div>-->
            <van-slider v-model="progress" @change="onChange" :value="progress" />
          </div>
        </div>
        <div class="right-box all-progress">{{duration|buling}}</div>
      </div>
      <!--控制按钮-->
      <div class="control-box">
        <span class="prev_bt icon-previous iconfont" title="上一首">
          <van-icon name="arrow-left" />
        </span>
        <span class="play_bt icon-bofang iconfont" title="播放/暂停" @click="play">
          <van-icon name="play-circle-o" v-if="!isPlay" />
          <van-icon name="pause-circle-o" v-if="isPlay" />
        </span>
        <span class="next_bt icon-next iconfont" title="下一首">
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicUrl: [],
      musicDetails: [],
      url: [],
      singer:'',
      isPlay: false,
      currentTime: 0,
      duration: 0,
      progress: 0
    };
  },
  filters: {
    buling(val) {
      return (
        parseInt(val / 60)
          .toString()
          .padStart(2, "0") +
        ":" +
        parseInt(val % 60)
          .toString()
          .padStart(2, "0")
      );
    }
  },
  async mounted() {
    // 获取歌曲url
    let res = await this.$axios(`/song/url?id=${this.$route.query.id}`);

    console.log(res);
    this.musicUrl = res.data.data[0];
    setTimeout(() => {
      this.duration = this.$refs.play.duration;
    }, 1000);

    // 获取歌曲详情
    res = await this.$axios(`/song/detail?ids=${this.$route.query.id}`);
    console.log(res);
    this.musicDetails = res.data.songs[0];
    console.log(this.musicDetails["al"].picUrl);
    this.url = this.musicDetails.al;
    this.singer = this.musicDetails.ar[0].name;
  },
  methods: {
    onChange(progress) {
      this.$refs.play.currentTime = (progress / 100) * this.$refs.play.duration;
      this.currentTime = (progress / 100) * this.$refs.play.duration;
    },
    play() {
      if (this.$refs.play.paused) {
        this.$refs.play.play();
        this.isPlay = true;
        this.currentTime = this.$refs.play.currentTime + 1;
        setInterval(() => {
          this.progress =
            (this.$refs.play.currentTime / this.$refs.play.duration) * 100;
          this.currentTime = this.$refs.play.currentTime;
          if (this.$refs.play.currentTime == this.$refs.play.duration) {
            this.isPlay = false;
          }
        }, 30);
      } else {
        this.$refs.play.pause();
        this.isPlay = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
  span {
    font-size: 12px;
  }
}
.pic {
  img {
    margin: 0 auto;
    display: block;
    border-radius: 1000px;
  }
}
body {
  background-color: #333;
  margin: 0;
}

/*滑动时间的样式*/
.slider-bar {
  height: 4px;
  width: 100%;
  background-color: #6d6d6d;
  border-radius: 2px;
}

.slider-progress {
  position: relative;
  height: 100%;
  width: 0;
  background-color: #ff7471;
  border-radius: 2px;
}

.slider-dot-control {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  left: 100%;
  background-color: #ff7471;
  border: 6px solid #fff;
  top: 50%;
  margin-top: -9px;
  margin-left: -9px;
}

/*滑动时间的样式*/
/*播放时间的样式*/
.played-progress,
.all-progress {
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 0 10px;
  font-size: 14px;
}

.content-box {
  display: flex;
  height: 20px;
  color: #eee;
  margin-top: 70px;
  color: #333;
}

.center-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.left-box {
  width: 100px;
  height: 100%;
  text-align: center;
  font-size: 14px;
}

.right-box {
  width: 100px;
  height: 100%;
  text-align: center;
  font-size: 14px;
}

/*播放时间的样式*/
/*播放控制按钮的样式*/
.control-box {
  color: #ccc;
  display: flex;
  align-items: center;
  height: 40px;
  -webkit-justify-content: center;
  justify-content: center;
  margin-top: 20px;
}
.van-icon {
  color: #666;
  font-weight: 700;
}
.control-box span {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 30px;
  padding: 0 30px;
}

.control-box span.play_bt {
  font-size: 35px;
}

/*播放控制按钮的样式*/
/*歌曲信息的样式*/
.song-info-txt {
  text-align: center;
  font-size: 14px;
  color: #ccc;
  line-height: 40px;
}

/*歌曲信息的样式*/
/*歌曲封面的样式*/
.poster-box img {
  display: block;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin: 0 auto;
}

/*歌曲封面的样式*/
/**************播放动画***************/
@-webkit-keyframes rotateRound {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotateRound {
  0% {
    -moz-transform: rotate(0deg);
  }

  100% {
    -moz-transform: rotate(360deg);
  }
}

@keyframes rotateRound {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.playing {
  -moz-animation: rotateRound 20s linear infinite;
  -webkit-animation: rotateRound 20s linear infinite;
  animation: rotateRound 20s linear infinite;
}
</style>