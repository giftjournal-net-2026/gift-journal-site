import type {Metadata} from 'next'; import './globals.css'; import {Header} from '@/components/Header'; import {Footer} from '@/components/Footer';
export const metadata: Metadata = {
  metadataBase: new URL('https://giftjournal.net'),

  title: {
    default: 'GiftJournal — Thoughtful Gifts. Beautifully Curated.',
    template: '%s | GiftJournal',
  },

  description:
    'Thoughtful gift ideas, carefully curated for every person, occasion and budget.',

  icons: {
  icon: '/favicon.svg',
  shortcut: '/favicon.svg',
  apple: '/favicon.svg',
},

  openGraph: {
    siteName: 'GiftJournal',
    type: 'website',
    title: 'GiftJournal — Thoughtful Gifts. Beautifully Curated.',
    description:
      'Thoughtful gift ideas, carefully curated for every person, occasion and budget.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'GiftJournal',
    description: 'Thoughtful gift ideas, carefully curated.',
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
