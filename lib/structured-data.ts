// Structured data for SEO (JSON-LD)

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sconti Cucine',
  url: 'https://www.sconticucine.it',
  logo: 'https://www.sconticucine.it/logo.png',
  description: 'Cucine Made in Italy a prezzi scontati. Oltre 40 showroom in tutta Italia.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Italian'],
  },
  sameAs: [
    // Add social media profiles here
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  name: 'Sconti Cucine',
  image: 'https://www.sconticucine.it/og-image.jpg',
  '@id': 'https://www.sconticucine.it',
  url: 'https://www.sconticucine.it',
  telephone: '+39-xxx-xxx-xxxx',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.4642,
    longitude: 9.1900,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '09:00',
    closes: '20:00',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italy',
  },
}

export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cucine Made in Italy',
  description: 'Cucine prestigiose Made in Italy a prezzi scontati',
  brand: {
    '@type': 'Brand',
    name: 'Sconti Cucine',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '2000',
    highPrice: '15000',
    offerCount: '100+',
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto costa una cucina da Sconti Cucine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le nostre cucine Made in Italy partono da prezzi molto competitivi grazie ai nostri sconti fino al 45%. Offriamo anche un buono sconto di 1000€ per tutti i nuovi clienti.',
      },
    },
    {
      '@type': 'Question',
      name: 'Il trasporto e montaggio sono inclusi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sì, il trasporto e il montaggio della tua nuova cucina sono completamente inclusi nel prezzo. Inoltre, ci occupiamo anche dello smaltimento della tua vecchia cucina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanti showroom avete in Italia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Abbiamo oltre 40 mostre espositive in tutta Italia, aperte 7 giorni su 7 per offrirti la massima flessibilità.',
      },
    },
    {
      '@type': 'Question',
      name: 'Che garanzia offrite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tutte le nostre cucine sono garantite 5 anni senza spese aggiuntive, per darti la massima serenità nel tuo acquisto.',
      },
    },
  ],
}

