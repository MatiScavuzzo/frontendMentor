import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'QR Code - Frontend Mentor',
  description: 'Frontend Mentor',
  icons: {
    icon: '/favicon-32x32.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
