'use client';

import { StrictPropsWithChildren } from '@/@types/common';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function QueryProvider({ children }: StrictPropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
