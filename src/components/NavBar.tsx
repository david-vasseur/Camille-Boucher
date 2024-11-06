"use client"
import React, { useEffect, useState } from 'react'
import { index } from '../app/data';
import Link from 'next/link';
import { TfiViewList } from 'react-icons/tfi';
import BackButton from './BackButton';

function NavBar() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [menu, setMenu] = useState(true);
    const [burger, setBurger] = useState(false);
    const [animatedMenu, setAnimatedMenu] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);
    
            if (window.innerWidth < 639) {
                if (burger) {
                    return;
                } else {
                    setBurger(true);
                    setMenu(false)
                }
            } else {
                setBurger(false);
                setMenu(true);
            }
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
         
    }, [windowWidth]);

    useEffect(() => {
        if (burger && menu) {
            setAnimatedMenu(true);
        } else {
            setAnimatedMenu(false);
        }
    }, [menu, burger]);

    const handleMenuToggle = () => {
        if (menu) {
            
            setAnimatedMenu(false); 
            setTimeout(() => {
                setMenu(false); 
            }, 500); 
        } else {
            setMenu(true); 
            setTimeout(() => {
                setAnimatedMenu(true); 
            }, 10); 
        }
    };

  return (
    <>
    {burger ? 
        <div className="fixed top-0 w-full z-[999] p-4 backdrop-blur-md">
            <BackButton />
            <TfiViewList onClick={handleMenuToggle} className=" float-end scale-[2] z-[9999]" />
        </div>
    : null}
    {menu && 
        <div className={`${animatedMenu ? "scale-[1] opacity-1" : "scale-0 opacity-0" } pt-20 font-oldStandard transition-all duration-500 origin-top-left transform flex sm:flex-row flex-col sm:gap-3 gap-8 font-semibold items-center sm:backdrop-blur-none backdrop-blur-lg sm:bg-transparent bg-transparent sm:w-auto w-[100vw] sm:h-[90vh] h-[60vh] sm:static fixed sm:rounded-none rounded-r-lg text-xl tracking-wider text-third_color p-5 justify-center sm:shadow-none shadow-2xl z-20 text-shadow-lg`}>
            <Link href="/" onClick={handleMenuToggle}>Accueil</Link>
            <Link href="/mon_histoire" onClick={handleMenuToggle}>Qui suis je ?</Link>
            {index.map( elem  => (
                <Link key={elem.id} href={elem.buttonTo} className="" onClick={handleMenuToggle}>{elem.title}</Link>
            ))}
        </div>
    }
    </>
  )
}

export default NavBar