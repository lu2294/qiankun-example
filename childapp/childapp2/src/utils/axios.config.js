import axios from "axios";
import {
  message
} from "antd";
import Nprogress from 'nprogress';
import 'nprogress/nprogress';
const service = axios.create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": "*"
  },
  timeout: 100000
})

//配置进度条参数
Nprogress.configure({
  showSpinner: false,
  minimum: 0.2,
  easeing: 'swing',
  speed: 1000,
  trickleRate: 0.2
});

//防止多次请求进度条重复加载
let loadingNum = 0;

function startLoading() {
  if (loadingNum === 0) {
    Nprogress.start()
  }
  loadingNum++;
}

function endLoading() {
  loadingNum--
  if (loadingNum <= 0) {
    Nprogress.done()
  }
}



service.interceptors.request.use(

  function (config) {
    const {
      url
    } = config;
    const localData = JSON.parse(localStorage.getItem('localData'))
    // 在发送请求之前做些什么,登陆时不做校验
    if (url && (url).includes('/account/rbac/login')) {
      return config
    }
    const token = localStorage.getItem('token');
    if (token) {
      if (localData['router_key'] === 'xdr') {
        config.headers['x-rbac-token'] = `V1#xdr#${token}`;
      } else {
        config.headers['x-rbac-token'] = `V1#uap#${token}`;
      }
    }
    startLoading()
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    endLoading()
    return Promise.reject(error);

  }
);

service.interceptors.response.use(
  function (response) {
    endLoading()
    if (response.status === 200) {
      return response.data
    } else if (response.status === 401) {
      localStorage.clear();
      window.location.href = '/login'
    }
    return response.data

  },
  function (error) {
    // endLoading()
    // 对响应错误做点什么
    const {
      response: {
        status
      }
    } = error;
    if (error === undefined || error.code === 'ECONNABORTED') {
      message.warning('服务请求超时')
      return Promise.reject(error)
    }
    if (status === 401 || (status === 403 && window.location.pathname !== "/login")) {
      localStorage.clear();
      window.location.href = '/login'
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }

);

export default service;