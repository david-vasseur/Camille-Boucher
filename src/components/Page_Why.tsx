"use client"
import Image from 'next/image'
import React from 'react'
import Slide from './F_Slide'

interface ContentWhy {
    id: number;
    title: string;
    content: string;
    image:string;
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
        <section className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h2 className="font-parisienne text-[2rem] text-center mt-4 mb-4 font-bold lg:text-[3rem]">{data.titleWhy}</h2>
            <div className="lg:flex lg:flex-col lg:gap-36 lg:items-center lg:justify-center lg:my-24 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:w-[80vw]">
                <p className="font-oldStandard text-justify mt-4 mb-4 lg:text-[1.2rem] lg:w-[60%] lg:text-center lg:text-shadow">{data.resumeWhy}</p>
                <div className="lg:flex lg:flex-wrap lg:justify-center lg:p-2 lg:gap-[0.6rem]">
                    {data.contentWhy.map(item => (
                        <div
                        key={item.id}
                        className="lg:flex lg:flex-col lg:justify-center lg:p-2 lg:h-[30vh]  lg:w-[15vw] min-w-[14rem]  lg-container"
                        >
                            <div className="lg-card lg:border-slate-500 lg:rounded-xl lg:border-2">
                                <div className="lg-front lg:rounded-xl">
                                    <Image
                                    alt="fond de la carte"
                                    src={item.image}
                                    width={300}
                                    height={300}
                                    className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"
                                    />
                                    <Slide width="100%" className="mx-auto lg:min-h-[10vh] lg:flex lg:flex-col lg:justify-center lg:items-center ">
                                        <h3 className="font-oldStandard text-[1.2rem] text-center lg:h-[100%] font-semibold mt-6 p-4  lg:text-[1.2rem] lg:mt-0 lg:contrast-50 lg:brightness-200 lg:font-bold lg:text-shadow-lg">
                                            {item.title}
                                        </h3>
                                    </Slide>
                                </div>
                                <div className="lg-back lg:rounded-xl">
                                    <p className="font-oldStandard p-10 pt-2 text-justify lg:text-[.8rem] xl:text-[1rem] lg:text-center lg:p-1 lg:text-shadow">
                                    {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-[90vw] mt-2 mb-5 m-auto lg:hidden">
                    <Image src={data.imageWhy} alt="" className="rounded-2xl border-2 border-slate-200 shadow-lg" width={400} height={400} />
                </div>
                <p  className="font-oldStandard text-justify lg:text-[1.2rem] lg:w-[60%] lg:text-center lg:text-shadow">{data.endWhy}</p>
            </div>   
        </section>
    )
}

export default Page_Why