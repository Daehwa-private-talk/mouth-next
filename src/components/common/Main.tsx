'use client';

import React from 'react';
import styled from 'styled-components';

export default function Main({ children }: { children: React.ReactNode }) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled('main')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.secondary};
`;
