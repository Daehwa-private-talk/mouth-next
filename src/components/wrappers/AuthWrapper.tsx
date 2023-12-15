'use client';

import { StrictPropsWithChildren } from '@/@types/common';
import { ACCESS_TOKEN_TITLE, IS_USER } from '@/constants/common';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '@/constants/path/auth';
import { LIST } from '@/constants/path/chat';
import { useAuthMe } from '@/hooks/auth/useAuthMe';
import { getCookie, deleteCookie } from 'cookies-next';
import { useEffect } from 'react';

const PUBLIC_ROUTES = [SIGN_IN_PATH, SIGN_UP_PATH];
const ROOT = '/';

const removeAllCookies = () => {
  deleteCookie(IS_USER);
  deleteCookie(ACCESS_TOKEN_TITLE);
};

export default function AuthWrapper({ children }: StrictPropsWithChildren) {
  const { error, refetch } = useAuthMe();

  useEffect(() => {
    (async () => {
      const currentPath = window.location.pathname;
      const accessToken = getCookie(ACCESS_TOKEN_TITLE);

      if (error || !accessToken) {
        removeAllCookies();

        if (error) {
          window.location.assign(SIGN_IN_PATH);
          return;
        }
      }

      if (ROOT.includes(currentPath)) {
        window.location.assign(SIGN_IN_PATH);
        return;
      }

      if (PUBLIC_ROUTES.includes(currentPath)) {
        if (!accessToken) {
          removeAllCookies();
          return;
        }

        await refetch();

        window.location.assign(LIST);
        return;
      }

      await refetch();

      return;
    })();
  }, []);

  return error ? null : children;
}
