import { SignIn, SignIn as SignInSchema } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import {
  ACCESS_TOKEN_TITLE,
  IS_USER,
  REFRESH_TOKEN_TITLE,
} from '@/constants/common';
import { LIST } from '@/constants/path/chat';
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
import { setCookie } from 'cookies-next';

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
        const { email, token } = response.data.result || {};
        const { accessToken, refreshToken } = token || {};

        if (accessToken && refreshToken) {
          setCookie(ACCESS_TOKEN_TITLE, accessToken);
          setCookie(REFRESH_TOKEN_TITLE, refreshToken);
          setCookie(IS_USER, email);

          window.location.assign(LIST);
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
