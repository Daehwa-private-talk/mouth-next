'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useHome } from '@/hooks/home/useHome';

export default function Home() {
  // TODO: 로그인 여부 판별
  const isLoggedIn = false;
  const router = useRouter();
  const { onClickRouteSignIn } = useHome();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/list');
      return;
    }

    onClickRouteSignIn();
  }, [isLoggedIn, router]);

  return <div>loading... </div>;
}
