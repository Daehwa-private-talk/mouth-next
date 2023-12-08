'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Provider({ children }: PropsWithChildren) {
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
