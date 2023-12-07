'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // TODO: 로그인 여부 판별
  const isLoggedIn = false;
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/list');
      return;
    }
    router.push('/sign-in');
  }, [isLoggedIn, router]);

  return <section>Loading...</section>;
}
