"use client"
import React, { useState } from 'react'
import Button from './Button'

interface IData {
    author: string;
    message: string;
    note: number | null;
}

function CommentCreate() {

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [note, setNote] = useState<number | null>(null);

    let data = {
        author,
        message,
        note
    }

    const handleAddComment = async (data: IData) => {
        if (data.note !== null && data.note > 0) {
            const response = await fetch('/camille/api/comments', {
                method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        } 
    }

  return (
    <div className="border-2 border-third rounded-lg p-4 w-[80vw] mt-8 flex flex-col gap-2">
        <h4 className="mb-4 font-oldStandard text-lg text-center">Ajouter un commentaire</h4>
        <input type="text" className="border rounded-md p-2" placeholder="Votre nom" onChange={(e) => setAuthor(e.target.value)} />
        <textarea className="border rounded-md p-2" placeholder="Votre commentaire" onChange={(e) => setMessage(e.target.value)} />
        <select onChange={(e) => setNote(e.target.value ? Number(e.target.value) : null)} value={note ?? ''} className="border rounded-md p-2">
            <option value="">Note</option>
            <option value="1">★</option>
            <option value="2">★★</option>
            <option value="3">★★★</option>
            <option value="4">★★★★</option>
            <option value="5">★★★★★</option>
        </select>
        <div className="text-center mt-4">
            <Button onClick={(e) => {e.preventDefault(); handleAddComment(data)}} to="/" description="Valider" />
        </div>
    </div>
  )
}

export default CommentCreate