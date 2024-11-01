import Button from "@/components/Button";
import Comment from "@/components/Comment";
import Rotate from "@/components/F_Rotate";
import Slide from "@/components/F_Slide";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <header className="relative p-6 flex flex-col gap-4 items-center pt-10">
            
            <div className="absolute inset-0 bg-[url('/camille/images/fond1.png')] bg-cover blur-[1px] z-0 bg-top"></div>
            
            <div className="relative z-10">
                <h1 className="font-parisienne text-center text-[3rem] italic text-primary_color text-shadow-lg">Camille Boucher</h1>
                <h2 className="font-oldStandard font-bold text-center text-[1.8rem]  text-shadow-lg">Thérapeute holistique <br />&<br />Énergéticienne</h2>
            </div>
        </header>


        <main className="px-6 flex flex-col items-center justify-center">
            <h3 className="font-parisienne text-center mt-16 mb-8 text-3xl">
                &quot;Chaque Journée est une nouvelle chance de changer votre vie...&quot;
            </h3>
            <p className="font-oldStandard text-justify my-4 ">
                Bonjour et bienvenue sur mon site ! Je suis Camille, thérapeute holistique certifiée et énergéticienne passionnée. Mon approche considère l&apos;être humain dans sa globalité, établissant un lien harmonieux entre le corps et l&apos;esprit. Ensemble, nous allons explorer le chemin du &quot;lâcher-prise&quot;, favorisant ainsi une meilleure compréhension de vous-même et un bien-être durable. Ma mission est de vous accompagner avec bienveillance sur le sentier de la guérison intérieure, afin que vous puissiez retrouver votre véritable essence et vivre en pleine harmonie avec vous-même.
            </p>
            <div className="flex justify-end w-full">
                <Button to="/mon_histoire" description="En savoir plus" />
            </div>
            <Rotate>
                <div className="relative p-1 rounded-full border-gradient overflow-hidden mt-10">
                    <div className="bg-white p-1 rounded-full">
                        <Image
                        src="/camille/images/profil.JPG"
                        alt="Profil Image"
                        className="rounded-full rotate-[25deg]"
                        width={300}
                        height={300} 
                        />
                    </div>
                </div>
            </Rotate>
            
            <p className="font-oldStandard text-justify my-4 ">
                Je vous propose des outils complémentaires pour vous accompagner sur le chemin de la guérison et du mieux-être. Ensemble, nous explorons des pratiques douces et bienveillantes qui nourrissent l&apos;équilibre du corps et de l&apos;esprit, tout en stimulant votre vitalité. Ces soins sont conçus pour enrichir votre parcours vers un bien-être global et durable, en harmonie avec vos besoins.
            </p>
            <section className="mt-8">
                <Slide side="left" className="mx-auto" width="100%">
                    <h3 className="font-parisienne text-center font-bold text-2xl py-4 rounded-full mx-auto">Emotional Freedom Technique</h3>
                </Slide>
                <div className="flex flex-col gap-4 items-end">
                    <p className="font-oldStandard text-justify mb-2">
                        Découvrez l&apos;EFT, une technique douce et puissante pour libérer les émotions et retrouver un équilibre intérieur.
                    </p>
                    <Button to="/eft" description="Découvrir" />
                </div>
                <Slide side="left" className="mx-auto" width="100%">
                    <h3 className="font-parisienne text-center font-bold text-2xl py-4 rounded-full mx-auto mt-5">Soins énergétique</h3>
                </Slide>
                <div className="flex flex-col gap-4 items-end">
                    <p className="font-oldStandard text-justify mb-2">
                        Explorez le Reiki, une approche bienveillante et naturelle pour rééquilibrer vos énergies, apaiser le corps et l&apos;esprit, et renouer avec votre vitalité.
                    </p>
                    <Button to="/soin_energetique" description="Découvrir" />
                </div>
                <Slide side="left" className="mx-auto" width="100%">
                    <h3 className="font-parisienne text-center font-bold text-2xl py-4 rounded-full mx-auto mt-5">Massages holistique</h3>
                </Slide>
                <div className="flex flex-col gap-4 items-end">
                    <p className="font-oldStandard text-justify mb-2">
                        Offrez-vous un moment de détente profonde avec le massage holistique, une expérience globale qui harmonise corps, esprit et émotions pour un bien-être complet.
                    </p>
                    <Button to="/massage_holistique" description="Découvrir" />
                </div>
                <Slide side="left" className="mx-auto" width="100%">
                    <h3 className="font-parisienne text-center font-bold text-2xl py-4 rounded-full mx-auto mt-5">Fleurs de Bach</h3>
                </Slide>
                <div className="flex flex-col gap-4 items-end">
                    <p className="font-oldStandard text-justify mb-2">
                        Initiez-vous aux fleurs de Bach, des essences florales naturelles pour harmoniser vos émotions et retrouver un équilibre.
                    </p>
                    <Button to="/fleurs_de_bach" description="Découvrir" />
                </div>
            
            <p className="font-oldStandard text-justify mb-2 mt-10 ">
                Il est important de prendre conscience que notre état d&apos;esprit, nos pensées négatives, nos comportements, nos croyances limitantes influencent nos vies.
                Ce qui se passe à l&apos;intérieur de nous (tristesse, peurs, colère, insécurité...) se reflète à l&apos;extérieur.
                Pour vivre une vie pleine d&apos;abondance, de joie, d&apos;amour, de paix... nous devons avant tout travailler sur nous et aller dans nos profondeurs pour retrouver la lumière.
                Les soins que je vous propose peuvent vous aider à travailler sur soi mais c&apos;est aussi avant tout à vous de faire le premier pas.
            </p>
            </section>
            <Slide side="left">
                <h3 className="font-parisienne text-center mt-16 mb-8 text-2xl">Vos témoignages</h3>
            </Slide>
            
            <section className="flex flex-col items-center">
                <Comment />
                <Comment />
                <div className="mt-8">
                  <Button to="/" description="Voir plus..." />
                </div>
                <div className="border-2 border-third rounded-lg p-4 w-3/4 mt-8 flex flex-col gap-2">
                    <h4 className="mb-4 font-oldStandard text-lg text-center">Ajouter un commentaire</h4>
                    <input type="text" className="border rounded-md p-2" placeholder="Votre nom" />
                    <input type="area" className="border rounded-md p-2" placeholder="Votre commentaire" />
                    <select className="border rounded-md p-2">
                        <option value="">Note</option>
                        <option value="">★</option>
                        <option value="">★★</option>
                        <option value="">★★★</option>
                        <option value="">★★★★</option>
                        <option value="">★★★★★</option>
                    </select>
                    <div className="text-center mt-4">
                        <Button to="/" description="Valider" />
                    </div>
                </div>
            </section>
        </main>
    </div>
    
  );
}

