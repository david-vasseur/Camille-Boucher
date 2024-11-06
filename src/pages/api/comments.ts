import commentService from './commentService';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const newComment = await commentService.createComment(req.body);
      return res.status(201).json(newComment);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const comments = await commentService.getAllComments();
      return res.status(200).json(comments);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}