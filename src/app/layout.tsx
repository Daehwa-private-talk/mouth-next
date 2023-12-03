import type { Metadata } from 'next';

import Provider from '@/components/common/Provider';
import ThemeProvider from '@/components/common/ThemeProvider';
import Main from '@/components/common/Main';
import ErrorBoundary from '@/components/common/ErrorBoundary';

export const metadata: Metadata = {
  title: 'Daehwa',
  description: 'Daehwa app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ErrorBoundary>
          <Provider>
            <ThemeProvider>
              <Main>{children}</Main>
            </ThemeProvider>
          </Provider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
