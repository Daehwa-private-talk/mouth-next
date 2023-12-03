'use client';

import { SignInView } from '@/components/auth/SignIn.view';
import { useSignIn } from '@/hooks/auth/useSignIn';

export default function SignIn() {
  const { control, onSubmit, errors } = useSignIn();

  return <SignInView control={control} onSubmit={onSubmit} errors={errors} />;
}
