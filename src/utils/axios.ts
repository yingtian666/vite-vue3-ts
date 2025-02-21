import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    // do something
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service