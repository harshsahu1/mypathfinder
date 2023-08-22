'use client';
import '../globals.css';
import { Inter } from 'next/font/google';
import TopBar from '@/components/shared/TopBar';
import Bottombar from '@/components/shared/Bottom';
import { useParams, ParamsProvider } from '@/context/stateManager';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ParamsProvider>
      <html lang='en'>
        <body className={inter.className}>
          <TopBar />
          {/* <SmallTopBar /> */}

          <main className='flex flex-row'>
            <section className='main-container'>
              <div className='flex border'>{children}</div>
            </section>
          </main>
          <Bottombar />
        </body>
      </html>
    </ParamsProvider>
  );
}
