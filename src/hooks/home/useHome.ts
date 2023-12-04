import { useRouter } from 'next/navigation';

export const useHomeController = () => {
  const router = useRouter();

  const handleClickRouteSignIn = () => {
    router.push('/sign-in');
  };

  const handleClickRouteSignUp = () => {
    router.push('/sign-up');
  };

  return {
    onClickRouteSignIn: handleClickRouteSignIn,
    onClickRouteSignUp: handleClickRouteSignUp,
  };
};
