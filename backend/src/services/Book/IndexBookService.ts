import { getCustomRepository } from 'typeorm';

import Book from '../../models/Book';
import BooksRepository from '../../repositories/BooksRepository';
import AppError from '../../errors/AppError';

class IndexBookService {
  public async execute(id: string): Promise<Book[]> {
    const booksRepository = getCustomRepository(BooksRepository);

    const findByBook = await booksRepository.findByIds([ id ]);
    if (!findByBook) {
      throw new AppError('This book does not exist', 401);
    }

    return findByBook;
  }
}

export default IndexBookService;
