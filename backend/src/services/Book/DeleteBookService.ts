import { getCustomRepository } from 'typeorm';

import BooksRepository from '../../repositories/BooksRepository';
import AppError from '../../errors/AppError';

interface Response {
  message: string
}

class DeleteBookService {
  public async execute(id: string): Promise<Response> {
    const booksRepository = getCustomRepository(BooksRepository);

    const findByBook = await booksRepository.findByIds([ id ]);
    if (!findByBook) {
      throw new AppError('This book does not exist', 401);
    }

    await booksRepository.remove(findByBook[0]);

    return { message: 'item successfully deleted' };
  }
}

export default DeleteBookService;
