import clsx from 'clsx';
import { Inter, Yanone_Kaffeesatz } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import BannerWrapper from '@/components/BannerWrapper';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LocaleProvider from '@/contexts/locales';
import './globals.css';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

const yanone = Yanone_Kaffeesatz({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yanone-kaffeesatz',
});

export async function generateMetadata() {
  return {
    title: {
      default: 'sciwork 2023',
      template: 'sciwork 2023 - %s',
    },
    description: 'Science, code, and open source.',
    metadataBase: process.env.SITEURL && new URL(process.env.SITEURL),
    openGraph: {
      title: 'sciwork 2023',
      description: 'Science, code, and open source.',
      url: process.env.SITEURL,
      siteName: 'sciwork 2023',
      images: [
        {
          url: '/sciworkbkg.png',
          width: 1024,
          height: 512,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'sciwork 2023',
      description: 'Science, code, and open source.',
      images: ['/sciworkbkg.png'],
    },
    icons: {
      icon: [
        {
          url: '/favicon.ico',
          sizes: 'any',
        },
        {
          url: '/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
        {
          url: '/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
        },
      ],
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'tw-relative tw-flex tw-min-h-screen tw-w-screen tw-flex-col tw-overscroll-none',
          inter.className,
          yanone.variable,
        )}
      >
        <LocaleProvider>
          <Header className="tw-fixed tw-top-0 tw-z-10" />
          <BannerWrapper />
          <main className="tw-grow">{children}</main>
          <Footer />
          <div id="portal" />
        </LocaleProvider>
      </body>
    </html>
  );
}
