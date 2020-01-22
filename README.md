# musicPlayerProject

> My fabulous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


以nuxt作为vue的服务端渲染 制作的音乐项目。

技术栈
nuxt2 + vue + vuex + vue-router + axios + vant 

: 收获

📝 实现细节
主要功能：首页、注册、登录、个人中心、音乐播放、收藏、
目标功能
 首页 -- 
 注册 -- 
 登录 -- 
 个人中心 -- 
 收藏 -- 
 音乐播放 -- 
 
 **开发日常记录**
 
 nuxt模版搭建
直接使用的 Nuxt 官网提供的 create-nuxt-app

npx create-nuxt-app <项目名>

进行一些选择:

  1.在集成的服务器端框架之间进行选择:
    None (Nuxt默认服务器)
    Express
    Koa
    Hapi
    Feathers
    Micro
    Adonis (WIP)
    
  2.选择您喜欢的UI框架:
    None (无)
    Bootstrap
    Vuetify
    Bulma
    Tailwind
    Element UI
    Buefy
    
  3.选择你想要的Nuxt模式 (Universal or SPA)
  
  4.添加 axios module 以轻松地将HTTP请求发送到您的应用程序中。
  
  5.添加 EsLint 以在保存时代码规范和错误检查您的代码。
  
  6.添加 Prettier 以在保存时格式化/美化您的代码。

# 启动本地服务
npm run dev

注：nuxt默认会读取pages里面的vue文件，自动生成路由，如需要自定义路由，可在nuxt.config.js中配置对应参数。
