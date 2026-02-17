import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sconti Cucine - Cucine Su Misura Made in Italy',
    short_name: 'ScontiCucine',
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

