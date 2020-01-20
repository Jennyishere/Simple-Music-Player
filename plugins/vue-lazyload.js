import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'./images/error.png',
   loading:'./images/loading.png'
})