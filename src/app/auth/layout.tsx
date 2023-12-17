'use client';

import { StrictPropsWithChildren } from '@/@types/common';
import React from 'react';

export default function AuthLayout({ children }: StrictPropsWithChildren) {
  return <main>{children}</main>;
}
