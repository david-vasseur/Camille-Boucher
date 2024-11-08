import Button from '@/components/Button'
import React from 'react'
import Page_Header from '@/components/Page_Header';
import Page_Why from '@/components/Page_Why';
import Page_For from '@/components/Page_For';
import { pageContent } from '../data';
import DateForm from '@/components/DateForm';

function Page() {
    return (
        <div className="px-6 pt-20">
            <Page_Header data={pageContent[2]} /> 
            <main className="flex flex-col justify-center items-center mb-24">
                <section>
                    <Page_Why data={pageContent[2]}/>
                </section>
                <section>
                    <Page_For data={pageContent[2]} />
                </section>
                <section>
                    <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à libérer vos tensions et retrouver votre bien-être ?</h2>
                    <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez équilibre et sérénité dans votre vie quotidienne.</p>
                </section>
                <Button to='/mon_histoire#contact' description='Contactez-moi...' />
                <section>
                    <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                    <ul>
                        <li>Séance d&apos;une heure : 70€</li>
                    </ul>
                </section>
                <section className="mb-10 mt-5">
                    <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                    <p className="p-4 text-justify font-semibold">&quot; Il est important de noter que le massage holistique, tout comme toute autre forme de médecine douce, ne remplace en aucun cas l&apos;avis ou le traitement d&apos;un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin.&quot;</p>
                </section>
                <DateForm />
            </main>
        </div>
    )
}

export default Page;
