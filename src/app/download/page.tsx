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
  mdiInfinity,
  mdiCardAccountDetailsOutline,
  mdiIdCard,
  mdiFileSign,
  mdiFolderOpenOutline,
  mdiBookOutline,
  mdiCardBulletedOutline
} from '@mdi/js';

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"
import AppIcon from "@/components/app-icon"

const inter = Inter({ subsets: ['latin'] })

export default function DownloadPage() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <div className='col-span-3 mb-8 flex justify-left items-center relative'>
            <Link className='mr-auto ml-0 absolute' href='/'>
                <Icon path={mdiArrowLeft} size={1.5} />
            </Link>
            <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>Download</p>
        </div>
        <AppIcon href="#" title="QSL, Award, Certificate" icon={ mdiCardBulletedOutline } />
        <AppIcon href="#" title="Materi Muslok" icon={ mdiBookOutline } />
        <AppIcon href="#" title="Materi Rakerlok" icon={ mdiFolderOpenOutline } />
        <AppIcon href="#" title="Surat Keputusan" icon={ mdiFileSign } />
        <AppIcon href="#" title="eIAR" icon={ mdiIdCard } />
        <AppIcon href="#" title="eKTA" icon={ mdiCardAccountDetailsOutline } />
      </div>
      
      <Footer />
    </div>
  )
}
