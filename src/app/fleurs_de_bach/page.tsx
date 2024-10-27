"use client"
import Button from '@/components/Button'
import React from 'react'
import { motion, useInView } from 'framer-motion';

function page() {
    const ref = React.useRef(null);
    const isInView = useInView(ref);
    return (
        <div>
            <header className="pt-20 p-4">
                <motion.h1 className="text-[3rem] text-center p-4 font-extrabold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5, duration: 1 }}
                >Les Fleurs de Bach</motion.h1>
                <motion.p className="text-justify mt-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .75, duration: 1 }}
                >Les fleurs de Bach sont des élixirs floraux qui visent à rétablir l'équilibre émotionnel et à favoriser le bien-être psychique. Développée par le Dr Edward Bach dans les années 1930, cette méthode naturelle aide à surmonter les émotions négatives en rétablissant l'harmonie intérieure.</motion.p>
            </header>
            <motion.main className="flex flex-col justify-center items-center mb-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[90vw] mt-2 mb-2">
                    <img src="images/bach1.JPG" alt="" className="rounded-2xl" />
                </div>
                <section>
                    <h2 className="text-[2rem] text-center mt-4 mb-4 font-bold">Pourquoi choisir les fleurs de Bach ?</h2>
                    <p className="text-justify p-4 mt-4 mb-4">Les fleurs de Bach reposent sur l'idée que nos émotions influencent notre santé globale. Ces remèdes naturels aident à libérer les blocages émotionnels et à améliorer la gestion du stress au quotidien. Chaque fleur est associée à un état émotionnel spécifique, permettant une approche personnalisée pour chaque individu.</p>
                    <motion.h3 className="text-[1.2rem] text-center font-semibold p-4"
                        ref={ref}
                        initial={{ x: "-100vw" }}
                        animate={isInView ? { x: 0 } : { x: "-100vw" }}
                        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    >Un soutien émotionnel sur mesure</motion.h3>
                    <motion.p className="p-10 pt-2 text-justify"
                        ref={ref}
                        initial={{ opacity: 0, x: "100vw" }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                    >Les fleurs de Bach sont faciles à intégrer dans votre quotidien. Chaque élixir est choisi pour répondre à vos émotions spécifiques, ce qui offre une approche centrée sur vous.</motion.p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Rétablir la sérénité intérieure</h3>
                    <p className="p-10 pt-2 text-justify">Cette méthode douce permet de calmer les émotions tumultueuses. En utilisant les fleurs appropriées, vous pouvez retrouver une paix intérieure et réduire les réactions émotionnelles excessives.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Harmoniser vos émotions</h3>
                    <p className="p-10 pt-2 text-justify">Les fleurs de Bach aident à équilibrer les émotions contradictoires. En ciblant des états comme la peur, la tristesse ou l'anxiété, elles favorisent une gestion plus sereine des émotions.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Accompagnement durant les transitions</h3>
                    <p className="p-10 pt-2 text-justify">Lors de périodes de changement ou de stress, les fleurs de Bach offrent un soutien précieux. Elles vous aident à renforcer votre résilience émotionnelle et à mieux gérer les défis de la vie.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Renforcer la confiance en soi</h3>
                    <p className="p-10 pt-2 text-justify">Certaines fleurs favorisent la confiance et l'estime de soi. Elles aident à surmonter les doutes et à développer une attitude positive face à soi-même et aux autres.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Diminuer l'anxiété et le stress</h3>
                    <p className="p-10 pt-2 text-justify">Les fleurs de Bach sont particulièrement efficaces pour apaiser l'anxiété. Elles aident à retrouver un état de calme et à mieux gérer les situations stressantes.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Favoriser l'harmonie personnelle</h3>
                    <p className="p-10 pt-2 text-justify">En rétablissant l'équilibre émotionnel, les fleurs de Bach aident à créer une sensation d'harmonie intérieure, favorisant ainsi un bien-être global et durable.</p>
                    <motion.div className="w-[90vw] mt-2 mb-2 m-auto overflow-hidden rounded-2xl shadow-xl">
                        <motion.img 
                            src="images/bach2.PNG" 
                            alt="" 
                            className="rounded-2xl" 
                            initial={{ scale: 1, filter: 'blur(0px)' }} 
                            animate={{ scale: 2, y: 55, x: -40, filter: "blur(2px)" }} 
                            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} 
                        />
                    </motion.div>


                <p className="p-4 text-justify">Les fleurs de Bach représentent une approche holistique du bien-être. En travaillant sur les émotions, elles permettent de créer un état d'harmonie entre le corps et l'esprit. En optant pour ce soutien émotionnel, vous choisissez une méthode naturelle et personnalisée qui vous accompagne vers un équilibre émotionnel durable. De plus, il est important de noter que les fleurs de Bach ne sont en rien incompatibles avec d'autres traitements médicaux, et elles sont également complémentaires aux autres techniques que je pratique. Que vous souhaitiez améliorer votre bien-être général ou faire face à des défis spécifiques, les fleurs de Bach peuvent être un allié précieux dans votre cheminement.</p>
                </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Ce que vous pouvez attendre d'une consultation sur les fleurs de Bach avec moi</h2>
                <p className="p-10 pt-2 text-justify"><strong>Un espace d'écoute empathique</strong> : Vous serez accueilli(e) dans un cadre chaleureux où chaque parole compte. Cet environnement est conçu pour que vous puissiez vous exprimer librement sur vos émotions et vos besoins.</p>
                <p className="p-10 pt-2 text-justify"><strong>Une approche individualisée</strong> : Avant de choisir les élixirs appropriés, nous discuterons ensemble de vos ressentis. Chaque consultation est adaptée à votre histoire et vos attentes.</p>
                <p className="p-10 pt-2 text-justify"><strong>Un moment de réflexion personnelle</strong> : Lors de la séance, vous aurez l'opportunité de prendre du recul sur vos émotions, ce qui favorisera un meilleur travail sur vous-même et votre bien-être.</p>
                <p className="p-10 pt-2 text-justify"><strong>Un suivi pour votre épanouissement</strong> : Après notre rencontre, je vous fournirai des conseils pour intégrer les fleurs de Bach dans votre vie quotidienne et maintenir l'harmonie que vous recherchez.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à transformer vos émotions et retrouver votre équilibre ?</h2>
                <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez prendre rendez-vous pour une consultation, n'hésitez pas à me contacter. Ensemble, nous travaillerons à améliorer votre bien-être émotionnel et mental.</p>
            </section>
            <Button to='/' description='Contactez-moi...' />
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                <ul>
                    <li>Consultation d'une heure : 60€</li>
                    <li>Forfait de 3 consultations : 160€</li>
                </ul>
            </section>
            <section className="mb-10 mt-5">
                <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                <p className="p-4 text-justify font-semibold">"Il est important de noter que les fleurs de Bach, tout comme toute autre forme de médecine douce, ne remplacent en aucun cas l'avis ou le traitement d'un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin."</p>
            </section>
            <Button to='/' description='Prendre un rendez-vous' />
        </motion.main>
    </div>
  )
}

export default page;

