import { Inter } from 'next/font/google'
import Icon from '@mdi/react';
import Link from 'next/link'
import { mdiNewspaperVariantOutline, 
  mdiArrowLeft,
} from '@mdi/js';

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"
import AppIcon from "@/components/app-icon"

const inter = Inter({ subsets: ['latin'] })

export default function MembershipPage() {
  return (
    <div className='main-container'>
      <Header />
      
      <div className="content-area">
        <div className='mb-8 flex justify-left items-center relative'>
            <Link className='mr-auto ml-0 absolute' href='/'>
                <Icon path={mdiArrowLeft} size={1.5} />
            </Link>
            <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>Calon Anggota</p>
        </div>
        <div id='post-content'>
          <p className="mb-8">Calon Anggota ORARI bisa menjadi anggota dengan mengikuti Ujian Negara Amatir Radio (UNAR).</p>
          <iframe className="mx-auto mb-8 w-3/4 h-40 md:h-80" src="https://www.youtube.com/embed/PWCXitbKnzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <p>Sumber-sumber lainnya:</p>
          <ol>
            <li><a href='https://iar-ikrap.postel.go.id'>Situs SDPPI untuk Pendaftaran UNAR</a></li>
            <li><a href='https://www.youtube.com/watch?v=nLdUc7gvJHI&t=0s'>Cara Mendaftar UNAR</a></li>
            <li><a href='https://seenow.postel.go.id'>Soal-soal latihan UNAR (SEENOW)</a></li>
            <li><a href='https://iar-ikrap.postel.go.id/site/informasiUNAR'>Jadwal Pelaksanaan UNAR</a></li>
            <li><a href='https://orari.or.id'>Situs ORARI</a></li>
          </ol>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
