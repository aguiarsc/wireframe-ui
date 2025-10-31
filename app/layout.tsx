import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/registry/new-york/ui/sonner'
import { chillax } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://wireframe-ui.vercel.app'),
  title: {
    default: 'wireframe-ui - Wireframe Components for Rapid Prototyping',
    template: '%s | wireframe-ui',
  },
  description:
    'Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components. 30+ production-ready React components built with Tailwind CSS.',
  keywords: [
    'wireframe',
    'ui components',
    'react',
    'tailwind',
    'shadcn',
    'prototyping',
    'design system',
    'component library',
  ],
  authors: [{ name: 'wireframe-ui' }],
  creator: 'wireframe-ui',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wireframe-ui.vercel.app',
    title: 'wireframe-ui - Wireframe Components for Rapid Prototyping',
    description:
      'Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components.',
    siteName: 'wireframe-ui',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'wireframe-ui - Wireframe Components for Rapid Prototyping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wireframe-ui - Wireframe Components for Rapid Prototyping',
    description:
      'Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${chillax.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
