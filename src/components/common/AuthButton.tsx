'use client';

import { StrictPropsWithChildren } from '@/@types/common';
import React from 'react';

interface Props {
  width?: string | number;
  onClick?: () => void;
}

export const AuthButton = function ({
  onClick,
  children,
}: StrictPropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </button>
  );
};
