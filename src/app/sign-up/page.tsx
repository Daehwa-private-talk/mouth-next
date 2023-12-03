'use client';

import { SignUpView } from '@/components/auth/SignUp.view';
import { useSignUp } from '@/hooks/auth/useSignUp';

export default function SignUp() {
  const { control, onSubmit, errors } = useSignUp();

  return <SignUpView control={control} onSubmit={onSubmit} errors={errors} />;
}
