import type { Metadata } from 'next'
import { spaceMono, inter, jetbrainsMono } from '@/lib/fonts'
import { SmoothScroll } from '@/components/animations/SmoothScroll'
import { Footer } from '@/components/sections/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brikman Paul Morales — Software Architect & Electronic Composer',
  description:
    'Software architect by day. Electronic composer by night. Both, obsessively.',
  metadataBase: new URL('https://brikmanpaul.dev'),
  alternates: {
    canonical: 'https://brikmanpaul.dev',
  },
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
      <body className="min-h-screen bg-deep-space text-light-grey font-sans antialiased flex flex-col">
        <nav aria-label="Skip to content">
          <a
            href="#main-content"
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deep-space focus:text-neon-cyan focus:ring-2 focus:ring-neon-cyan focus:outline-none"
          >
            Skip to content
          </a>
        </nav>
        <SmoothScroll>
          <main id="main-content">{children}</main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}
