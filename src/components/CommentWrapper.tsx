"use client"
import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import { fetchComments } from '@/utils/fetchComments';

interface IComment {
    id: number; 
    author: string;
    message: string;
    note: number;
    createdAt: string;
}

function CommentWrapper({ className }: { className?: string }) {
    
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetchComments();
            const data = await response.json()
            setComments(data);
        }
        getComments();
    }, []);

    return (
        <div className={`flex flex-col md:flex-row gap-2 ${className}`}>
            {comments.map( comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentWrapper;