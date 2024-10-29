import Image from 'next/image';
import React from 'react';

interface ContentWhy {
    id: number;
    title: string;
    content: string;
  }

interface ContentFor {
    id: number;
    strong: string;
    content: string;
}
  
interface PageContent {
    id: number;
    titleHeader: string;
    contentHeader: string;
    imageHeader: string;
    titleWhy: string;
    resumeWhy: string;
    contentWhy: ContentWhy[];
    imageWhy: string;
    endWhy: string;
    titleFor: string;
    contentFor: ContentFor[];
  }

interface PageWhyProps {
    data: PageContent; 
}

function Page_Header({ data }: PageWhyProps) {
  return (
    <header>
        <h1 className="font-parisienne text-[3rem] text-center font-extrabold">{data.titleHeader}</h1>
        <p className="font-oldStandard text-justify mt-2 mb-2">{data.contentHeader}</p>
        <div className="w-[90vw] mt-2 mb-2">
            <Image src={data.imageHeader} alt="" className="rounded-2xl border-2 border-slate-200 shadow-lg" width={400} height={400} />
        </div>
    </header>
  )
}

export default Page_Header;