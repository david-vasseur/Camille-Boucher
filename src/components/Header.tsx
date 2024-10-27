import React from 'react'

function Header() {
  return (
    <>
        <header className="p-8 flex flex-col gap-4 items-center">
            <h1 className="text-center text-[2.8rem] font-bold italic">Qui suis-je ?</h1>
            <img src="/images/IMG_8243.JPG" alt="" className="w-[300px] h-[300px] rounded-full mt-8 border-[10px] border-[#B7BCBF] object-cover" />
        </header>
    </>
  )
}

export default Header