'use client';

import { SignUpSchema } from '@/@types/auth';
import { Control, FieldErrors } from 'react-hook-form';
import { AuthButton, AuthTextInput, Balloon } from '@/components/common';

interface Props {
  control: Control<SignUpSchema>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignUpSchema>;
}

export const SignUpView = ({ control, onSubmit, errors }: Props) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          &quot; 회원가입하기 &quot;
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              이름
            </label>
            <div className="mt-2">
              <AuthTextInput
                name="name"
                control={control}
                placeholder="이름"
                error={errors.name}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="nickname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ID
            </label>
            <div className="mt-2">
              <AuthTextInput
                name="nickname"
                control={control}
                placeholder="ID"
                error={errors.nickname}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              이메일
            </label>
            <div className="mt-2">
              <AuthTextInput
                name="email"
                type="email"
                control={control}
                placeholder="이메일"
                error={errors.email}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <AuthTextInput
                name="password"
                type="password"
                control={control}
                placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
                error={errors.password}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                비밀번호 확인
              </label>
            </div>
            <div className="mt-2">
              <AuthTextInput
                name="confirmPassword"
                type="password"
                control={control}
                placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
                error={errors.confirmPassword}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// const Form = styled('form')`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing?.(2)};
// `;

// const Header = styled('header')`
//   margin-bottom: ${({ theme }) => theme.spacing?.(10)};
// `;

// const Title = styled('h4')`
//   font-size: 1rem;
//   font-weight: 700;
// `;

// const InputContainer = styled('div')`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing?.(3)};
//   margin-bottom: ${({ theme }) => theme.spacing?.(3)};
// `;

// const Label = styled('label')`
//   font-size: 0.9rem;
//   font-weight: 600;
//   color: ${({ theme }) => theme.colors?.white};
// `;

// const ButtonContainer = styled('div')`
//   margin-top: ${({ theme }) => theme.spacing?.(3)};
// `;
