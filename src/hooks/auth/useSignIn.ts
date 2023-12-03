import { SignIn, SignIn as SignInSchema } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { Cookie } from '@/lib/cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

const SIGN_IN_DEFAULT_VALUE = { email: '', password: '' };

const signInSchema = yup.object().shape({
  email: yup.string().email().required('이메일을 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

export const useSignIn = () => {
  const queryFn = (params: SignIn) => AuthApi.signIn(params);
  const { mutate } = useMutation(queryFn);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: yupResolver(signInSchema),
    defaultValues: SIGN_IN_DEFAULT_VALUE,
  });

  const submitSignInInfo: SubmitHandler<SignInSchema> = (signInData) => {
    if (!signInData || isEmpty(signInData)) {
      return;
    }

    mutate(signInData, {
      onSuccess: (response) => {
        const { token } = response.data.result || {};
        const { accessToken, refreshToken } = token || {};

        const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
        const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;

        if (ACCESS_TOKEN && REFRESH_TOKEN && accessToken && refreshToken) {
          Cookie.setCookie(ACCESS_TOKEN, accessToken);
          Cookie.setCookie(REFRESH_TOKEN, refreshToken);
        }
      },
      onError: () => {
        window.alert('로그인에 실패했습니다.');
      },
    });
  };

  const catchError: SubmitErrorHandler<SignInSchema> = (
    error: FieldErrors<SignInSchema>,
  ) => {
    console.log('Submit Error: ', error);
  };

  const onSubmit = handleSubmit(submitSignInInfo, catchError);

  return {
    control,
    onSubmit,
    errors,
  };
};
