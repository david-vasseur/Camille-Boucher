"use client"
import Button from '@/components/Button'
import React from 'react'
import { motion, useInView } from 'framer-motion';

function Page() {
    const ref = React.useRef(null);
    const isInView = useInView(ref);
    return (
        <div>
            <header className="pt-20 p-4">
                <motion.h1 className="text-[3rem] text-center p-4 font-extrabold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5, duration: 1 }}
                >Massage Holistique</motion.h1>
                <motion.p className="text-justify mt-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .75, duration: 1 }}
                >Le massage holistique est une approche intégrative qui vise à rétablir l'équilibre entre le corps, l'esprit et l'âme. En combinant plusieurs techniques de massage, il s'adapte aux besoins spécifiques de chaque individu, offrant une expérience de bien-être unique.</motion.p>
            </header>
            <motion.main className="flex flex-col justify-center items-center mb-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[90vw] mt-2 mb-2">
                    <img src="images/massage1.JPG" alt="" className="rounded-2xl" />
                </div>
                <section>
                    <h2 className="text-[2rem] text-center mt-4 mb-4 font-bold">Pourquoi choisir un massage holistique ?</h2>
                    <p className="text-justify p-4 mt-4 mb-4">Le massage holistique repose sur l'idée que le bien-être de l'individu est une harmonie entre le corps et l'esprit. Ce type de massage aide à soulager les tensions physiques et émotionnelles, favorisant ainsi une sensation de paix intérieure. Chaque séance est personnalisée, prenant en compte vos besoins et vos attentes.</p>
                    <motion.h3 className="text-[1.2rem] text-center font-semibold p-4"
                        ref={ref}
                        initial={{ x: "-100vw" }}
                        animate={isInView ? { x: 0 } : { x: "-100vw" }}
                        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    >Une approche individualisée et respectueuse</motion.h3>
                    <motion.p className="p-10 pt-2 text-justify"
                        ref={ref}
                        initial={{ opacity: 0, x: "100vw" }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                    >Le massage holistique est conçu pour s'adapter à vos besoins spécifiques. Aucune manipulation douloureuse n'est pratiquée, et chaque séance vise à améliorer votre bien-être global en intégrant des techniques variées.</motion.p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Diminuer le stress au quotidien</h3>
                    <p className="p-10 pt-2 text-justify">Ce massage permet de calmer le mental et de réduire les tensions physiques et émotionnelles. En rétablissant l'équilibre, il vous aide à retrouver un état de relaxation profonde et de sérénité.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Émotionnellement apaisant</h3>
                    <p className="p-10 pt-2 text-justify">En agissant sur les points de tension, le massage holistique favorise la libération des émotions refoulées. Il est efficace pour apaiser les peurs et l'anxiété, contribuant à un équilibre émotionnel durable.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Support lors des changements de vie</h3>
                    <p className="p-10 pt-2 text-justify">Que vous traversiez des changements personnels ou professionnels, le massage holistique vous offre un soutien précieux. Il aide à clarifier vos pensées et à renforcer votre confiance pour avancer avec sérénité.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Éveiller votre sensibilité corporelle</h3>
                    <p className="p-10 pt-2 text-justify">En intégrant des techniques de relaxation et de respiration, le massage holistique favorise une meilleure connexion entre votre corps et votre esprit, vous aidant à vous sentir plus aligné(e) et conscient(e) de vous-même.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Soulagement des douleurs physiques</h3>
                    <p className="p-10 pt-2 text-justify">Le massage holistique n'agit pas uniquement sur le bien-être mental. Il soulage également les douleurs physiques, qu'il s'agisse de tensions musculaires ou de douleurs chroniques, en favorisant la circulation et la relaxation musculaire.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Rétablir l'équilibre énergétique</h3>
                    <p className="p-10 pt-2 text-justify">En travaillant sur différents points du corps, ce massage aide à rétablir l'équilibre énergétique, favorisant une sensation de vitalité et de bien-être global.</p>
                <motion.div className="w-[90vw] mt-2 mb-2 m-auto">
                    <img src="images/moi.PNG" alt="" className="rounded-2xl" />
                </motion.div>
                <p className="p-4 text-justify">Le massage holistique est bien plus qu'une simple technique de relaxation. C'est une approche globale qui prend en compte votre bien-être physique, émotionnel et spirituel. En choisissant un massage holistique, vous optez pour une méthode douce et efficace qui favorise la restauration de l'équilibre dans votre vie. Que vous souhaitiez vous détendre, retrouver votre énergie ou surmonter des défis personnels, ce massage est un accompagnement précieux sur votre chemin vers le bien-être.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Ce que vous pouvez attendre d'un massage holistique avec moi</h2>
                <p className="p-10 pt-2 text-justify"><strong>Un environnement apaisant</strong> : Vous serez accueilli(e) dans un cadre calme et serein, propice à la relaxation et à l'évasion. L'ambiance est conçue pour vous détendre dès votre arrivée.</p>
                <p className="p-10 pt-2 text-justify"><strong>Une approche centrée sur vous</strong> : Chaque séance est unique. Avant de commencer, nous échangerons sur vos attentes et vos besoins afin de personnaliser le massage selon vos préférences.</p>
                <p className="p-10 pt-2 text-justify"><strong>Un moment de lâcher-prise</strong> : Pendant la séance, vous aurez l'occasion de vous détendre complètement, permettant à votre corps de relâcher les tensions accumulées et de retrouver un état de bien-être profond.</p>
                <p className="p-10 pt-2 text-justify"><strong>Des conseils pour prolonger le bien-être</strong> : Après votre séance, nous discuterons des ressentis et des techniques à intégrer dans votre quotidien pour maintenir les bénéfices du massage sur le long terme.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à libérer vos tensions et retrouver votre bien-être ?</h2>
                <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez équilibre et sérénité dans votre vie quotidienne.</p>
            </section>
            <Button to='/' description='Contactez-moi...' />
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                <ul>
                    <li>Séances de 45 minutes à 1 heure : 60€</li>
                    <li>Forfait de 3 séances : 160€</li>
                </ul>
            </section>
            <section className="mb-10 mt-5">
                <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                <p className="p-4 text-justify font-semibold">" Il est important de noter que le massage holistique, tout comme toute autre forme de médecine douce, ne remplace en aucun cas l'avis ou le traitement d'un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin."</p>
            </section>
            <Button to='/' description='Prendre un rendez-vous' />
        </motion.main>
    </div>
  )
}

export default Page
