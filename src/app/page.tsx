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
  mdiDownloadBoxOutline,
} from '@mdi/js';

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"
import AppIcon from "@/components/app-icon"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area grid grid-cols-3">
        <AppIcon href="/activities" title="Activities" icon={ mdiCalendarBlankOutline } />
        <AppIcon href="#" title="News" icon={ mdiNewspaperVariantOutline } />
        <AppIcon href="/membership" title="Membership" icon={ mdiCardAccountDetailsOutline } />
        <AppIcon href="#" title="Jaksel Peduli" icon={ mdiHomeFlood } />
        <AppIcon href="/about" title="About Us" icon={ mdiInformationOutline } />
        <AppIcon href="/download" title="Download" icon={ mdiDownloadBoxOutline } />
      </div>
      
      <Footer />
    </div>
  )
}
