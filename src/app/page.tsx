'use client';

import { HomeView } from '@/components/home/Home.view';
import { useHome } from '@/hooks/home/useHome';

export default function Home() {
  const { onClickRouteSignIn, onClickRouteSignUp } = useHome();

  return (
    <HomeView
      onClickRouteSignIn={onClickRouteSignIn}
      onClickRouteSignUp={onClickRouteSignUp}
    />
  );
}
