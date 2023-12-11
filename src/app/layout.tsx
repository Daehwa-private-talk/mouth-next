import { StrictPropsWithChildren } from '@/@types/common';
import './globals.css';
import ErrorBoundary from '@/components/wrappers/ErrorBoundary';
import QueryProvider from '@/components/wrappers/QueryProvider';
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
          <QueryProvider>{children}</QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
