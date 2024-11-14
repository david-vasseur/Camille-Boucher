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

function Page_For({ data }: PageWhyProps) {
  return (
    <div>
        <h2 className="font-parisienne text-[2rem] font-semibold p-4 text-center lg:text-[3rem] lg:my-20">{data.titleFor}</h2>
        <div className="lg:flex lg:flex-col lg:gap-5 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:w-[80vw]">
          {data.contentFor.map(item => (
              <p key={item.id} className="font-oldStandard pt-2 text-justify lg:text-[1.2rem]"><strong>{item.strong}</strong>{item.content}</p>
          ))}
        </div>
    </div>
  )
}

export default Page_For;