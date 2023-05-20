import Icon from '@mdi/react';
import Link from 'next/link'
import { 
    mdiArrowLeft
  } from '@mdi/js';

// Markdown import
import {micromark} from 'micromark'
import matter from 'gray-matter'
import path from 'path'

import Header from '@/components/header'
import Footer from "@/components/sosmed-footer"


const contentDir = "src/content/about-us"

export default async function About({ params }: { params: { slug: string } }) {

    const fullPath = path.join(process.cwd(), contentDir, `${params.slug}.md`);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter.read(fullPath);
    //console.log(matterResult);

    // Use remark to convert markdown into HTML string
    const processedContent = micromark(matterResult.content);   
    /*
    const processedContent = await unified()
        .use(remarkRehype)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    */

    return <div className='main-container'>
        <Header />

        <div className="content-area">
            <div className='mb-8 flex justify-left items-center relative'>
                <Link className='mr-auto ml-0 absolute' href='/'>
                    <Icon path={mdiArrowLeft} size={1.5} />
                </Link>
                <p className='text-2xl underline underline-offset-8 font-bold mx-auto'>{ matterResult.data.title }</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: processedContent }} id='post-content' />
        </div>

        <Footer />
    </div>
  }
  