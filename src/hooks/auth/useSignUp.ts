import { SignUp, SignUpSchema } from '@/@types/auth';
import AuthApi from '@/apis/AuthApi';
import { SIGN_IN_PATH } from '@/constants/path/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty, omit } from 'lodash';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import * as yup from 'yup';

const PASSWORD_RULE_REGEXP =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const signUpSchema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요.'),
  nickname: yup.string().required('ID를 입력해주세요.'),
  birthDate: yup.string().required('생일을 입력해주세요.'),
  email: yup
    .string()
    .email('이메일 형식에 맞게 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .matches(PASSWORD_RULE_REGEXP, {
      message: '영문/숫자/특수문자 포함 8자 이상을 입력해주세요.',
    })
    .required('비밀번호를 입력해주세요.'),
  confirmPassword: yup
    .string()
    .matches(PASSWORD_RULE_REGEXP, {
      message: '영문/숫자/특수문자 포함 8자 이상을 입력해주세요.',
    })
    .oneOf([yup.ref('password')], '비밀번호와 일치하지 않습니다.')
    .required('비밀번호 확인을 입력해주세요.'),
});
const SIGN_UP_DEFAULT_VALUE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  birthDate: '',
};

export const useSignUp = () => {
  const queryFn = (params: SignUp) => AuthApi.signUp(params);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: yupResolver(signUpSchema),
    defaultValues: SIGN_UP_DEFAULT_VALUE,
  });

  const { mutate } = useMutation(queryFn);

  const submitSignUpInfo: SubmitHandler<SignUpSchema> = (signUpData) => {
    if (!signUpData || isEmpty(signUpData)) {
      return;
    }

    mutate(omit(signUpData, 'confirmPassword'), {
      onSuccess: () => {
        window.alert('회원가입을 완료했습니다!');
        router.push(SIGN_IN_PATH);
      },
      onError: (error: any) => {
        window.alert(
          error?.response?.data?.status?.message || '회원가입에 실패했습니다.',
        );
      },
    });
  };

  const onSubmit = handleSubmit(submitSignUpInfo);

  return {
    control,
    onSubmit,
    errors,
  };
};
