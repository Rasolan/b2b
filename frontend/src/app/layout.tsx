import type { Metadata } from 'next'

import './globals.css'
import './clear.css'
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
      <Header/>
      <main>{children}</main>
      <Footer/>
    </html>
  )
}
