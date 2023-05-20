import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiHomeFlood, 
  mdiCardAccountDetailsOutline,
  mdiInformationOutline,
  mdiStepBackward,
  mdiHistory,
  mdiAccountMultipleOutline,
  mdiMapMarker,
  mdiArrowLeft
} from '@mdi/js';

import Header from '../../components/header'
import Footer from "../../components/sosmed-footer"

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
        <div className="main-menu-item">
          <Icon path={mdiHistory} size={2} />
          <p className="main-menu-item-text">History</p>
        </div>
        <Link href="/about/pengurus" className="main-menu-item">
          <Icon path={mdiAccountMultipleOutline} size={2} />
          <p className="main-menu-item-text">Pengurus</p>
        </Link>
        <div className="main-menu-item">
          <Icon path={mdiAccountMultipleOutline} size={2} />
          <p className="main-menu-item-text">DPP</p>
        </div>        
        <div className="main-menu-item">
          <Icon path={ mdiMapMarker } size={2} />
          <p className="main-menu-item-text">Location</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
