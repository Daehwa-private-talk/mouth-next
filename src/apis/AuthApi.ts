import { SignIn, SignUp } from '@/@types/auth';
import {
  REFRESH_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from '@/constants/path/auth';
import requester from '@/utils/requester';
import { getFullPath } from '@/utils/common';

interface AuthRefreshToken {
  refreshToken: string;
}

const AuthApi = {
  signIn: ({ email, password }: SignIn) => {
    const path = getFullPath(SIGN_IN_PATH);

    return requester.post(path, {
      email,
      password,
    });
  },
  signUp: ({ name, email, nickname, password }: SignUp) => {
    const path = getFullPath(SIGN_UP_PATH);

    return requester.post(path, {
      name,
      email,
      nickname,
      password,
    });
  },
  refresh: ({ refreshToken }: AuthRefreshToken) => {
    const path = getFullPath(REFRESH_PATH);

    return requester.post(path, {
      refreshToken,
    });
  },
};

export default AuthApi;
