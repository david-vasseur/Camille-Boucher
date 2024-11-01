import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div className="my-20 flex flex-col gap-4 p-4">
        <span className='w-full h-[0.1rem] bg-slate-600'></span>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className=" font-oldStandard">Politique de confidentialité</Link>
            <Link href="/" className=" font-oldStandard">Mentions légales</Link>
          </div>
          <div className="flex flex-col gap-4 mr-4">
            <Link href={"https://www.facebook.com/camille.daikoomyo.therapeute"}>
                <FaFacebook className="scale-[2]" />
            </Link>
            <Link href={"https://www.instagram.com/camille_daikoomyo_therapeute/profilecard/?igsh=em0yeWlvbmwyeGh4"}>
                <FaInstagram className="scale-[2]" />
            </Link>
          </div>
        </div>
        <nav className="flex flex-col gap-3">
            <h4 className="font-parisienne text-2xl text-center">Navigation</h4>
            <Link  className="ml-5 font-oldStandard" href="/quisuisje.html">Qui suis je?</Link>
            <Link className="ml-5 font-oldStandard" href="/mesprestations.html">EFT</Link>
            <Link className="ml-5 font-oldStandard" href="/mesprestations.html">Massage holistique</Link>
            <Link className="ml-5 font-oldStandard" href="/mesprestations.html">Soin energisant</Link>
            <Link className="ml-5 font-oldStandard" href="/mesprestations.html">Fleurs de bach</Link>
        </nav>
        <div className="text-center font-parisienne font-extrabold mt-10">
            <span className="">Made by David Vasseur - 2024</span>
        </div>
    </div>
  )
}

export default Footer