import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiNewspaperVariantOutline, 
  mdiHistory,
  mdiAccountMultipleOutline,
  mdiMapMarker,
  mdiArrowLeft,
  mdiAccountSupervisorOutline
} from '@mdi/js';

import Header from '../../components/header'
import Footer from "../../components/sosmed-footer"
import AppIcon from '@/components/app-icon';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <div className='col-span-3 mb-8 flex justify-left items-center relative'>
            <Link className='mr-auto ml-0 absolute' href='/'>
                <Icon path={mdiArrowLeft} size={1.5} />
            </Link>
            <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>About Us</p>
        </div>

        <AppIcon href="#" title="History" icon={ mdiHistory } />
        <AppIcon href="/about/pengurus" title="Pengurus" icon={ mdiAccountMultipleOutline } />
        <AppIcon href="#" title="DPP" icon={ mdiAccountSupervisorOutline } />
        <AppIcon href="#" title="Location" icon={ mdiMapMarker } />

      </div>
      
      <Footer />
    </div>
  )
}
