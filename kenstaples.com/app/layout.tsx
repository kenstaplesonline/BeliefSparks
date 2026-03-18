import type { Metadata } from 'next'
import { Inter, Merriweather, Oswald } from 'next/font/google'
import './globals.css'
import { personSchema, websiteSchema } from './schema'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'], variable: '--font-merriweather' })
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald' })

export const metadata: Metadata = {
  metadataBase: new URL('https://kenstaples.com'),

  title: {
    default: 'Ken Staples | Web Developer & Tech Enthusiast in Calgary, Alberta',
    template: '%s | Ken Staples',
  },

  description: 'Ken Staples is a Calgary-based web developer passionate about technology, science, and faith. Building digital experiences that make a difference. View my projects in web development, photography, and more.',

  authors: [{ name: 'Ken Staples', url: 'https://kenstaples.com' }],
  creator: 'Ken Staples',
  publisher: 'Ken Staples',

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://kenstaples.com',
    siteName: 'Ken Staples',
    title: 'Ken Staples | Web Developer & Tech Enthusiast in Calgary',
    description: 'Calgary-based web developer passionate about technology, science, and faith. Building digital experiences that make a difference.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ken Staples - Calgary Web Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ken Staples | Web Developer in Calgary, Alberta',
    description: 'Calgary-based web developer passionate about technology, science, and faith.',
    images: ['/og-image.png'],
    creator: '@kenstaples',
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

  alternates: {
    canonical: 'https://kenstaples.com',
  },

  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
