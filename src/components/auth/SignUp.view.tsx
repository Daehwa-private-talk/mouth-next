'use client';

import { SignUpSchema } from '@/@types/auth';
import { Control, FieldErrors } from 'react-hook-form';
import { AuthButton, AuthTextInput, Label } from '@/components/common';

interface Props {
  control: Control<SignUpSchema>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignUpSchema>;
}

export const SignUpView = ({ control, onSubmit, errors }: Props) => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          &quot; 회원가입하기 &quot;
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <Label htmlFor="name">이름</Label>
            <div className="mt-2">
              <AuthTextInput
                name="name"
                control={control}
                placeholder="이름"
                required
                error={errors.name}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="nickname">닉네임</Label>
            <div className="mt-2">
              <AuthTextInput
                name="nickname"
                control={control}
                placeholder="닉네임"
                required
                error={errors.nickname}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">이메일</Label>
            <div className="mt-2">
              <AuthTextInput
                name="email"
                type="email"
                control={control}
                required
                placeholder="이메일"
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
                required
                placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
                error={errors.password}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            </div>
            <div className="mt-2">
              <AuthTextInput
                name="confirmPassword"
                type="password"
                control={control}
                required
                placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
                error={errors.confirmPassword}
              />
            </div>
          </div>

          <div>
            <AuthButton>회원가입</AuthButton>
          </div>
        </form>
      </div>
    </div>
  );
};
