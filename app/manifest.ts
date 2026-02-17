import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Atelier Cucine Moderne - Cucine Su Misura Made in Italy',
    short_name: 'AtelierCucine',
    description: 'Cucine su misura Made in Italy a prezzi scontati. Oltre 40 showroom in Italia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6B8E7D',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

