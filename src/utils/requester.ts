import axios, { CreateAxiosDefaults, ParamsSerializerOptions } from 'axios';
import AuthApi from '@/apis/AuthApi';
import { stringify } from 'qs';
import { ACCESS_TOKEN_TITLE, REFRESH_TOKEN_TITLE } from '@/constants/common';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

let isRefreshing = false;

const TIME_OUT = 1000 * 120;
const UNAUTHORIZED = 401;
const STALE_REFRESH_TOKEN = 4108;

const accessToken = getCookie(ACCESS_TOKEN_TITLE);

const axiosDefault: CreateAxiosDefaults<any> = {
  baseURL:
    process.env.NEXT_PUBLIC_NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DAEHWA_URL_DEV
      : process.env.NEXT_PUBLIC_DAEHWA_URL_PROD,

  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: stringify,
  } as ParamsSerializerOptions,
};

const defaultRequester = axios.create(axiosDefault);
const requester = axios.create({
  ...axiosDefault,
  headers: {
    ...axiosDefault.headers,
    Authorization: accessToken,
  },
});

requester.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response?.status === UNAUTHORIZED &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      const refreshToken = getCookie(REFRESH_TOKEN_TITLE) as string;

      isRefreshing = true;

      return AuthApi.refresh({ refreshToken })
        .then((response) => {
          originalRequest._retry = true;

          const { result } = response.data;
          const newAccessToken = result?.accessToken;
          const newRefreshToken = result?.refreshToken;

          setCookie(ACCESS_TOKEN_TITLE, newAccessToken);
          setCookie(REFRESH_TOKEN_TITLE, newRefreshToken);

          return axios({
            ...originalRequest,
            headers: {
              ...axiosDefault.headers,
              Authorization: newAccessToken,
            },
          });
        })
        .catch((error) => {
          const { data } = error.response;

          if (data?.status?.code === STALE_REFRESH_TOKEN) {
            deleteCookie(REFRESH_TOKEN_TITLE);
            deleteCookie(ACCESS_TOKEN_TITLE);

            window.alert(data?.status?.message || '만료된 세션입니다.');
            window.location.assign('/session-expired');
          } else {
            const { status, data } = error.response;

            window.alert(
              `${status || data?.status?.code} ${
                data?.status?.message || '에러'
              }`,
            );
          }

          return Promise.reject(error);
        })
        .finally(() => {
          isRefreshing = false;
        });
    }

    return Promise.reject(error);
  },
);

export { defaultRequester, requester };
