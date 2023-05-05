import Image from 'next/image'
import { Inter } from 'next/font/google'
import LogoJaksel from '../../public/image/logo-jaksel.png'
import Icon from '@mdi/react';
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiHomeFlood, 
  mdiCardAccountDetailsOutline,
  mdiInformationOutline 
} from '@mdi/js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-csjs-building bg-no-repeat bg-cover bg-center">
      <div className='main-container'>
        <div className='flex flex-col md:flex-row items-center'>
          <Image src={ LogoJaksel } 
            className='w-20 h-20 md:w-28 md:h-28'
            alt="Logo ORARI Jakarta Selatan" 
            sizes="(max-width: 768px) 40vw,
            50vw"
          />
          <div className="mx-4 md:mx-8 mt-4 md:mt-0">
            <p className='text-slate-100 text-center md:text-left text-slate-100 text-xs md:text-4xl'>Organisasi Amatir Radio Indonesia</p>
            <p className='text-slate-100 text-center md:text-left text-slate-100 text-xl md:text-6xl'>Lokal Jakarta Selatan</p>
          </div>
        </div>

        <div className="bg-gray-200/50 rounded-lg mt-8 grid grid-cols-3 gap-4 md:gap-8 p-4 md:p-8">
          <div className="main-menu-item">
            <Icon path={mdiHeadset} size={2} />
            <p className="main-menu-item-text">Contest</p>
          </div>
          <div className="main-menu-item">
            <Icon path={mdiNewspaperVariantOutline} size={2} />
            <p className="main-menu-item-text">News</p>
          </div>
          <div className="main-menu-item">
            <Icon path={ mdiSchool } size={2} />
            <p className="main-menu-item-text">Education</p>
          </div>
          <div className="main-menu-item">
            <Icon path={mdiHomeFlood} size={2} />
            <p className="main-menu-item-text">CORE</p>
          </div>
          <div className="main-menu-item">
            <Icon path={mdiCardAccountDetailsOutline} size={2} />
            <p className="main-menu-item-text">Membership</p>
          </div>
          <div className="main-menu-item">
            <Icon path={mdiInformationOutline} size={2} />
            <p className="main-menu-item-text">About Us</p>
          </div>
        </div>
      </div>
    </div>
  )
}
