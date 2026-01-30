import './globals.css';
import { Inter } from 'next/font/google';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Digital Dekho - Global Digital Agency | Web Development, App Development, AI Automation',
    template: '%s | Digital Dekho',
  },
  description: 'Leading global digital agency offering web development, app development, AI automation, video editing, photo editing, Meta ads, Google ads, and SEO services worldwide.',
  keywords: ['digital agency', 'web development', 'app development', 'AI automation', 'video editing', 'photo editing', 'Meta ads', 'Google ads', 'SEO'],
  authors: [{ name: 'Digital Dekho Team' }],
  creator: 'Digital Dekho',
  publisher: 'Digital Dekho',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://digitaldekho.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://digitaldekho.com',
    siteName: 'Digital Dekho',
    title: 'Digital Dekho - Global Digital Agency',
    description: 'Leading global digital agency offering web development, app development, AI automation, video editing, photo editing, Meta ads, Google ads, and SEO services worldwide.',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Dekho Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Dekho - Global Digital Agency',
    description: 'Leading global digital agency offering comprehensive digital services worldwide.',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}