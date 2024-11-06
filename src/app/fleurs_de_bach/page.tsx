import React from 'react';
import Button from '@/components/Button';
import { pageContent } from '../data';
import Page_Header from '@/components/Page_Header';
import Page_Why from '@/components/Page_Why';
import Page_For from '@/components/Page_For';

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
                    <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à transformer vos émotions et retrouver votre équilibre ?</h2>
                    <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez prendre rendez-vous pour une consultation, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons à améliorer votre bien-être émotionnel et mental.</p>
                </section>
                <Button to='/' description='Contactez-moi...' />
                <section>
                    <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                    <ul>
                        <li>Consultation d&apos;une heure (bilan + flacon) : 40 €</li>
                        <li>Recharge de flacon : 15 € ou offert avec un soin</li>
                    </ul>
                </section>
                <section className="mb-10 mt-5">
                    <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                    <p className="p-4 text-justify font-semibold">&quot;Il est important de noter que les fleurs de Bach, tout comme toute autre forme de médecine douce, ne remplacent en aucun cas l&apos;avis ou le traitement d&apos;un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin.&quot;</p>
                </section>
                <Button to='/' description='Prendre un rendez-vous' />
            </main>
        </div>
    )
}

export default Page;
