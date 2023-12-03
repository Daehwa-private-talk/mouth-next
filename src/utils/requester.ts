import axios from 'axios';
import { Cookie } from '@/lib/cookie';
import AuthApi from '@/apis/AuthApi';

const TIME_OUT = 1000 * 120;
const UNAUTHORIZED = 401;

let isRefreshing = false;

const requester = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DAEHWA_URL_DEV
      : process.env.NEXT_PUBLIC_DAEHWA_URL_PROD,

  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = Cookie.getCookie(
      process.env.NEXT_PUBLIC_REFRESH_TOKEN || '',
    );

    if (
      error.response &&
      error.response.status === UNAUTHORIZED &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      isRefreshing = true;

      return AuthApi.refresh({ refreshToken })
        .then((response) => {
          originalRequest._retry = true;
          Cookie.setCookie('refreshToken', response.data.result?.refreshToken);

          return axios(originalRequest);
        })
        .catch((error) => {
          Cookie.removeCookie('refreshToken');
          window.location.assign('/session_expired');

          return Promise.reject(error);
        })
        .finally(() => {
          isRefreshing = false;
        });
    }

    return Promise.reject(error);
  },
);

export default requester;
