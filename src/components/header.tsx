import Image from 'next/image'
import LogoJaksel from '../../public/image/logo-jaksel.png'

export default function Header () {
    return (
      <div className='flex flex-col md:flex-row items-center'>
        <Image src={ LogoJaksel } 
          className='w-20 h-20 md:w-28 md:h-28'
          alt="Logo ORARI Jakarta Selatan" 
          sizes="(max-width: 768px) 40vw,
          50vw"
        />
        <div className="mx-4 md:mx-8 mt-4 md:mt-0">
          <p className='text-slate-100 text-center md:text-left text-slate-100 text-md md:text-4xl'>Organisasi Amatir Radio Indonesia</p>
          <p className='text-slate-100 text-center md:text-left text-slate-100 text-2xl md:text-6xl'>Lokal Jakarta Selatan</p>
        </div>
      </div>
    )
}