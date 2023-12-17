import AuthApi from '@/apis/AuthApi';
import { SIGN_IN_PATH } from '@/constants/path/auth';
import { useQuery } from 'react-query';

export const useAuthMe = () => {
  const queryKey = ['auth-me'];
  const queryFn = () => AuthApi.me();

  return useQuery(queryKey, queryFn, {
    staleTime: Infinity,
    suspense: true,
    useErrorBoundary: false,
    enabled: false,
    onSuccess: () => {},
    onError: () => {
      window.location.assign(SIGN_IN_PATH);
    },
  });
};
