import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

export const Balloon = function ({ children }: Props) {
  return (
    <Content>
      {children}
      <Arrow />
    </Content>
  );
};

const Content = styled('div')`
  position: relative;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing?.(6)} ${theme.spacing?.(8)}`};
  min-width: fit-content;
  min-height: fit-content;
  white-space: pre;
  border-radius: 8px;
  outline: 0px;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors?.white};
  color: ${({ theme }) => theme.colors?.dark};
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Arrow = styled('div')`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 0 3px 0 0;
  background-color: ${({ theme }) => theme.colors?.white};
  clip-path: polygon(100% 100%, 0% 0%, 100% 0%);
  bottom: 0;
  left: 50%;
  margin-bottom: 1px;
  transform: translate(-50%, 50%) rotate(135deg);
`;
