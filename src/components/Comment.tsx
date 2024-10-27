import { color } from 'framer-motion'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Comment() {
  return (
    <div className="rounded-lg border-2 border-slate-700 w-[70vw] flex flex-col gap-4 p-2 m-2">
        <div className="flex justify-between">
            <span className="font-oldStandard font-semibold text-md">De David</span>
            <div className="flex gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
            </div>
        </div>
        <div className="font-oldStandard flex flex-col gap-4 items-start">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            <button>Lire la suite...</button>
        </div>
        <div>
            <span className="font-oldStandard">Rédigé le 10/09/2024</span>
        </div>
    </div>
  )
}

export default Comment