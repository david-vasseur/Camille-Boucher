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
      <nav className="w-full bg-transparent backdrop-blur-2xl fixed top-0 left-0 right-0 z-20 shadow-xl">
        <div className="md:flex justify-between px-4 md:items-center md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <BackButton />
            <div className="md:hidden">
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
          <motion.div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
            initial={{ x: "-100%", opacity: 0 }} 
            animate={{
              x: navbar ? 0 : "-100%", 
              opacity: navbar ? 1 : 0, 
            }}
            transition={{ duration: 0.3 }} 
            className="md:hidden"
          >
            {navbar && (
              <motion.div
                className="backdrop-blur-md h-[100vh] items-center justify-center md:justify-end flex gap-5 md:gap-8 flex-col md:flex-row font-oldStandard text-[1.4rem] font-semibold text-shadow-lg"
                initial={{ opacity: 0 }} 
                animate={{ opacity: navbar ? 1 : 0 }} 
                transition={{ duration: 0.3 }}
              >
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Accueil
                </Link>
                <Link href="/mon_histoire" onClick={() => setNavbar(!navbar)}>
                  Qui suis-je ?
                </Link>
                {index.map((elem) => (
                  <Link
                    key={elem.id}
                    href={elem.buttonTo}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {elem.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </motion.div>
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 font-oldStandard text-[1.4rem] font-semibold text-shadow-lg">
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
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
