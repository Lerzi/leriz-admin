import axios, { AxiosInstance } from 'axios';

interface Res {
  code: number;
  msg: string;
  data: any;
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  config => {
    if (config.headers !== undefined) {
      config.headers['X-Access-Token'] = 'token';
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res: Res = response.data;
    if (res.code !== 200) {
      window.$message.error(res.msg, {
        keepAliveOnHover: true,
      });
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return response;
    }
  },
  error => {
    window.$message.error(error.message, {
      keepAliveOnHover: true,
    });
    return Promise.reject(error);
  }
);

export default service;
