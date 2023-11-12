import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
if (typeof window === "undefined") { /* we're on the server */ }
export const metadata = {
  title: 'Facebook clone',
  description: 'Facebook clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
