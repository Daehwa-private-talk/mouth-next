'use client';

import { SignInView } from '@/components/auth/SignIn.view';
import { useView } from '@/hooks/auth/useView';
import { useSignIn } from '@/hooks/auth/useSignIn';

export default function SignIn() {
  const { control, onSubmit, errors, onClickSignUpButton } = useSignIn();
  const { isValidView } = useView();

  return (
    isValidView && (
      <SignInView
        control={control}
        onSubmit={onSubmit}
        errors={errors}
        onClickSignUpButton={onClickSignUpButton}
      />
    )
  );
}
