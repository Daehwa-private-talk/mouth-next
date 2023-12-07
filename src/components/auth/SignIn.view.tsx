import { SignIn } from '@/@types/auth';
import { AuthButton, AuthTextInput, Balloon } from '@/components/common';
import { Control, FieldErrors } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignIn>;
  handleClickSignUpButton: () => void;
}

export const SignInView = ({
  control,
  onSubmit,
  errors,
  handleClickSignUpButton,
}: Props) => {
  return (
    <Form onSubmit={onSubmit}>
      <Header>
        <Balloon>" 대화하기 "</Balloon>
      </Header>
      <InputContainer>
        <Label>이메일</Label>
        <AuthTextInput
          name="email"
          type="email"
          control={control}
          placeholder="이메일"
          error={errors.email}
        />
        <Label>비밀번호</Label>
        <AuthTextInput
          name="password"
          type="password"
          control={control}
          placeholder="비밀번호"
          error={errors.password}
        />
      </InputContainer>
      <ButtonContainer>
        <AuthButton width={320}>로그인</AuthButton>
        <AuthButton width={320} onClick={handleClickSignUpButton}>
          회원가입
        </AuthButton>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.(2)};
`;

const Header = styled('header')`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.dark};
`;

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(3)};
  margin-top: ${({ theme }) => theme.spacing?.(10)};
`;

const Label = styled('label')`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.white};
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(5)};
  margin-top: ${({ theme }) => theme.spacing?.(10)};
`;
