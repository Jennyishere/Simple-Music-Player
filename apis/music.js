import axios from '@nuxtjs/axios'

// 获取banner的图片
export const Banner = (typeId)=> {
    return axios({
        url: `/banner?type=${typeId}`
    })
}