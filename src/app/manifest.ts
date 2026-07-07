import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Brikman Paul Morales',
    short_name: 'Brikman Paul',
    description: 'Software Architect & Electronic Composer',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1419',
    theme_color: '#00D9FF',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
