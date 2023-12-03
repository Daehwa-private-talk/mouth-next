import type { Metadata } from 'next';

import Providers from '@/components/common/Providers';
import ThemeProvider from '@/components/common/ThemeProvider';
import Main from '@/components/common/Main';

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
        <Providers>
          <ThemeProvider>
            <Main>{children}</Main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
