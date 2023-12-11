'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from 'styled-components';

export const ClientComponentLayout = function ({
  children,
}: PropsWithChildren) {
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount && <Main>{children}</Main>;
};

const Main = styled('main')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors?.purple};
`;
