import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContactForm from './contactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className="App">
      <ContactForm />
  </div> 
  )
}
