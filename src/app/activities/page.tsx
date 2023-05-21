import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiMicrophone,
  mdiArrowLeft,
  mdiBroadcast
} from '@mdi/js';

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"
import AppIcon from '@/components/app-icon';

const inter = Inter({ subsets: ['latin'] })

export default function ActivitiesPage() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <div className='col-span-3 mb-8 flex justify-left items-center relative'>
            <Link className='mr-auto ml-0 absolute' href='/'>
                <Icon path={mdiArrowLeft} size={1.5} />
            </Link>
            <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>Activities</p>
        </div>

        <AppIcon href="#" title="Net Lokal" icon={ mdiBroadcast } />
        <AppIcon href="#" title="Contest" icon={ mdiHeadset } />
        <AppIcon href="#" title="Special Event Station" icon={ mdiMicrophone } />
        <AppIcon href="#" title="Education" icon={ mdiSchool } />
    
      </div>
      
      <Footer />
    </div>
  )
}
