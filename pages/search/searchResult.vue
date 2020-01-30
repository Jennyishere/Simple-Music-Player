<template>
  <div class="searchResult">
    <div class="head">
      <van-icon name="arrow-left" @click="$router.back()" />
      <van-search v-model="value" :placeholder="value" shape="round" @search="onSearch"></van-search>
    </div>
        <ul class="list">
            <li v-for="(item, index) in searchSongs" :key="index" @click="$router.push({path:'/player',query:{id:item.id}})">
                <div class="left">
                    <p>{{item.name}}</p>
                    <span>{{item.artists[0].name}}</span>
                </div>
                <div class="right">
                    <van-icon name="play-circle-o" class="video" v-if="item.mvid != 0"/>
                    <van-icon name="weapp-nav" />
                </div>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
            searchSongs: []
        }
    },
  mounted() {
    // 获取传过来的搜索词
        let keyword = this.$route.query.keyword;
    let key = keyword.split(' ');
    if(keyword.indexOf('大家都在搜') != -1) {
    this.value =key[1];

    }else {
        this.value =key[0];
    }
    // console.log(key[0]);
    
    if (this.$route.query) {
      this.$axios.$get(`/search?keywords=${this.$route.query.keyword}`).then(res => {
        console.log(res);
        this.searchSongs = res.result.songs
      });
    }
  },
  methods: {
      onSearch() {
          this.$axios.$get(`/search?keywords=${this.value}`)
          .then(res=> {
              console.log(res);
              this.searchSongs = res.result.songs
          })
      }
  },
    watch: {
       value() {
        if(this.value == '') {
            this.$router.push('/search')
        }
  }
    }
};
</script>

<style lang='less' scoped>

.head {
  display: flex;
  align-items: center;
  padding: 0 10px;
  .van-search {
    flex: 1;
  }
}

.list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #ccc;
       box-sizing: border-box;

    p {
          width: 300/360 * 100vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
    }
    span {
        font-size: 12px;
        color: #666;
    }
    
    .right {
        width: 100px;
        display: flex;
     .video {
         position: absolute;
         right: 50px;
         margin-right: 10px;
     }
    }
}
</style>