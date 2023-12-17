export interface SignIn {
  email: string;
  password: string;
}

export interface SignUpSchema {
  name: string;
  email: string;
  birthDate: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export type SignUp = Omit<SignUpSchema, 'confirmPassword'>;
