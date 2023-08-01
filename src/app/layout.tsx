import './globals.css'
import { Inter, Nunito } from 'next/font/google'
import Menu from '@/components/menu'

const inter = Inter({ subsets: ['latin']})
const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Gleb Skibitsky',
  description: 'Personal website of Gleb Skibitksy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} relative h-screen w-screen flex-col items-center justify-center bg-center overflow-x-hidden`}>
        {/*<div className="absolute flex justify-center my-5 left-1/2 transform -translate-x-1/2 z-30">*/}
        {/*  <Menu/>*/}
        {/*</div>*/}
        {children}
      </body>
    </html>
  )
}
