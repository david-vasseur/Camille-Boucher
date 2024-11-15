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
    <header className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-[100vh]">
        <h1 className="font-parisienne text-[3rem] text-center font-extrabold lg:text-[4rem]">{data.titleHeader}</h1>
        <div className="lg:flex lg:gap-10 lg:items-center lg:justify-center lg:my-24 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:w-[70vw]">
          <p className="font-oldStandard text-justify mt-2 mb-2 lg:w-[40vw] lg:text-[1.2rem] lg:text-shadow">{data.contentHeader}</p>
          
          <div className="w-[90vw] mt-2 mb-2 lg:w-[30vw]">
              <Image src={data.imageHeader} alt="" className="rounded-2xl border-2 border-slate-200 shadow-lg lg:w-[100%]" width={400} height={400} />
          </div>
        </div>
    </header>
  )
}

export default Page_Header;