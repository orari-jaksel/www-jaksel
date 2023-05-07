import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link';
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiHomeFlood, 
  mdiCardAccountDetailsOutline,
  mdiInformationOutline,
} from '@mdi/js';

import Header from '../components/header'
import Footer from "../components/sosmed-footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      
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
          <p className="main-menu-item-text">Jaksel Peduli</p>
        </div>
        <div className="main-menu-item">
          <Icon path={mdiCardAccountDetailsOutline} size={2} />
          <p className="main-menu-item-text">Membership</p>
        </div>
        <Link href='/about' className="main-menu-item">
            <Icon path={mdiInformationOutline} size={2} />
            <p className="main-menu-item-text">About Us</p>
        </Link>
      </div>
      
      <Footer />
    </div>
  )
}
