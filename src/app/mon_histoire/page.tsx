import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div className="mt-10">
      <header className="p-2 flex flex-col gap-1 items-center">
        <h1 className="font-parisienne text-center text-[2.8rem] font-bold">Qui suis-je ?</h1>
        
        <div className="relative rounded-full border-gradient border-2 overflow-hidden mt-10 h-64 w-64 z-5">
          <Image 
            src="/camille/images/IMG_8243.jpg" 
            alt="profil" 
            width={300} 
            height={300} 
            className="h-full w-full rounded-full object-cover z-0" 
          />
        </div>
      </header>

      <main>
        <h3 className=" font-parisienne w-[80vw] mx-auto mt-4 text-center mb-2 text-[1.4rem]">" Le véritable bien être réside dans l'équilibre entre le corps, l'esprit et l'ame... "</h3>
        <div className="mt-10">
      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        Mon parcours vers les médecines douces et le soin à la personne a été un chemin riche et évolutif. Après avoir débuté ma carrière dans l'horticulture et le secteur du médico-social, j'ai développé une passion profonde pour le développement personnel et la spiritualité. Il y a 20 ans, j'ai découvert mon don de guérir par les mains, une révélation qui a transformé ma vision du bien-être. Pour approfondir mes compétences, j'ai suivi plusieurs formations.
      </p>

      <div className="float-left w-[50vw] ml-8 mr-4 mt-12 mb-0">
        <Image
          src="/camille/images/meditation.avif"
          alt="meditation"
          width={500}
          height={500}
          className="rounded-[25px] shadow-lg"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        En 2020, j'ai entrepris ma formation pour devenir maître REIKI au centre MAUNA à Calvisson (30). Cette expérience a été une véritable transformation pour moi. Pendant plusieurs semaines, j'ai plongé dans l'univers du Reiki, apprenant à canaliser l'énergie universelle et à l'utiliser pour favoriser la guérison et le bien-être. J'ai découvert l'importance de la méditation, des symboles et des mantras, ainsi que des techniques de relaxation et de rééquilibrage énergétique. Les séances pratiques m'ont permis de développer mes compétences et d'aller à ma rencontre et celle des autres. Ce parcours a renforcé ma connexion avec ma propre spiritualité. Devenir maître Reiki, me permet d'accompagner les autres sur leur chemin de guérison avec compassion et respect.
      </p>

      <div className="float-right w-[55vw] ml-4 mr-8 mt-12 mb-0">
        <Image
          src="/camille/images/huiles.jpg"
          alt="huiles"
          width={500}
          height={500}
          className="rounded-[25px] shadow-lg"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        En 2021, j'ai suivi une formation en massage holistique à l'école Synergie Naturopathie, une étape essentielle dans mon parcours de praticienne en médecines douces. Cette formation m'a permis d'approfondir mes connaissances sur le corps humain et d'apprendre des techniques variées pour favoriser la détente et le bien-être. Au cours de cette formation, j'ai découvert l'importance d'une approche globale, prenant en compte non seulement les tensions physiques, mais aussi les aspects émotionnels et énergétiques de chaque personne. J'ai appris à utiliser des gestes fluides et enveloppants, adaptés aux besoins spécifiques de chaque client, afin de créer une expérience de massage sur mesure. Cette formation a été une révélation, m'offrant de nouveaux outils pour vous accompagner vers un bien-être total.
      </p>

      <div className="float-left w-[40vw] ml-8 mr-4 mt-12 mb-0">
        <Image
          src="/camille/images/IMG_3902.jpg"
          alt="massage"
          width={500}
          height={500}
          className="rounded-[25px] shadow-lg"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        En 2022, j'ai eu l'opportunité de suivre une formation en EFT (Technique de libération émotionnelle) avec Eric Bessone, lui-même thérapeute et sophrologue sur Aix-en-Provence. Cette méthode, qui combine des tapotements sur des points d'acupuncture avec des affirmations verbales, m'a permis d'approfondir ma compréhension des émotions et de leurs impacts sur notre bien-être. Grâce à cette formation, j'ai acquis des outils puissants pour vous aider à libérer vos blocages émotionnels et à retrouver un état d'équilibre intérieur.
      </p>

      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        Sur cette même année, une personne m'a fait découvrir les fleurs de Bach que j'ai testées pour moi personnellement. L'idée grandissante de me former à l'utilisation des essences florales prenait forme. J'ai suivi donc cette formation via le centre Mauna qui aujourd'hui vient compléter mon panel de soins thérapeutiques.
      </p>

      <p className="font-oldStandard text-justify p-8 pb-2 mt-4">
        Aujourd'hui, je vous propose des soins personnalisés pour retrouver un rééquilibrage énergétique, physique et émotionnel. Je me déplace à votre domicile pour vous offrir un cadre confortable et sécurisant, tout en offrant également des séances à distance pour le soin énergétique et l'EFT. Cela me permet de m'adapter aux besoins de chacun et de rendre mes services accessibles à un plus large public, où qu'ils soient. Mon objectif est de créer un espace de bien-être et d'accompagnement, que ce soit physiquement ou virtuellement.
      </p>
    </div>
      </main>
    </div>
  )
}

export default Page
