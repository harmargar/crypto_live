import { TheHeader } from '@/components/TheHeader'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Live',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main className='container'>
            {children}
        </main>
        {/* <THeFooter /> */}
    </body>
        
    </html>
  )
}
