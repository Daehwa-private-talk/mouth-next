import React from 'react';
import styled from 'styled-components';

interface Props {
  width?: number | string;
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

const Button = styled('button')<{ width?: number | string }>`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors?.black};
  background-color: ${({ theme }) => theme.colors?.primary.main};
  ${({ width }) =>
    `width: ${typeof width === 'number' ? `${width}px` : width}`};

  height: 56px;
  border-radius: 28px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 1px 3px 0px rgba(30, 30, 30, 0.7);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
