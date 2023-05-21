import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link';
import { mdiNewspaperVariantOutline, 
  mdiHeadset, 
  mdiSchool, 
  mdiHomeFlood, 
  mdiCardAccountDetailsOutline,
  mdiInformationOutline,
  mdiCalendarBlankOutline,
  mdiDownloadBoxOutline
} from '@mdi/js';

import Header from '../components/header'
import Footer from "../components/sosmed-footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <div className="main-menu-item">
          <Icon path={mdiCalendarBlankOutline} size={2} />
          <p className="main-menu-item-text">Activities</p>
        </div>
        <div className="main-menu-item">
          <Icon path={mdiNewspaperVariantOutline} size={2} />
          <p className="main-menu-item-text">News</p>
        </div>
        <div className="main-menu-item">
          <Icon path={mdiCardAccountDetailsOutline} size={2} />
          <p className="main-menu-item-text">Membership</p>
        </div>
        <div className="main-menu-item">
          <Icon path={mdiHomeFlood} size={2} />
          <p className="main-menu-item-text">Jaksel Peduli</p>
        </div>
        <Link href='/about' className="main-menu-item">
            <Icon path={mdiInformationOutline} size={2} />
            <p className="main-menu-item-text">About Us</p>
        </Link>
        <div className="main-menu-item">
          <Icon path={mdiDownloadBoxOutline} size={2} />
          <p className="main-menu-item-text">Download</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
