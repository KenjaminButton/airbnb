import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

export const metadata = {
  title: 'AIRBNB',
  description: 'Kenjamin Button\'s AIRBNB Fullstack App',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true} >

        <Navbar />
        {children}
      </body>
    </html>
  )
}
