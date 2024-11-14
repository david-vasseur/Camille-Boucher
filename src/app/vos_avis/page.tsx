import CommentCreate from '@/components/CommentCreate'
import CommentWrapper from '@/components/CommentWrapper'
import React from 'react'

function Page() {
    return (
        <div className="px-6 pt-20 md:pt-36 flex flex-col items-center gap-8">
            <h1 className="font-parisienne text-[3rem] text-center font-extrabold">Vos avis</h1>
            <div className="flex flex-col items-center md:flex-row md:gap-10 md:mx-10 md:mb-10">
                <h2 className="md:w-[30vw] md:text-[1.2rem] font-oldStandard text-justify mt-2 mb-2"><strong className="md:text-[2.5rem] md:font-extrabold">Chaque avis que vous partagez</strong> est une véritable richesse pour moi. Je m&apos;engage à lire attentivement chacun de vos retours, car ils sont essentiels à ma démarche d&apos;amélioration continue. Votre satisfaction est ma priorité, et chaque suggestion que vous formulez me permet de mieux répondre à vos attentes et de vous offrir une expérience de bien-être optimale. N&apos;hésitez pas à partager votre expérience, car votre voix compte énormément et m&apos;aide à évoluer pour vous servir au mieux.</h2>
                <div className="hover:scale-[1.05] hover:cursor-pointer transition-all duration-[.5s]">
                    <CommentCreate />
                </div>
            </div>
            <CommentWrapper />
        </div>
    )
}

export default Page