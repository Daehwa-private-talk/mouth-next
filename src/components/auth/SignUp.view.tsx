'use client';

import { SignUpSchema } from '@/@types/auth';
import { Control, FieldErrors } from 'react-hook-form';
import styled from 'styled-components';
import {
  AuthButton,
  AuthTextInput,
  Balloon,
  ClientComponentLayout,
} from '@/components/common';

interface Props {
  control: Control<SignUpSchema>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignUpSchema>;
}

export const SignUpView = ({ control, onSubmit, errors }: Props) => {
  return (
    <ClientComponentLayout>
      <Form onSubmit={onSubmit}>
        <Header>
          <Balloon>
            <Title>회원가입 하기</Title>
          </Balloon>
        </Header>
        <InputContainer>
          <Label>이름</Label>
          <AuthTextInput
            name="name"
            control={control}
            placeholder="이름"
            error={errors.name}
          />
        </InputContainer>
        <InputContainer>
          <Label>ID</Label>
          <AuthTextInput
            name="nickname"
            control={control}
            placeholder="ID"
            error={errors.nickname}
          />
        </InputContainer>
        {/* <InputContainer>
        <Label>생일</Label>
        <AuthTextInput
          name="birthday"
          control={control}
          placeholder="생일"
          error={errors.birthday}
        />
      </InputContainer> */}
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
            placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
            error={errors.password}
          />
        </InputContainer>
        <InputContainer>
          <Label>비밀번호 확인</Label>
          <AuthTextInput
            name="confirmPassword"
            type="password"
            control={control}
            placeholder="영문/숫자/특수문자 포함 8자 이상의 비밀번호"
            error={errors.confirmPassword}
          />
        </InputContainer>
        <ButtonContainer>
          <AuthButton width={320}>회원가입</AuthButton>
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
