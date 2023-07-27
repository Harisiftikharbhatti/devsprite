import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Practice',
  description: 'Starter Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <head>
        </head>
        <main>
        <Navbar />
        </main>
      </body>
    </html>
  )
}
