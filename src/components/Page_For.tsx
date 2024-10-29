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
        <h2 className="font-parisienne text-[2rem] font-semibold p-4 text-center">{data.titleFor}</h2>
        {data.contentFor.map(item => (
            <p key={item.id} className="font-oldStandard pt-2 text-justify"><strong>{item.strong}</strong>{item.content}</p>
        ))}
    </div>
  )
}

export default Page_For;