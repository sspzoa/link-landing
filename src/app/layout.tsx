import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const suit = localFont({
  src: [
    {
      path: './fonts/SUIT-Variable.woff2',
    },
  ],
  variable: '--font-suit',
});

export const metadata: Metadata = {
  title: '미래의 창업가를 연결하다, Link',
  description:
    'Link는 ‘미래의 창업가를 연결하다’ 라는 비전으로 만들어진 고등학생 단체로, 전국에 있는 다양한 고등학교의 IT 프로젝트 및 창업 동아리들을 모아 경험, 비전, 지식 등을 공유하고 관련 역량을 강화하는 것을 목표로 하고 있습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#5941F5" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#5941F5" />
        <meta property="og:image" content="https://link.sspzoa.io/images/banner.png" />
        <link href="/link-logo/light-mode-favicon.svg" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/link-logo/dark-mode-favicon.svg" rel="icon" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={suit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
