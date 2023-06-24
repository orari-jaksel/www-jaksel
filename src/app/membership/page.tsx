import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiRadioHandheld,
  mdiMicrophone,
  mdiArrowLeft,
  mdiAbTesting,
  mdiHumanGreeting,
  mdiAutorenew,
  mdiArrowTopRightBoldOutline,
  mdiInfinity
} from '@mdi/js';

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"
import AppIcon from "@/components/app-icon"

const inter = Inter({ subsets: ['latin'] })

export default function MembershipPage() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <div className='col-span-3 mb-8 flex justify-left items-center relative'>
            <Link className='mr-auto ml-0 absolute' href='/'>
                <Icon path={mdiArrowLeft} size={1.5} />
            </Link>
            <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>Membership</p>
        </div>
        <AppIcon href="/membership/calon-anggota" title="Calon Anggota" icon={ mdiAbTesting } />
        <AppIcon href="#" title="Anggota Baru" icon={ mdiHumanGreeting } />
        <AppIcon href="#" title="Perpanjangan" icon={ mdiAutorenew } />
        <AppIcon href="#" title="Kenaikan Tingkat" icon={ mdiArrowTopRightBoldOutline } />
        <AppIcon href="#" title="IAR Seumur Hidup" icon={ mdiInfinity } />
      </div>
      
      <Footer />
    </div>
  )
}
