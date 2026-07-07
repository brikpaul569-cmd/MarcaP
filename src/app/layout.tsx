import type { Metadata } from 'next'
import { spaceMono, inter, jetbrainsMono } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brikman Paul Morales — Software Architect & Electronic Composer',
  description:
    'Software architect by day. Electronic composer by night. Both, obsessively.',
  metadataBase: new URL('https://brikmanpaul.dev'),
  openGraph: {
    title: 'Brikman Paul Morales',
    description:
      'Software architect by day. Electronic composer by night. Both, obsessively.',
    siteName: 'Brikman Paul Morales',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brikman Paul Morales',
    description:
      'Software architect by day. Electronic composer by night. Both, obsessively.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-deep-space text-light-grey font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
