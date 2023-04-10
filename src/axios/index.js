import axios from 'axios';

const apiClient = axios.create({
  //   baseURL: process.env.baseURL,
  baseURL: 'http://localhost:8000',
  // 인증헤더 추가해야 함
  //   withCredentials: false,
  timeout: 30000,
});

apiClient.interceptors.request.use(
  async (config) => {
    config.headers = {
      'Content-Type': 'application/json',
      //   'X-Csrf-Token': sessionStorage.getItem('access_token'),
    };
    return config;
  },
  (error) => {
    console.debug('interceptors.request.error', error);
    Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (res) => {
    // const { config, status, data } = res;
    console.info(res);
    return res;
  },
  async (err) => {
    console.debug('interceptors.response.error', err);
    if (!err.response) {
      return Promise.reject(err);
    }

    return err.response;
  }
);

export default apiClient;
