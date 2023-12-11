'use client';

import { SignIn } from '@/@types/auth';
import {
  AuthButton,
  AuthTextInput,
  Balloon,
  ClientComponentLayout,
} from '@/components/common';
import { Control, FieldErrors } from 'react-hook-form';
import styled from 'styled-components';

interface Props {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignIn>;
}

export const SignInView = ({ control, onSubmit, errors }: Props) => {
  return (
    <ClientComponentLayout>
      <Form onSubmit={onSubmit}>
        <Header>
          <Balloon>
            <Title>로그인 하기</Title>
          </Balloon>
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
        </InputContainer>
        <InputContainer>
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
        </ButtonContainer>
      </Form>
    </ClientComponentLayout>
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
  margin-bottom: ${({ theme }) => theme.spacing?.(10)};
`;

const Title = styled('h4')`
  font-size: 1rem;
  font-weight: 700;
`;

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(3)};
  margin-bottom: ${({ theme }) => theme.spacing?.(3)};
`;

const Label = styled('label')`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.white};
`;

const ButtonContainer = styled('div')`
  margin-top: ${({ theme }) => theme.spacing?.(3)};
`;
