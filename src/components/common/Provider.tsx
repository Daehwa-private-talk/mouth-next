'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
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
