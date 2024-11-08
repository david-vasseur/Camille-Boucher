"use client";
import React, { useState } from "react";
import { index } from "../app/data";
import Link from "next/link";
import { TfiViewList } from "react-icons/tfi";
import BackButton from "./BackButton";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-transparent backdrop-blur-2xl fixed top-0 left-0 right-0 z-20">
        <div className="lg:flex justify-between px-4 lg:items-center lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block z-30">
            <BackButton />
            <div className="lg:hidden">
              {navbar ? (
                <FaXmark
                  className="scale-[2] cursor-pointer"
                  onClick={() => setNavbar(!navbar)}
                />
              ) : (
                <TfiViewList
                  className="scale-[2] cursor-pointer"
                  onClick={() => setNavbar(!navbar)}
                />
              )}
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-8 font-oldStandard text-[1.4rem] font-semibold text-shadow-lg items-center justify-end">
            <Link href="/" onClick={() => setNavbar(false)}>
              Accueil
            </Link>
            <Link href="/mon_histoire" onClick={() => setNavbar(false)}>
              Qui suis-je ?
            </Link>
            {index.map((elem) => (
              <Link key={elem.id} href={elem.buttonTo} onClick={() => setNavbar(false)}>
                {elem.title}
              </Link>
            ))}
          </div>
          <motion.div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "p-12 lg:p-0 block" : "hidden"
            } lg:hidden`} 
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: navbar ? 0 : "-100%",
              opacity: navbar ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-[80vh] items-center justify-start lg:justify-end flex gap-5 lg:gap-8 flex-col lg:flex-row font-oldStandard text-[1.4rem] font-semibold text-shadow-lg">
              <Link href="/" onClick={() => setNavbar(false)}>
                Accueil
              </Link>
              <Link href="/mon_histoire" onClick={() => setNavbar(false)}>
                Qui suis-je ?
              </Link>
              {index.map((elem) => (
                <Link key={elem.id} href={elem.buttonTo} onClick={() => setNavbar(false)}>
                  {elem.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
