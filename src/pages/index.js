import Homepage from '../components/Homepage/Homepage'
import Navbar from '../components/layout/Navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mainContent'>
      
      <Navbar />
      <Homepage />
    </main>
  )
}
