import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const Cookie = {
  setCookie: (name: string, value: string, option?: any) => {
    return cookies.set(name, value, option);
  },
  getCookie: (name: string) => {
    return cookies.get(name);
  },
  removeCookie: (name: string) => {
    return cookies.remove(name);
  },
};
