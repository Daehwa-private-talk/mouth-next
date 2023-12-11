import ErrorBoundary from '@/components/wrappers/ErrorBoundary';
import QueryProvider from '@/components/wrappers/QueryProvider';
import ThemeProvider from '@/components/wrappers/ThemeProvider';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Daehwa',
  description: 'Daehwa app',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ErrorBoundary>
          <QueryProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
