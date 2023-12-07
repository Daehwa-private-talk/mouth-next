'use client';

import { SignInView } from '@/components/auth/SignIn.view';
import { useSignIn } from '@/hooks/auth/useSignIn';
import { useHome } from '@/hooks/home/useHome';

export default function SignIn() {
  const { control, onSubmit, errors } = useSignIn();
  const { onClickRouteSignUp } = useHome();

  return (
    <SignInView
      control={control}
      onSubmit={onSubmit}
      errors={errors}
      handleClickSignUpButton={onClickRouteSignUp}
    />
  );
}
