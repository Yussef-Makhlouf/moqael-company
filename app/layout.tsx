import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FloatingButtons from '@/components/floating-buttons'
import Script from 'next/script'
// import { ThemeProvider } from './components/theme-provider'
// import Header from './components/header'
// import Footer from './components/footer'
// import FloatingButtons from './components/floating-buttons'
// import Script from 'next/script'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['300', '400', '500', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'مؤسسة النهضة للمقاولات العامة المحدودة',
  description: 'شركة رائدة في مجال المقاولات والبناء في الشرق الأوسط. نقدم خدمات عالية الجودة في الأسفلت، العوازل، التكسير، وأعمال البناء المتنوعة.',
  keywords: 'مقاولات، بناء، أسفلت، عوازل، تكسير، خرسانة، الشرق الأوسط، مؤسسة النهضة',
  authors: [{ name: 'مؤسسة النهضة للمقاولات العامة المحدودة' }],
  creator: 'مؤسسة النهضة للمقاولات العامة المحدودة',
  publisher: 'مؤسسة النهضة للمقاولات العامة المحدودة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://www.alnahda-construction.com',
    siteName: 'مؤسسة النهضة للمقاولات العامة المحدودة',
    images: [
      {
        url: 'https://www.alnahda-construction.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مؤسسة النهضة للمقاولات العامة المحدودة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alnahda_const',
    creator: '@alnahda_const',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={tajawal.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
        <Script src="https://unpkg.com/smooth-scroll@16.1.3/dist/smooth-scroll.polyfills.min.js" />
      </body>
    </html>
  )
}

