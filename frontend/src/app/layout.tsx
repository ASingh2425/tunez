import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { FavouritesProvider } from '@/context/FavouritesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tunez - Music Discovery',
  description: 'Discover and explore your favorite music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavouritesProvider>
          {children}
        </FavouritesProvider>
      </body>
    </html>
  )
} 