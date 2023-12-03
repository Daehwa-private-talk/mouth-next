import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const AuthButton = function ({ width = 230, onClick, children }: Props) {
  return (
    <Button width={width} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled('button')<{ width?: number }>`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.black};
  background-color: ${({ theme }) => theme.colors?.yellow};
  width: ${({ width }) => width}px;
  height: 56px;
  border-radius: 28px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 1px 3px 0px rgba(30, 30, 30, 0.7);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
