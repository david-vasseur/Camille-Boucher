import Image from 'next/image'
import React from 'react'
import Slide from './F_Slide'

interface ContentWhy {
    id: number;
    title: string;
    content: string;
  }
  
interface PageContent {
    id: number;
    titleWhy: string;
    resumeWhy: string;
    contentWhy: ContentWhy[];
    imageWhy: string;
    endWhy: string;
  }

interface PageWhyProps {
    data: PageContent; 
}

function Page_Why({ data }: PageWhyProps) {
  return (
    <div>
        <h2 className="font-parisienne text-[2rem] text-center mt-4 mb-4 font-bold">{data.titleWhy}</h2>
                <p className="font-oldStandard text-justify mt-4 mb-4">{data.resumeWhy}</p>
                {data.contentWhy.map(item => (
                    <React.Fragment key={item.id}>
                        <Slide side="left" width="100%" className="mx-auto">
                            <h3 className="font-oldStandard text-[1.2rem] text-center font-semibold mt-6 p-4">{item.title}</h3>
                        </Slide>
                        <p className="font-oldStandard p-10 pt-2 text-justify">{item.content}</p>
                    </React.Fragment>
                ))}
                <div className="w-[90vw] mt-2 mb-2 m-auto">
                    <Image src={data.imageWhy} alt="" className="rounded-2xl border-2 border-slate-200 shadow-lg" width={400} height={400} />
                </div>
                <p  className="font-oldStandard text-justify">{data.endWhy}</p>
            
    </div>
  )
}

export default Page_Why