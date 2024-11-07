import Button from '@/components/Button'
import React from 'react'
import { pageContent } from '../data';
import Page_Why from '@/components/Page_Why';
import Page_For from '@/components/Page_For';
import Page_Header from '@/components/Page_Header';

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
            <section className="mb-6">
                <h2 className="font-parisienne text-[2rem] font-semibold p-4 text-center">Prêt(e) à libérer vos émotions et retrouver votre bien-être ?</h2>
                <p className="font-oldStandard pt-2 text-justify">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez sérénité et équilibre dans votre quotidien.</p>
            </section>
            <Button to='/' description='Contactez-moi...' />
            <section className="mt-6">
                <h2 className="font-parisienne text-[2rem] font-semibold text-center mt-4">Tarifs</h2>
                <ul>
                    <li>Première séance d&apos;1h30 : 70€</li>
                    <li>Séances suivantes d&apos;1h00 : 50€</li>
                    <li>Séances pour Ado/Enfants de 30 minutes : 30€</li>
                </ul>
            </section>
            <section className="mb-10 mt-5">
                <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                <p className="p-4 text-justify font-semibold">&quot; Il est important de noter que l&apos;EFT, ainsi que toute autre forme de médecine douce, ne remplace en aucun cas l&apos;avis ou le traitement d&apos;un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin &quot;</p>
            </section>
            <Button to='mailto:camille.b.35@hotmail.fr' description='Prendre un rendez-vous'/>
        </main>
    </div>
  )
}

export default Page;
