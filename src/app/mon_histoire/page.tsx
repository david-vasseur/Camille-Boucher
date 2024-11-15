import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAt, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa6'

function Page() {
  return (
    <div className="mt-20 mx-auto lg:flex lg:flex-col max-w-[1920px] w-[90vw] lg:w-[80vw] text-shadow">
        <header className="p-2 flex flex-col gap-1 items-center">
            <h1 className="font-parisienne text-center text-[2.8rem] font-bold">Qui suis-je ?</h1>
            <div className="relative rounded-full border-gradient border-2 overflow-hidden mt-10 h-64 w-64 z-5">
            <Image 
                src="/images/IMG_8243.JPG" 
                alt="profil" 
                width={300} 
                height={300} 
                className="relative h-full w-full rounded-full object-cover z-0 image-before" 
            />
            </div>
        </header>

        <main className="flex flex-col gap-10">
            <h3 className=" font-parisienne w-[80vw] lg:w-[50vw] mx-auto mt-4 text-center mb-2 text-[1.8rem] lg:text-[3rem]">&quot; Le véritable bien être réside dans l&apos;équilibre entre le corps, l&apos;esprit et l&apos;ame... &quot;</h3>
            <section className="mt-10">
                <div className="lg:bg-slate-200 lg:shadow-xl lg:p-8 ">
                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem]">
                        Mon parcours vers les médecines douces et le soin aux autres a été un chemin plein de découvertes. J&apos;ai commencé ma carrière dans l&apos;horticulture, puis dans le médico-social, mais au fil du temps, j&apos;ai développé une vraie passion pour le développement personnel et la spiritualité. Il y a 20 ans, j&apos;ai découvert que j&apos;avais un don pour soigner avec mes mains, une expérience qui a complètement changé ma façon de voir le bien-être. Depuis, j&apos;ai suivi plusieurs formations pour approfondir mes compétences et offrir un accompagnement plus complet.
                    </p>
                </div>
                
                <div className="min-h-[35rem] mt-10 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl">
                    <Image
                    src="/images/meditation.avif"
                    alt="meditation"
                    width={500}
                    height={500}
                    className="rounded-[25px] shadow-lg float-left mr-14 mb-5 lg:h-[30rem] lg:w-[35rem]"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem] lg:mt-14">
                        En 2020, j&apos;ai entrepris ma formation pour devenir maître REIKI au centre de formation MAUNA à Calvisson (30). Cette expérience a été une véritable transformation pour moi. Pendant plusieurs semaines, j&apos;ai plongé dans l&apos;univers du Reiki, apprenant à canaliser l&apos;énergie universelle et à l&apos;utiliser pour favoriser la guérison et le bien-être. J&apos;ai découvert l&apos;importance de la méditation, des symboles et des mantras, ainsi que des techniques de relaxation et de rééquilibrage énergétique. Les séances pratiques m&apos;ont permis de développer mes compétences et d&apos;aller à ma rencontre et celle des autres. Ce parcours a renforcé ma connexion avec ma propre spiritualité. Devenir maître Reiki, me permet d&apos;accompagner les autres sur leur chemin de guérison avec compassion et respect.
                    </p>
                </div>

                <div className="min-h-[35rem] mt-10 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl">
                    <Image
                    src="/images/huiles.jpg"
                    alt="huiles"
                    width={500}
                    height={500}
                    className="rounded-[25px] shadow-lg float-right ml-14 mb-5 lg:h-[30rem] lg:w-[35rem]"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem] lg:mt-14">
                        En 2021, j&apos;ai suivi une formation en massage holistique à l&apos;école Synergie Naturopathie, une étape essentielle dans mon parcours de praticienne en médecines douces. Cette formation m&apos;a permis d&apos;approfondir mes connaissances sur le corps humain et d&apos;apprendre des techniques variées pour favoriser la détente et le bien-être. Au cours de cette formation, j&apos;ai découvert l&apos;importance d&apos;une approche globale, prenant en compte non seulement les tensions physiques, mais aussi les aspects émotionnels et énergétiques de chaque personne. J&apos;ai appris à utiliser des gestes fluides et enveloppants, adaptés aux besoins spécifiques de chaque client, afin de créer une expérience de massage sur mesure. Cette formation a été une révélation, m&apos;offrant de nouveaux outils pour vous accompagner vers un bien-être total.
                    </p>
                </div>

                <div className="min-h-[45rem] mt-10 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl">
                    <Image
                    src="/images/IMG_3902.jpg"
                    alt="massage"
                    width={500}
                    height={500}
                    className="rounded-[25px] shadow-lg float-left max-h-[40rem] mr-14 mb-5"
                    style={{ objectFit: 'cover' }}
                    />
                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem] lg:mt-14">
                        En 2022, j&apos;ai eu l&apos;opportunité de suivre une formation en EFT (Technique de libération émotionnelle) avec Eric Bessone, au centre de formation en EFT à Aix-en-Provence. Cette méthode, qui combine des tapotements sur des points d&apos;acupuncture avec des affirmations verbales, m&apos;a permis d&apos;approfondir ma compréhension des émotions et de leurs impacts sur notre bien-être. Grâce à cette formation, j&apos;ai acquis des outils puissants pour vous aider à libérer vos blocages émotionnels et à retrouver un état d&apos;équilibre intérieur.
                    </p>

                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem] mt-5 lg:mt-10">
                        Sur cette même année, une personne m&apos;a fait découvrir les fleurs de Bach que j&apos;ai testées pour moi personnellement. L&apos;idée grandissante de me former à l&apos;utilisation des essences florales prenait forme. J&apos;ai suivi donc cette formation via le centre MAUNA qui aujourd&apos;hui vient compléter mon panel de soins thérapeutiques.
                    </p>

                    <p className="old-standard-tt-regular text-justify lg:text-[1.2rem] mt-5 lg:mt-10">
                        Aujourd&apos;hui, je vous propose des soins personnalisés pour retrouver un rééquilibrage énergétique, physique et émotionnel. Je me déplace à votre domicile pour vous offrir un cadre confortable et sécurisant, tout en offrant également des séances à distance pour le soin énergétique et l&apos;EFT. Cela me permet de m&apos;adapter aux besoins de chacun et de rendre mes services accessibles à un plus large public, où qu&apos;ils soient. Mon objectif est de créer un espace de bien-être et d&apos;accompagnement, que ce soit physiquement ou virtuellement.
                    </p>
                </div>
            </section>
            <section className=" mx-auto mt-24 lg:bg-slate-200 lg:p-4 lg:w-[40vw] lg:rounded-sm lg:shadow-xl">
                <h3 className="text-[2rem] font-parisienne px-8 text-center mt-10" id="contact">Pour me contacter</h3>
                <div className='flex flex-col gap-5 px-8 mt-10'>
                    <div className="flex justify-between">
                        <Link href="https://www.instagram.com/camille_daikoomyo_therapeute/" target="_blank">
                        <FaInstagram className='text-[2rem]' />
                        </Link>
                        <p>@camille_daikoomyo_therapeute</p>
                    </div>
                    <div className="flex justify-between">
                        <Link href="https://m.me/camille.daikoomyo.therapeute" target="_blank">
                        <FaFacebook className='text-[2rem]' />
                        </Link>
                        <p>@camille.daikoomyo.therapeute</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link href="tel:+33618659510">
                        <FaPhone className='text-[2rem]' />
                        </Link>
                        <p>06 18 65 95 10</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Link href="mailto:camille.b.35@hotmail.fr">
                        <FaAt className='text-[2rem]' />
                        </Link>
                        <p>camille.b.35@hotmail.fr</p>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Page
