import Button from "@/components/Button";
import CommentWrapper from "@/components/CommentWrapper";
import Slide from "@/components/F_Slide";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <header className="relative p-6 flex flex-col gap-4 items-center pt-16 lg:gap-10 lg:h-[100vh] lg:justify-between">
            <Image src="/images/fond1.png" alt="Camille Boucher de dos sur le sommet d'une montagne" width={400} height={100} className="lg:z-[1] absolute h-[30vh] lg:h-[45vh] lg:w-[80vw] object-cover lg:object-contains lg:rounded-md lg:border-2 lg:mt-5 lg:shadow-xl lg:border-slate-400" />  
            <div className="pt-6 z-10 lg:mt-5">
                <h1 className="font-parisienne text-center text-[3rem] lg:text-[5rem] italic text-primary_color text-shadow-lg contrast-100">Camille Boucher</h1>
                <h2 className="font-oldStandard font-bold text-center text-[1.8rem] contrast-200 text-shadow-lg">Thérapeute holistique <br />&<br />Énergéticienne</h2>
            </div>
            <section>
                <h3 className="font-parisienne text-center mt-16 mb-8 text-3xl lg:text-6xl md:my-36 md:w-[60vw] md-h3-appear">
                    &quot;Chaque Journée est une nouvelle chance de changer votre vie...&quot;
                </h3>
            </section>
        </header>


        <main className="px-6 flex flex-col items-center justify-center lg:pt-20 max-w-[1920px]">

        <section className="lg:gap-10 lg:px-16 lg:flex lg:flex-col">
    
            <div className="lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:z-[2] lg:flex lg:gap-10 lg:w-[70vw]">
                <div className="lg:w-[40vw] max-w-[1200px]">
                    <p className="font-oldStandard text-justify my-4 lg:text-[1.2rem] lg:contrast-75 text-shadow">
                        <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">Bonjour</strong> et <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">bienvenue</strong> sur mon site !</p><br/>
                    <p className="font-oldStandard text-justify my-4 lg:text-[1.2rem] lg:contrast-75 text-shadow">
                        <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">Je suis Camille, thérapeute holistique certifiée</strong> et énergéticienne passionnée. Mon approche considère l&apos;être humain dans sa globalité, établissant un lien harmonieux entre le corps et l&apos;esprit. Ensemble, nous allons explorer le chemin du &quot;lâcher-prise&quot;, favorisant ainsi une meilleure compréhension de vous-même et un bien-être durable.<br/>
                        <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">Ma mission est de vous accompagner</strong> avec bienveillance <br/>
                        <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">sur le sentier de la guérison intérieure</strong>, afin que vous puissiez retrouver votre véritable essence et vivre en pleine harmonie avec vous-même.
                    </p>
                    <div className="flex justify-end w-full lg:mt-16">
                        <Button to="/mon_histoire" description="En savoir plus" />
                    </div>
                </div>
                <div className="m-auto lg:scale-[1.2] relative flex justify-center w-[310px] p-1 rounded-full border-gradient overflow-hidden mt-10  border-slate-400 border-4 lg:shadow-lg">
                    <div className="bg-white p-2 rounded-full lg:bg-transparent">
                        <Image
                            src="/images/profil.JPG"
                            alt="photo de camille"
                            className="rounded-full rotate-[25deg] border-2 border-slate-400"
                            width={300}
                            height={300} 
                        />
                    </div>
                </div>
                
            </div>

            <div className="lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:z-[2] lg:flex lg:gap-10 lg:w-[70vw] lg:items-center">
                <Image
                    src="/images/daikoomyo_accueil.jpg"
                    alt="logo daikoomyo"
                    className="hidden lg:block rounded-full lg:rounded-full lg:border-2 lg:border-slate-400 lg:w-[500px] shadow-lg"
                    width={300}
                    height={300} 
                />

                <div className="lg:bg-transparent lg:p-8 lg:w-[40vw] lg:flex lg:flex-col lg:justify-between">
                    <p className="font-oldStandard text-justify my-4 lg:text-[1.2rem] lg:contrast-75 text-shadow">
                        Je vous propose des outils complémentaires pour vous accompagner sur votre chemin. <br/>
                        <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">Ensemble</strong>, nous explorerons des pratiques douces et bienveillantes qui nourrissent <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">l&apos;équilibre du corps et de l&apos;esprit</strong>, tout en stimulant votre vitalité. Ces soins sont conçus pour enrichir votre parcours vers un bien-être global et durable, en harmonie avec vos besoins.
                    </p>
                    <p className="hidden lg:block font-oldStandard text-justify my-4 lg:text-[2rem] lg:contrast-75 text-shadow">
                        <em>&quot;Découvrez votre vraie nature, retrouvez votre liberté, et rayonnez...&quot;</em>
                    </p>
                </div>
            </div>

        </section>

            
            <section className="mt-8 lg:w-[90vw] lg:justify-between lg:mt-16 lg:flex lg:gap-4 lg:h-[40vh] max-w-[1920px]">

                <div className="lg:rounded-md lg:shadow-lgg lg:p-2 lg:flex lg:flex-col lg:justify-between lg:w-[20vw] lg:relative lg:overflow-hidden group">
                <Image
                                src="/images/Untitled design.PNG"
                                alt="photo de camille"
                                className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"
                                width={300}
                                height={300} 
                            />
                    <Slide className="mx-auto" width="100%">
                        <h3 className="font-parisienne text-center font-bold text-2xl lg:text-4xl py-4 rounded-full mx-auto mt-5 lg:contrast-100 lg:text-[#be7676] lg:text-shadow-lg lg:brightness-150">Emotional Freedom Technique</h3>
                    </Slide>
                    <div className="flex flex-col gap-4 items-end lg:items-center lg:mb-2 lg:font-semibold">
                        <p className="font-oldStandard text-justify mb-2 lg:text-[1.1rem] lg:text-center lg:contrast-200 lg:text-shadow-lg">
                            Découvrez l&apos;EFT, une technique douce et puissante pour libérer les émotions et retrouver un équilibre intérieur.
                        </p>
                        <Button to="/eft" description="Découvrir" />
                    </div>
                </div>
                
                <div className="lg:rounded-md lg:shadow-lgg lg:p-2 lg:flex lg:flex-col lg:justify-between lg:w-[20vw] lg:relative lg:overflow-hidden group">
                <Image
                                src="/images/reiki1.PNG"
                                alt="photo de camille"
                                className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"
                                width={300}
                                height={300} 
                            />
                    <Slide className="mx-auto" width="100%">
                        <h3 className="font-parisienne text-center font-bold text-2xl lg:text-4xl py-4 rounded-full mx-auto mt-5 lg:contrast-100 lg:text-[#be7676] lg:text-shadow-lg lg:brightness-150">Soin énergétique</h3>
                    </Slide>
                    <div className="flex flex-col gap-4 items-end lg:items-center lg:mb-2 lg:font-semibold">
                        <p className="font-oldStandard text-justify mb-2 lg:text-[1.1rem] lg:text-center lg:contrast-200 lg:text-shadow-lg">
                            Explorez le Reiki, une approche bienveillante et naturelle pour rééquilibrer vos énergies afin d&apos;apaiser le corps et l&apos;esprit.
                        </p>
                        <Button to="/soin_energetique" description="Découvrir" />
                    </div>
                </div>

                <div className="lg:rounded-md lg:shadow-lgg lg:p-2 lg:flex lg:flex-col lg:justify-between lg:w-[20vw] lg:relative lg:overflow-hidden group">
                <Image
                                src="/images/massage1.jpg"
                                alt="photo de camille"
                                className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"
                                width={300}
                                height={300} 
                            />
                    <Slide className="mx-auto" width="100%">
                        <h3 className="font-parisienne text-center font-bold text-2xl lg:text-4xl py-4 rounded-full mx-auto mt-5 lg:contrast-100 lg:text-[#be7676] lg:text-shadow-lg lg:brightness-150">Massage holistique</h3>
                    </Slide>
                    <div className="flex flex-col gap-4 items-end lg:items-center lg:mb-2 lg:font-semibold">
                        <p className="font-oldStandard text-justify mb-2 lg:text-[1.1rem] lg:text-center lg:contrast-200 lg:text-shadow-lg">
                            Offrez-vous un moment de détente profonde avec le massage holistique, une expérience globale qui harmonise corps, esprit et émotions pour un bien-être complet.
                        </p>
                        <Button to="/massage_holistique" description="Découvrir" />
                    </div>
                </div>
                
                <div className="lg:rounded-md lg:shadow-lgg lg:p-2 lg:flex lg:flex-col lg:justify-between lg:w-[20vw] lg:relative lg:overflow-hidden group">
                <Image
                                src="/images/bach1.jpg"
                                alt="photo de camille"
                                className="hidden lg:block lg:absolute z-[-1] w-full h-full top-0 left-0 lg:object-cover group-hover:blur-lg blur-sm transition-all duration-[.4s]"
                                width={300}
                                height={300} 
                            />
                    <Slide className="mx-auto" width="100%">
                        <h3 className="font-parisienne text-center font-bold text-2xl lg:text-4xl py-4 rounded-full mx-auto mt-5 lg:contrast-100 lg:text-[#be7676] lg:text-shadow-lg lg:brightness-150">Fleurs de Bach</h3>
                    </Slide>
                    <div className="flex flex-col gap-4 items-end lg:items-center lg:mb-2 lg:font-semibold">
                        <p className="font-oldStandard text-justify mb-2 lg:text-[1.1rem] lg:text-center lg:contrast-200 lg:text-shadow-lg">
                            Initiez-vous aux fleurs de Bach, des essences florales naturelles pour harmoniser vos émotions et retrouver un équilibre.
                        </p>
                        <Button to="/fleurs_de_bach" description="Découvrir" />
                    </div>
                </div>
            </section>    

            <section className="lg:h-auto lg:w-[70vw] lg:mt-16 lg:bg-rose-50 lg:backdrop-blur-sm lg:p-8 lg:rounded-sm lg:shadow-xl lg:z-[2] lg:flex lg:flex-col lg:items-center lg:gap-10">
                <div className="lg:flex lg:gap-5 lg:mt-5">
                    <p className="font-oldStandard text-justify mb-2 mt-10 lg:text-[1.2rem] lg:m-0 text-shadow">
                        Il est important de prendre conscience que notre état d&apos;esprit, nos pensées négatives, nos comportements, nos croyances limitantes influencent nos vies.
                        Ce qui se passe à l&apos;intérieur de nous (tristesse, peurs, colère, insécurité...) se reflète à l&apos;extérieur.
                        Pour vivre une vie pleine d&apos;abondance, de joie, d&apos;amour, de paix... nous devons avant tout travailler sur nous et aller dans nos profondeurs pour retrouver la lumière.
                        Les soins que je vous propose peuvent vous aider à travailler sur soi mais c&apos;est aussi avant tout à vous de faire le premier pas.
                    </p>
                    <p className="font-oldStandard text-justify mb-2 mt-4 lg:text-[1.2rem] lg:m-0 text-shadow">Pour offrir un accompagnement encore plus personnalisé et pratique, je propose des consultations à domicile dans un rayon de <strong className="lg:font-oldStandard lg:font-extrabold lg:text-[1.5rem]">30 km autour de Nîmes.</strong> Que ce soit pour des séances de Reiki, d&apos;EFT, des massages holistiques ou des conseils en Fleurs de Bach, je me déplace directement chez vous. Tout est pensé pour votre confort : j&apos;apporte le matériel nécessaire, y compris une table de massage professionnelle, des huiles adaptées, ainsi qu&apos;une ambiance apaisante pour que vous puissiez profiter pleinement des bienfaits des séances, dans le cocon de votre propre espace.</p>
                </div>
                <div className="hidden lg:block rounded-2xl">
                <Image src={"/images/map.jpg"} alt="carte" width={400} height={300} className="rounded-2xl shadow-lg hover:scale-[1.5] hover:shadow-xl transition-all duration-[.4s]" />
                </div>
            </section>
            <Slide>
                <h3 className="font-bold font-parisienne text-center mt-16 mb-8 text-2xl lg:text-4xl">Vos témoignages</h3>
            </Slide>
            
            <section className="flex flex-col items-center">
                <div className="mt-8">
                    <div className="relative max-h-72 overflow-hidden mb-12">
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FBF2ED] pointer-events-none z-[10]"></div>
                        <CommentWrapper />
                    </div>
                </div>
            </section>
            <div>
                <Button to="/vos_avis" description="Voir plus..." />
            </div>
        </main>
    </div>
    
  );
}

