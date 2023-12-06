import axios from 'axios';
import { Cookie } from '@/lib/cookie';
import AuthApi from '@/apis/AuthApi';

const TIME_OUT = 1000 * 120;
const UNAUTHORIZED = 401;
const STALE_REFRESH_TOKEN = 4108;

const accessToken = Cookie.getCookie(
  process.env.NEXT_PUBLIC_ACCESS_TOKEN || 'daehwa.access_token',
);

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
    Authorization: `${accessToken}`,
  },
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {
    const refreshToken = Cookie.getCookie(
      process.env.NEXT_PUBLIC_REFRESH_TOKEN || '',
    );

    console.log(error, '에러났당');

    return;

    if (
      error.response &&
      error.response.status === UNAUTHORIZED &&
      !isRefreshing
    ) {
      isRefreshing = true;

      return AuthApi.refresh({ refreshToken })
        .then((response) => {
          Cookie.setCookie('accessToken', response.data.result?.accessToken);
          Cookie.setCookie('refreshToken', response.data.result?.refreshToken);

          window.alert('401 이당');

          // return window.location.assign('/list');
        })
        .catch((error) => {
          // Cookie.removeCookie('refreshToken');
          // window.location.assign('/session-expired');

          window.alert('섹션 없당');

          return Promise.reject(error);
        })
        .finally(() => {
          isRefreshing = false;
        });
    } else if (
      error.response &&
      error.response.status.code === STALE_REFRESH_TOKEN &&
      !isRefreshing
    ) {
      window.alert(error.response.status.message);
      window.location.assign('/sign-in');
    }

    return Promise.reject(error);
  },
);

export default requester;
