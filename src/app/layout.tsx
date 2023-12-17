import { StrictPropsWithChildren } from '@/@types/common';
import AuthWrapper from '@/components/wrappers/AuthWrapper';
import ErrorBoundary from '@/components/wrappers/ErrorBoundary';
import QueryProvider from '@/components/wrappers/QueryProvider';
import ThemeProvider from '@/components/wrappers/ThemeProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daehwa',
  description: 'Daehwa app',
};

export default function RootLayout({ children }: StrictPropsWithChildren) {
  return (
    <html lang="ko">
      <body>
        <ErrorBoundary>
          <QueryProvider>
            <AuthWrapper>
              <ThemeProvider>{children}</ThemeProvider>
            </AuthWrapper>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
