'use client';

import { AuthButton, Balloon } from '@/components/common';
import { useHome } from '@/hooks/home/useHome';
import styled from 'styled-components';

export default function Home() {
  const { onClickRouteSignIn, onClickRouteSignUp } = useHome();

  return (
    <section>
      <Balloon>
        <Header>" 대화하기 "</Header>
      </Balloon>
      <ButtonContainer>
        <AuthButton onClick={onClickRouteSignIn}>로그인</AuthButton>
        <AuthButton onClick={onClickRouteSignUp}>회원가입</AuthButton>
      </ButtonContainer>
    </section>
  );
}

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(5)};
  margin-top: ${({ theme }) => theme.spacing?.(20)};
`;

const Header = styled('header')`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.dark};
`;
