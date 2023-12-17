import { IS_USER } from '@/constants/common';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

export const useView = () => {
  const [isValidView, setIsValidView] = useState(false);

  useEffect(() => {
    const userInfo = getCookie(IS_USER);

    if (userInfo) {
      setIsValidView(false);
      return;
    }

    setIsValidView(true);
  }, []);

  return { isValidView, setIsValidView };
};
