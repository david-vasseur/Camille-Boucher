import commentRepository from './commentRepository';

type IData = {
    author: string;
    soin: number;
    message: string;
    note: number;
}

const commentService = {
	async createComment(data: IData) {
		if (!data.author || !data.message || data.note == null || data.soin == null) {
		throw new Error('Tous les champs sont requis.');
		}

		return await commentRepository.createCommentRepo(data);
	},

	async getAllComments() {
		return await commentRepository.getAllCommentsRepo();
	},

	async getAllCommentsBySoin(soinInt: number) {
		return await commentRepository.getAllCommentsBySoinRepo(soinInt);
	},
};

export default commentService;
