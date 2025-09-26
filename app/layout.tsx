import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'AJAY — Video Editor',
    template: '%s | AJAY — Video Editor'
  },
  description: 'AJAY is a video editor specializing in ads, short films, and reels.',
  openGraph: {
    type: 'website',
    title: 'AJAY — Video Editor',
    description: 'Portfolio and showreel of AJAY, a video editor.',
    url: 'https://example.com',
    images: [
      {
        url: 'https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Showreel preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJAY — Video Editor',
    description: 'Portfolio and showreel of AJAY, a video editor.',
    images: ['https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


