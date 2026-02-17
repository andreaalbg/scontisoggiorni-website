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
  title: 'Atelier Cucine Moderne - Cucine Su Misura Made in Italy | Oltre 40 Showroom in Italia',
  description: 'Scopri le migliori cucine su misura Made in Italy a prezzi scontati. Oltre 40 showroom in tutta Italia, progettazione 3D gratuita, rilievo misure a domicilio, extra sconto fino a 2000€, consegna e montaggio inclusi.',
  keywords: ['cucine', 'cucine su misura', 'cucine italiane', 'cucine made in italy', 'cucine moderne', 'cucine classiche', 'showroom cucine', 'arredamento cucina', 'cucine scontate'],
  authors: [{ name: 'Atelier Cucine Moderne' }],
  creator: 'Atelier Cucine Moderne',
  publisher: 'Atelier Cucine Moderne',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ateliercucinemoderne.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Atelier Cucine Moderne - Cucine Su Misura Made in Italy',
    description: 'Oltre 40 showroom in Italia. Cucine su misura Made in Italy a prezzi da ingrosso. Progettazione 3D gratuita, extra sconto 2000€, consegna inclusa.',
    url: 'https://www.ateliercucinemoderne.it',
    siteName: 'Atelier Cucine Moderne',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Cucine Moderne - Cucine Made in Italy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Cucine Moderne - Cucine Su Misura Made in Italy',
    description: 'Oltre 40 showroom in Italia. Cucine su misura Made in Italy a prezzi accessibili.',
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

