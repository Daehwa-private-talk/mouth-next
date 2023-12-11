import { useRouter } from 'next/navigation';

export const useHome = () => {
  const router = useRouter();

  const handleClickRouteSignIn = () => {
    router.push('/auth/sign-in');
  };

  const handleClickRouteSignUp = () => {
    router.push('/auth/sign-up');
  };

  return {
    onClickRouteSignIn: handleClickRouteSignIn,
    onClickRouteSignUp: handleClickRouteSignUp,
  };
};
