import type { Metadata } from 'next'

import './clear.css'
import './fonts.css'
import './globals.css'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'



export const metadata: Metadata = {
  title: 'Block2Box',
  description: 'Makarov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <section className='content'>{children}</section>
        <Footer />
      </body>

    </html>
  )
}
