<template>
  <div class="search">
    <div class="head">
      <form class="form">
      <van-search
        v-model="searchWord"
        :placeholder="searchWord"
        show-action
        @search="onSearch"
        @cancel="$router.push('/')"
      />
      <van-icon name="manager-o" />
      </form>
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
        <li v-for="(item,index) in hotSearch" :key="index">
          <span>{{index+1}}</span>
          <div class="hot">
            <p>
              {{item.searchWord}}
              <img :src="item.iconUrl" />
            </p>
            <em>{{item.content}}</em>
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

export default {
  data() {
    return {
      searchWord: "hahahhah",
      hotSearch: [],
      historyList: []
    };
  },
  mounted() {
    // 获取热搜榜
    this.$axios.$get("/search/hot/detail").then(res => {
      // console.log(res);
      this.hotSearch = res.data;
    });

    // 把本地的搜索历史读出来
    this.historyList = JSON.parse(localStorage.getItem("history") || "[]");

    // 获取默认搜索词
    this.$axios.$get("/search/default").then(res => {
      // console.log(res);
      this.searchWord = res.data.showKeyword;
    });
  },
  methods: {
    onSearch() {
      console.log(this.placeholder);
       this.$axios.$get(`/search?keywords=${this.searchWord}`).then(res => {
        console.log(res);
      });
        this.$router.push({path:'/search/searchResult',query:{keyword:this.searchWord}})
     
    }
  }
};
</script>

<style lang="less" scoped>

.search {
  padding: 10px;
  // background-color: #2e2e2e;
  color: #3e3e3e;
}
.head {
  line-height: 44px;
  .form {
    display: flex;
    justify-content: space-between;
    /deep/.van-search{
      flex: 1;
      padding: 0 10px;
    }
    .van-cell {
      padding: 5px 10px;

    }
  }
  /deep/.van-cell {
    border-radius: 50px;
    background-color: #3b3b3b;
  }
  /deep/.van-icon-search {
    color: #fff;
  }
  /deep/.van-field__control {
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
      background-color: #3b3b3b;
      color: #fff;
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
          width: 120/360 * 100vw;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #909090;
        }
        img {
          width: 10%;
        }
      }
    }
  }
}
</style>