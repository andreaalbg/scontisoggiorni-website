import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Analytics from '@/components/Analytics'
import { organizationSchema, localBusinessSchema, faqSchema } from '@/lib/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sconti Soggiorni - Soggiorni e Living Made in Italy a Prezzi Scontati | Oltre 40 Showroom in Italia',
  description: 'Scopri i migliori soggiorni e mobili living Made in Italy a prezzi scontati. Oltre 40 showroom in tutta Italia, arredatore dedicato, buono sconto da 1000€, trasporto e montaggio inclusi. Qualità italiana accessibile a tutti.',
  keywords: ['soggiorni', 'soggiorni italiani', 'soggiorni scontati', 'soggiorni made in italy', 'arredamento soggiorno', 'showroom soggiorni', 'soggiorni moderni', 'mobili living', 'pareti attrezzate'],
  authors: [{ name: 'Sconti Soggiorni' }],
  creator: 'Sconti Soggiorni',
  publisher: 'Sconti Soggiorni',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.scontisoggiorni.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sconti Soggiorni - Soggiorni Made in Italy a Prezzi Scontati',
    description: 'Oltre 40 showroom in Italia. Soggiorni e mobili living Made in Italy a prezzi da ingrosso. Arredatore dedicato, buono sconto 1000€, trasporto incluso.',
    url: 'https://www.scontisoggiorni.it',
    siteName: 'Sconti Soggiorni',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sconti Soggiorni - Soggiorni Made in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sconti Soggiorni - Soggiorni Made in Italy a Prezzi Scontati',
    description: 'Oltre 40 showroom in Italia. Soggiorni e mobili living Made in Italy a prezzi accessibili.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="font-sans">
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

