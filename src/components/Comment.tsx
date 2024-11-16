"use client"
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'

interface IComment {
    author: string;
    message: string;
    note: number;
    createdAt: string;

}

function Comment({ comment }:{ comment: IComment }) {

    const dateFormat = (date: string) => {
        const day = date.substring(8, 10);
        const month = date.substring(5,7);
        const year = date.substring(0,4);
        return `${day}/${month}/${year}`
    }
    
    const [cut, setCut] = useState(true);
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <FaStar key={i} className={i < comment.note ? "text-yellow-400" : "text-gray-300"} />
        );
    }
    return (
    <div className="rounded-lg border-2 border-slate-700 w-[70vw] flex flex-col gap-4 p-2 mb-6 md:w-[30vw] lg:w-[20vw] shadow-lg min-h-[160px] sm:min-h-[200px]">
        <div className="flex justify-between">
            <span className="font-oldStandard font-semibold text-md">De {comment.author}</span>
            <div className="flex gap-1">
                {stars}
            </div>
        </div>
        <div className="font-oldStandard flex flex-col gap-4 items-start">
            <p>{cut && comment.message.length > 24 ? `${comment.message.substring(0, 24)}...` : comment.message}</p>
            {comment.message.length > 24 &&
                <button className="underline" onClick={() => setCut(!cut)}>{cut ? "Lire la suite" : "Réduire"}</button>}
        </div>
        <div>
            <span className="font-oldStandard">Rédigé le {dateFormat(comment.createdAt)}</span>
        </div>
    </div>
  )
}

export default Comment