import CommentCreate from '@/components/CommentCreate'
import CommentWrapper from '@/components/CommentWrapper'
import React from 'react'

function Page() {
  return (
    <div className="px-6 pt-20 flex flex-col items-center gap-8">
        <h1 className="font-parisienne text-[3rem] text-center font-extrabold">Vos avis</h1>
        <h2 className="font-oldStandard text-justify mt-2 mb-2">Chaque avis que vous partagez est une véritable richesse pour moi. Je m&apos;engage à lire attentivement chacun de vos retours, car ils sont essentiels à ma démarche d&apos;amélioration continue. Votre satisfaction est ma priorité, et chaque suggestion que vous formulez me permet de mieux répondre à vos attentes et de vous offrir une expérience de bien-être optimale. N&apos;hésitez pas à partager votre expérience, car votre voix compte énormément et m&apos;aide à évoluer pour vous servir au mieux.</h2>
        <CommentCreate />
        <CommentWrapper />
    </div>
  )
}

export default Page