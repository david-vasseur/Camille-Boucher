import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type IData = {
    author: string;
    message: string;
    note: number;
}

const commentRepository = {
  async createComment(data: IData) {
    return await prisma.comment.create({
      data: {
        author: data.author,
        message: data.message,
        note: data.note,
      },
    });
  },

  async getAllComments() {
    return await prisma.comment.findMany();
  },
};

export default commentRepository;
