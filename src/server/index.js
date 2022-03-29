import Vue from 'vue'
import axios from 'axios'
import { getToken } from '@/utils/auth'


export const BASE_URL = "http://localhost:8000/"

// 创建axios实例
const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 请求超时时间
  responseType: "json",
  //withCredentials: true, // 是否允许带cookie这些
  headers: {
    //"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    "Content-Type": "application/json; charset=utf-8"
  }
})

// request拦截器
Axios.interceptors.request.use(config => {

  // 若是有做鉴权token , 就给头部带上token
  const token = getToken();
  //console.log(token)
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug 
  Promise.reject(error)
})

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  response => {
    // console.log(response)
    //对响应数据做些事
    const res = response.data;
    return res;
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
);

export default {
  install() {
    Vue.prototype.$http = Axios
    Vue.http = Axios
  }
};