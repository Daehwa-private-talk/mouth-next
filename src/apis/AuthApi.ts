import { SignIn, SignUp } from '@/@types/auth';
import {
  REFRESH_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from '@/constants/path/auth';
import { defaultRequester, requester } from '@/utils/requester';
import { getFullPath } from '@/utils/common';

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
  signUp: ({ name, email, nickname, password }: SignUp) => {
    const path = getFullPath(SIGN_UP_PATH);

    return defaultRequester.post(path, {
      name,
      email,
      nickname,
      password,
    });
  },
  refresh: ({ refreshToken }: AuthRefreshToken) => {
    const path = getFullPath(REFRESH_PATH);

    return requester.post(path, null, { params: { refreshToken } });
  },

  // api test : will deprecate
  test: () => {
    const path = getFullPath('/auth/test');

    return requester.get(path);
  },
};

export default AuthApi;
