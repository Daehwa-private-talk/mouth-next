'use client';

import { SignIn } from '@/@types/auth';
import { Control, FieldErrors } from 'react-hook-form';
import { AuthButton, AuthTextInput, Label } from '@/components/common';

interface Props {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignIn>;
  onClickSignUpButton: () => void;
}

export const SignInView = ({
  control,
  onSubmit,
  errors,
  onClickSignUpButton,
}: Props) => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          &quot; 대화하기 &quot;
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <Label htmlFor="email">이메일</Label>
            <div className="mt-2">
              <AuthTextInput
                name="email"
                control={control}
                placeholder="email"
                required
                error={errors.email}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">비밀번호</Label>
            </div>
            <div className="mt-2">
              <AuthTextInput
                name="password"
                type="password"
                control={control}
                placeholder="password"
                required
                error={errors.password}
              />
            </div>
          </div>

          <AuthButton>로그인</AuthButton>
        </form>

        <p className="mt-10 text-sm text-center text-gray-500">
          회원이 아니신가요?{' '}
          <a
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={onClickSignUpButton}
          >
            회원가입하기
          </a>
        </p>
      </div>
    </div>
  );
};
