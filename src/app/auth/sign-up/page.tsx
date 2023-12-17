'use client';

import { SignUpView } from '@/components/auth/SignUp.view';
import { useSignUp } from '@/hooks/auth/useSignUp';
import { useView } from '@/hooks/auth/useView';

export default function SignUp() {
  const { control, onSubmit, errors } = useSignUp();
  const { isValidView } = useView();

  return (
    isValidView && (
      <SignUpView control={control} onSubmit={onSubmit} errors={errors} />
    )
  );
}
