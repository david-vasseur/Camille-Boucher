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
            >EFT</motion.h1>
            <motion.p className="text-justify mt-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .75, duration: 1 }}
            >L&apos;EFT (Emotional Freedom Technique), aussi appelée &quote;technique de libération émotionnelle&quote;, est une pratique psychocorporelle qui combine des éléments de l&apos;acupression et de la psychologie pour aider à réduire le stress émotionnel, les traumatismes et les douleurs physiques. Le processus consiste à tapoter doucement avec les doigts sur des points spécifiques du corps (semblables aux points d&apos;acupuncture) tout en se concentrant sur une émotion négative, un souvenir ou une douleur. Ainsi nous libérons de la charge émotionnelle en lien avec la problématique.</motion.p>
        </header>
        <motion.main className="flex flex-col justify-center items-center mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <div className="w-[90vw] mt-2 mb-2">
                <img src="images/Untitled design.PNG" alt="" className="rounded-2xl" />
            </div>
            <section>
                <h2 className="text-[2rem] text-center mt-4 mb-4 font-bold">Pourquoi choisir une séance d&apos;eft ?</h2>
                <p className="text-justify p-4 mt-4 mb-4">Choisir l&apos;EFT (Emotional Freedom Technique) peut offrir plusieurs avantages, en particulier si vous cherchez une approche simple, non invasive et complémentaire pour gérer les émotions, le stress ou les douleurs physiques. Voici quelques raisons de choisir l&apos;EFT :</p>
                    <motion.h3 className="text-[1.2rem] text-center font-semibold p-4"
                        ref={ref}
                        initial={{ x: "-100vw" }}
                        animate={isInView ? { x: 0 } : { x: "-100vw" }}
                        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    >Réduction rapide du stress et de l&apos;anxiété</motion.h3>
                    <motion.p className="p-10 pt-2 text-justify"
                        ref={ref}
                        initial={{ opacity: 0, x: "100vw" }}
                        animate={isInView ? { opacity: 1, x:0 } : {}}
                        transition={{ duration: 1 }}
                    >L&apos;EFT est réputée pour sa capacité à calmer rapidement le système nerveux. En tapotant sur des points d&apos;acupression tout en se concentrant sur une émotion négative, on peut diminuer le niveau de stress ressenti en quelques minutes.</motion.p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Accessible à tous et facile à pratiquer</h3>
                    <p className="p-10 pt-2 text-justify">L&apos;un des grands atouts de l&apos;EFT est qu&apos;elle est facile à apprendre et à appliquer. Elle ne nécessite aucun matériel, peut être pratiquée seul ou avec un praticien, et peut être utilisée n&apos;importe où, ce qui la rend accessible à tous.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Approche holistique</h3>
                    <p className="p-10 pt-2 text-justify">L&apos;EFT traite à la fois le corps et l&apos;esprit. En combinant la stimulation des points énergétiques du corps (semblables à l&apos;acupuncture) avec des techniques psychologiques, elle agit de manière globale sur les émotions, les pensées et les tensions physiques.</p>
                    <h3  className="text-[1.2rem] text-center font-semibold p-4">Soulagement émotionnel</h3>
                    <p  className="p-10 pt-2 text-justify">Pour ceux qui souffrent de traumatismes, de phobies, d&apos;anxiété, ou de blocages émotionnels, l&apos;EFT peut être une méthode efficace pour libérer des émotions refoulées ou douloureuses. Elle aide à se libérer des souvenirs ou émotions négatives qui perturbent la vie quotidienne.</p>
                    <h3  className="text-[1.2rem] text-center font-semibold p-4">Gestion des douleurs physiques</h3>
                    <p  className="p-10 pt-2 text-justify">De nombreuses personnes utilisent l&apos;EFT pour réduire ou soulager des douleurs physiques, qu&apos;elles soient chroniques ou liées à des tensions émotionnelles. Cette technique peut complémenter d&apos;autres formes de traitement de la douleur.</p>
                    <h3  className="text-[1.2rem] text-center font-semibold p-4">Approche complémentaire</h3>
                    <p  className="p-10 pt-2 text-justify">L&apos;EFT peut être utilisée en complément d&apos;autres approches thérapeutiques, qu&apos;il s&apos;agisse de thérapies cognitives, de la méditation, de la psychologie classique, ou même de traitements médicaux. Elle peut enrichir les pratiques déjà en place pour mieux gérer le stress ou la douleur.</p>
                    <h3  className="text-[1.2rem] text-center font-semibold p-4">Bienfaits sur la confiance et la performance</h3>
                    <p  className="p-10 pt-2 text-justify">En plus de réduire les émotions négatives, l&apos;EFT peut renforcer la confiance en soi et améliorer la performance, que ce soit dans le cadre professionnel, scolaire, ou sportif. En libérant les blocages émotionnels, elle aide à se sentir plus aligné avec ses objectifs.</p>
                <motion.div className="w-[90vw] mt-2 mb-2 m-auto"
                // ref={ref}
                // initial={{ opacity: 0 }}
                // animate={isInView ? { opacity: 1 } : { opacity:0 }}
                // transition={{ duration: 3, type: "spring" }}
                >
                    <img src="images/moi.PNG" alt="" className="rounded-2xl" />
                </motion.div>
                <p  className="p-4 text-justify">En résumé, l&apos;EFT peut être un bon choix pour ceux qui cherchent à améliorer leur bien-être émotionnel et physique de façon rapide, simple et efficace, tout en intégrant une approche globale et complémentaire.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Ce que vous pouvez attendre d&apos;une séance d&apos;EFT avec moi</h2>
                <p className="p-10 pt-2 text-justify"><strong>Une approche personnalisée :</strong> Chaque personne est unique, c&apos;est pourquoi j&apos;adapte chaque séance en fonction de vos ressentis et de votre progression.</p>
                <p className="p-10 pt-2 text-justify"><strong>Un espace sécurisé :</strong> Je crée un environnement d&apos;écoute bienveillante et sans jugement, pour que vous vous sentiez en confiance tout au long du processus.</p>
                <p className="p-10 pt-2 text-justify"><strong>Des résultats progressifs :</strong> L&apos;EFT permet souvent de ressentir un soulagement rapide, même si parfois plusieurs séances peuvent être nécessaires pour des problématiques plus profondes.</p>
                <p className="p-10 pt-2 text-justify"><strong>Une méthode douce et non-invasive :</strong> L&apos;EFT utilise de simples tapotements et des affirmations, sans aucun contact direct et sans effort physique intense.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à libérer vos émotions et retrouver votre bien-être ?</h2>
                <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez sérénité et équilibre dans votre quotidien.</p>
            </section>
            <Button to='/' description='Contactez-moi...' />
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                <ul>
                    <li>Première séance d&apos;1h30 : 70€</li>
                    <li>Séances suivantes d&apos;1h00 : 50€</li>
                    <li>Séances pour Ado/Enfants de 30 minutes : 30€</li>
                </ul>
            </section>
            <section className="mb-10 mt-5">
                <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                <p className="p-4 text-justify font-semibold">&quote; Il est important de noter que l&apos;EFT, ainsi que toute autre forme de médecine douce, ne remplace en aucun cas l&apos;avis ou le traitement d&apos;un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin &quote;</p>
            </section>
            <Button to='/' description='Prendre un rendez-vous'/>
        </motion.main>
    </div>
  )
}

export default Page
