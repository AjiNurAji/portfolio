import { Gantari } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const gantari = Gantari({ subsets: ['latin'] })

export const metadata = {
  title: "Aji Nur Aji",
  keyword: [
    "ajinuraji",
    "Aji Nur Aji",
    "aji nur aji",
    "aji",
    "nur",
    "portofolio aji",
    "portfolio aji",
    "portfolio",
    "portofolio",
  ],
  authors: [{ name: "Aji Nur Aji", url: "https://www.instagram.com/ajnrji_" }],
  description:
    "a new graduate majoring in software engineering who can create websites with Nextjs, Laravel, and Reactjs.",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${gantari.className} bg-dark text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;