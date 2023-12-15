import { SignIn, SignUp } from '@/@types/auth';
import {
  AUTH_ME_PATH,
  REFRESH_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from '@/constants/path/auth';
import { getFullPath } from '@/utils/common';
import { defaultRequester, requester } from '@/utils/requester';

interface AuthRefreshToken {
  refreshToken: string;
}

const AuthApi = {
  signIn: ({ email, password }: SignIn) => {
    const path = getFullPath(SIGN_IN_PATH);

    return defaultRequester.post(path, {
      email,
      password,
    });
  },
  signUp: ({ name, email, nickname, birthDate, password }: SignUp) => {
    const path = getFullPath(SIGN_UP_PATH);

    return defaultRequester.post(path, {
      name,
      email,
      nickname,
      birthDate,
      password,
    });
  },
  refresh: ({ refreshToken }: AuthRefreshToken) => {
    const path = getFullPath(REFRESH_PATH);

    return requester.post(path, null, { params: { refreshToken } });
  },
  me: () => {
    const path = getFullPath(AUTH_ME_PATH);

    return requester.get(path);
  },

  // api test : will deprecate
  test: () => {
    const path = getFullPath('/auth/test');

    return requester.get(path);
  },
};

export default AuthApi;
