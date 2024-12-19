import React from 'react';
import { pageContent } from '../data';
import Page_Header from '@/components/Page_Header';
import Page_Why from '@/components/Page_Why';
import Page_For from '@/components/Page_For';
import DateForm from '@/components/DateForm';
import Advertissement from '@/components/Advertissement';
import Ready from '@/components/Ready';

function Page() {
    return (
        <div className="px-6 pt-20">
            <Page_Header data={pageContent[1]} /> 
            <main className="flex flex-col justify-center items-center mb-24">
                <section>
                    <Page_Why data={pageContent[1]}/>
                </section>
                <section>
                    <Page_For data={pageContent[1]} />
                </section>
                <section>
                    <Ready />
                </section>
                <section className="mt-6 lg:my-12 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl">
                    <h2 className="font-parisienne text-[2rem] font-semibold text-center mt-4 lg:text-[3rem]">Tarifs</h2>
                    <ul className="lg:text-[1.2rem]">
                        <li>Consultation d&apos;une heure (bilan + flacon) : 40 €</li>
                        <li>Recharge de flacon : 15 € ou offert avec un soin</li>
                    </ul>
            </section>
                <Advertissement item="les fleurs de bach" />
                <DateForm />
            </main>
        </div>
    )
}

export default Page;
