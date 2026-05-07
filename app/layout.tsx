import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Ritwik | MERN Stack Developer Portfolio',

  description:
    'Portfolio of Ritwik Kanna, a MERN Stack Developer skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and frontend development.',

  keywords: [
    'Ritwik',
    'MERN Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Node.js',
    'MongoDB',
    'Portfolio',
    'Web Developer',
  ],

  authors: [{ name: 'Ritwik' }],

  creator: 'Ritwik Kanna Koppisetti',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',

    title: 'Ritwik Kanna | MERN Stack Developer Portfolio',

    description:
      'Explore the portfolio of Ritwik, a MERN Stack Developer building modern web applications with React, Next.js, Node.js, and MongoDB.',

    siteName: 'Ritwik Kanna Portfolio',

    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Ritwik Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Ritwik | MERN Stack Developer Portfolio',

    description:
      'Portfolio of Ritwik showcasing MERN stack projects and frontend development skills.',

    images: ['/preview.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
