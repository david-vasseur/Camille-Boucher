"use client"
import Button from '@/components/Button';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

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
                >Le Reiki</motion.h1>
                <motion.p className="text-justify mt-2 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .75, duration: 1 }}
                >Le Reiki est une méthode de soin énergétique douce et naturelle, qui vise à rétablir l&apos;équilibre du corps et de l&apos;esprit. Originaire du Japon, le mot Reiki signifie &quote;énergie vitale universelle&quote; (Rei : universel, Ki : énergie). Cette pratique consiste à canaliser l&apos;énergie universelle à travers les mains pour stimuler les capacités d&apos;auto-guérison du corps.</motion.p>
            </header>
            <motion.main className="flex flex-col justify-center items-center mb-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[90vw] mt-2 mb-2">
                    <Image src="/camille/images/reiki1.PNG" alt="" className="rounded-2xl" width={400} height={300} />
                </div>
                <section>
                    <h2 className="text-[2rem] text-center mt-4 mb-4 font-bold">Pourquoi choisir un soin energétique ?</h2>
                    <p className="text-justify p-4 mt-4 mb-4">Le Reiki repose sur l&apos;idée que, comme tout ce qui est vivant, notre corps est traversé par une énergie vitale. Lorsque cette énergie est déséquilibrée ou bloquée, des malaises, des tensions ou des maladies peuvent apparaître. Grâce à l&apos;imposition des mains sur ou légèrement au-dessus du corps, le praticien canalise l&apos;énergie universelle et la transmet à la personne qui reçoit le soin, afin de rééquilibrer son flux énergétique.</p>
                    <motion.h3 className="text-[1.2rem] text-center font-semibold p-4"
                        ref={ref}
                        initial={{ x: "-100vw" }}
                        animate={isInView ? { x: 0 } : { x: "-100vw" }}
                        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                    >Approche douce, non-invasive et naturelle</motion.h3>
                    <motion.p className="p-10 pt-2 text-justify"
                        ref={ref}
                        initial={{ opacity: 0, x: "100vw" }}
                        animate={isInView ? { opacity: 1, x:0 } : {}}
                        transition={{ duration: 1 }}
                    >Le Reiki est une méthode de soin naturelle et non-invasive. Il n&apos;y a pas de manipulation physique ou de médication, et les séances sont totalement adaptées à vos besoins. Le soin est compatible avec d&apos;autres traitements médicaux ou thérapies, et convient à tous, y compris les enfants et les personnes âgées.</motion.p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Réduction du stress et de l&apos;anxiété</h3>
                    <p className="p-10 pt-2 text-justify">Le Reiki est une technique qui permet de calmer le mental et de réduire les tensions physiques et émotionnelles. En rééquilibrant votre énergie, il vous aide à retrouver un état de paix intérieure, à lâcher prise et à diminuer significativement le stress.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Harmonisation des émotions</h3>
                    <p className="p-10 pt-2 text-justify">En agissant directement sur l&apos;énergie de votre corps, le Reiki permet de libérer les émotions bloquées ou refoulées. Il est particulièrement efficace pour apaiser les peurs, l&apos;anxiété ou la tristesse, et vous aide à retrouver un équilibre émotionnel durable.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Soutien dans les périodes de transition</h3>
                    <p className="p-10 pt-2 text-justify">Que vous traversiez une période de changement personnel ou professionnel, une perte, ou une situation difficile, le Reiki vous accompagne en favorisant la clarté mentale et en vous apportant la force nécessaire pour avancer avec plus de sérénité et de confiance.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Renforcement du système immunitaire</h3>
                    <p className="p-10 pt-2 text-justify">Le Reiki peut aider à stimuler les capacités d&apos;auto-guérison de votre corps. En favorisant la relaxation et en diminuant les tensions, il permet à votre organisme de se régénérer plus efficacement, ce qui peut renforcer votre système immunitaire et améliorer votre santé globale.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Soin complémentaire pour les douleurs physiques</h3>
                    <p className="p-10 pt-2 text-justify">Le Reiki ne se limite pas à l&apos;esprit. Il agit aussi sur le corps, en aidant à soulager les douleurs et les tensions physiques. Que vous souffriez de douleurs chroniques, de tensions musculaires ou de maux de tête, le soin énergétique peut vous apporter un soulagement naturel et profond.</p>
                    <h3 className="text-[1.2rem] text-center font-semibold p-4">Connexion spirituelle et équilibre énergétique</h3>
                    <p className="p-10 pt-2 text-justify">Le Reiki permet de reconnecter avec soi-même à un niveau plus profond. Il favorise une harmonisation énergétique, vous aidant à vous sentir aligné(e) avec votre corps, votre esprit et votre environnement. Cela vous permet de vous sentir plus enraciné(e) et en paix avec ce qui vous entoure.</p>
                <motion.div className="w-[90vw] mt-2 mb-2 m-auto">
                    <Image src="/camille/images/reiki2.PNG" alt="" className="rounded-2xl" width={400} height={300} />
                </motion.div>
                <p className="p-4 text-justify">Le Reiki est bien plus qu&apos;une simple technique de relaxation. C&apos;est un soin énergétique complet qui agit sur les plans physique, émotionnel et spirituel. En choisissant un soin Reiki, vous faites le choix d&apos;une méthode douce et naturelle qui vous aidera à restaurer l&apos;harmonie dans votre vie et à renforcer votre bien-être global. Que vous souhaitiez vous détendre, vous reconnecter à vous-même ou faire face à des défis personnels, le Reiki est un accompagnement précieux sur votre chemin de transformation.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Ce que vous pouvez attendre d&apos;un soin energétique avec moi</h2>
                <p className="p-10 pt-2 text-justify"><strong>Un cadre chaleureux et confortable</strong> : vous bénéficierez d&apos;un environnement familier et apaisant, propice à la relaxation. Je créerai une ambiance douce pour vous aider à vous sentir à l&apos;aise.</p>
                <p className="p-10 pt-2 text-justify"><strong>Une écoute attentive et personnalisée</strong> : avant la séance, nous discuterons de vos besoins spécifiques afin d&apos;adapter le soin à vos attentes. Chaque séance est unique et centrée sur vous.</p>
                <p className="p-10 pt-2 text-justify"><strong>Une relaxation profonde</strong> : pendant la séance, je vais canaliser l&apos;énergie du Reiki pour favoriser un état de relaxation profonde, vous permettant de lâcher prise et de ressentir une sensation de bien-être.</p>
                <p className="p-10 pt-2 text-justify"><strong>Un suivi adapté à votre quotidien</strong> : après la séance, nous échangerons sur votre expérience. Je vous donnerai des conseils pratiques pour intégrer les bienfaits du Reiki dans votre vie quotidienne.</p>
            </section>
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center">Prêt(e) à libérer vos émotions et retrouver votre bien-être ?</h2>
                <p className="p-10 pt-2 text-justify">Si vous avez des questions ou souhaitez réserver une séance, n&apos;hésitez pas à me contacter. Ensemble, nous travaillerons pour que vous retrouviez sérénité et équilibre dans votre quotidien.</p>
            </section>
            <Button to="/" description="Contactez-moi..." />
            <section>
                <h2 className="text-[2rem] font-semibold p-4 text-center mt-4">Tarifs</h2>
                <ul>
                    <li>Séances de 45 minutes à 1 heure : 60€</li>
                    <li>Forfait de 3 seances : 160€</li>
                </ul>
            </section>
            <section className="mb-10 mt-5">
                <h2 className="text-[2rem] font-semibold p-4 text-center">Avertissement</h2>
                <p className="p-4 text-justify font-semibold">Il est important de noter que le Reiki, ainsi que toute autre forme de médecine douce, ne remplace en aucun cas l&apos;avis ou le traitement d&apos;un professionnel de santé qualifié. Pour toute condition médicale, il est essentiel de consulter un médecin.</p>
            </section>
            <Button to="/" description="Prendre un rendez-vous" />
        </motion.main>
    </div>
  );
}

export default Page;
