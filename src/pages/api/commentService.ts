import commentRepository from './commentRepository';

type IData = {
    author: string;
    message: string;
    note: number;
}

const commentService = {
  async createComment(data: IData) {
    if (!data.author || !data.message || data.note == null) {
      throw new Error('Tous les champs sont requis.');
    }

    return await commentRepository.createComment(data);
  },

  async getAllComments() {
    return await commentRepository.getAllComments();
  },
};

export default commentService;
