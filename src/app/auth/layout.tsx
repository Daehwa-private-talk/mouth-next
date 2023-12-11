'use client';

import { StrictPropsWithChildren } from '@/@types/common';
import React from 'react';
import styled from 'styled-components';

export default function AuthLayout({ children }: StrictPropsWithChildren) {
  return <Main>{children}</Main>;
}

const Main = styled('main')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.purple};
`;
