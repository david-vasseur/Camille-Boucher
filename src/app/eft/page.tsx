import Button from '@/components/Button'
import React from 'react'
import { pageContent } from '../data';
import Page_Why from '@/components/Page_Why';
import Page_For from '@/components/Page_For';
import Page_Header from '@/components/Page_Header';
import DateForm from '@/components/DateForm';
import Advertissement from '@/components/Advertissement';

function Page() {

  return (
    <div className="px-6 pt-20">
        <Page_Header data={pageContent[0]} /> 
        <main className="flex flex-col justify-center items-center mb-24">
            <section>
                <Page_Why data={pageContent[0]}/>
            </section>
            <section>
                <Page_For data={pageContent[0]} />
            </section>
            <section className="mb-6 lg:my-12">
                <h2 className="font-parisienne text-[2rem] font-semibold p-4 text-center lg:text-[3rem]">Prêt(e) à libérer vos émotions et retrouver votre bien-être ?</h2>
                <div className=" block lg:flex lg:flex-col lg:items-center lg:gap-10 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:mt-10">
                    <p className="font-oldStandard pt-2 text-justify lg:text-[1.2rem] lg:w-[50vw] lg:text-center">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez sérénité et équilibre dans votre quotidien.</p>
                    <Button to='/mon_histoire#contact' description='Contactez-moi...' />
                </div>
            </section>
            
            <section className="mt-6 lg:my-12 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl">
                <h2 className="font-parisienne text-[2rem] font-semibold text-center mt-4 lg:text-[3rem]">Tarifs</h2>
                <ul className="lg:text-[1.2rem]">
                    <li>Première séance d&apos;1h30 : 70€</li>
                    <li>Séances suivantes d&apos;1h00 : 50€</li>
                    <li>Séances pour Ado/Enfants de 30 minutes : 30€</li>
                </ul>
            </section>
            <Advertissement />
            <div className="mx-auto">
                <DateForm />
            </div>
        </main>
    </div>
  )
}

export default Page;
