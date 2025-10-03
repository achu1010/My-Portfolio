import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Achuth Krishna K | Portfolio',
  description: 'Motivated and versatile fresher with a strong foundation in Python, Java, SQL, and software development.',
  keywords: 'Achuth Krishna K, Web Developer, Python Developer, Portfolio, Java, SQL',
  authors: [{ name: 'Achuth Krishna K' }],
  creator: 'Achuth Krishna K',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/Logo.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}