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

    const handleClick = (id: number) => {
        const div = document.querySelector(`#div-why-${id}`);
        const text = document.querySelector(`#text-why-${id}`);
        if (div?.classList.contains(`open-div`)) {
            div.classList.remove('open-div')
        } else {
            div?.classList.add('open-div')
        }

        if (text?.classList.contains('open')) {
            text.classList.remove('open')
        } else {
            text?.classList.add('open');
        }
    }

    return (
        <section className="lg:flex lg:flex-col lg:justify-center lg:items-center">
            <h2 className="font-parisienne text-[2rem] text-center mt-4 mb-4 font-bold lg:text-[3rem]">{data.titleWhy}</h2>
            <div className="lg:flex lg:flex-col lg:gap-36 lg:items-center lg:justify-center lg:my-24 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:w-[80vw]">
                <p className="font-oldStandard text-justify mt-4 mb-4 lg:text-[1.2rem] lg:w-[60%] lg:text-center">{data.resumeWhy}</p>
                <div className="md:flex md:justify-center md:p-2 md:gap-[0.6rem] md-perspective">
                {data.contentWhy.map(item => (
                    <div onClick={() => {handleClick(item.id)}} key={item.id} id={`div-why-${item.id}`} className="md:flex md:flex-col md:justify-center md:p-2 md:h-[20vh] md:border-2 md:w-[9vw] md:border-slate-500 md:rounded-xl md:shadow-lg md:bg-gradient-to-r md:from-secondary_color md:to-fourth_color md-hover">
                            <Image alt='fond de la carte' src={item.image} width={300} height={300} className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"/>
                            <Slide side="left" width="100%" className="mx-auto md:min-h-[15vh] lg:flex lg:flex-col lg:justify-center">
                                <h3 className="font-oldStandard text-[1.2rem] text-center md:w-[100%] md:h-[100%] font-semibold mt-6 p-4 md:p-0 lg:text-[1.3rem] lg:mt-0 lg:contrast-150 lg:brightness-200 lg:font-bold lg:text-shadow-lg">{item.title}</h3>
                            </Slide>
                            <p id={`text-why-${item.id}`} className="font-oldStandard p-10 pt-2 text-justify md:w-[20vw] md:hidden">{item.content}</p>
                    </div>
                ))}
                </div>
                <div className="w-[90vw] mt-2 mb-2 m-auto md:hidden">
                    <Image src={data.imageWhy} alt="" className="rounded-2xl border-2 border-slate-200 shadow-lg" width={400} height={400} />
                </div>
                <p  className="font-oldStandard text-justify lg:text-[1.2rem] lg:w-[60%] lg:text-center">{data.endWhy}</p>
            </div>   
        </section>
    )
}

export default Page_Why