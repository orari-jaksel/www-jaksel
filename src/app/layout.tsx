import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ORARI Lokal Jakarta Selatan',
  description: 'Situs resmi ORARI Lokal Jakarta Selatan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center justify-center min-h-screen bg-csjs-tower md:bg-csjs-building bg-no-repeat bg-cover bg-center">
          {children}
        </div>
      </body>
    </html>
  )
}
