import Image from 'next/image'
import { Inter } from 'next/font/google'
import LogoJaksel from '../../public/image/logo-jaksel.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-csjs-building bg-no-repeat bg-cover bg-center">
      <div className='main-container'>
        <div className='flex'>
          <Image src={ LogoJaksel } 
            className='w-16 h-16 md:w-28 md:h-28'
            alt="Logo ORARI Jakarta Selatan" 
            sizes="(max-width: 768px) 10vw,
            (max-width: 1200px) 20vw,
            30vw"
          />
          <div className="mx-4 md:mx-8">
            <p className='text-slate-100 text-lg md:text-4xl'>Organisasi Amatir Radio Indonesia</p>
            <p className='text-slate-100 text-3xl md:text-6xl'>Lokal Jakarta Selatan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
