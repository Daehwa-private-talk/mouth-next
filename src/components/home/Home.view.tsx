'use client';

import {
  AuthButton,
  Balloon,
  ClientComponentLayout,
} from '@/components/common';
import styled from 'styled-components';

interface Props {
  onClickRouteSignIn: () => void;
  onClickRouteSignUp: () => void;
}

export const HomeView = ({ onClickRouteSignIn, onClickRouteSignUp }: Props) => {
  return (
    <ClientComponentLayout>
      <Balloon>
        <Headline>&quot; 대화하기 &quot;</Headline>
      </Balloon>
      <ButtonContainer>
        <AuthButton onClick={onClickRouteSignIn}>로그인</AuthButton>
        <AuthButton onClick={onClickRouteSignUp}>회원가입</AuthButton>
      </ButtonContainer>
    </ClientComponentLayout>
  );
};

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(5)};
  margin-top: ${({ theme }) => theme.spacing?.(20)};
`;

const Headline = styled('h2')`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.dark};
`;
