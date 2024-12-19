import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type IData = {
    author: string;
	soin: number;
    message: string;
    note: number;
}

const commentRepository = {
  	async createCommentRepo(data: IData) {
		return await prisma.comment.create({
			data: {
				author: data.author,
				soin: data.soin,
				message: data.message,
				note: data.note,
			},
		});
	},

	async getAllCommentsRepo() {
		return await prisma.comment.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
	},

	async getAllCommentsBySoinRepo(soinInt: number) {
		return await prisma.comment.findMany({
			where: {
				soin: soinInt,	
			}
		})
	}
};

export default commentRepository;
