import { getCustomRepository } from 'typeorm';

import Book from '../../models/Book';
import BooksRepository from '../../repositories/BooksRepository';
import AppError from '../../errors/AppError';

interface Request {
  id: string;
  name: string;
  description: string;
  author: string;
  price: number;
}

class UpdateBookService {
  public async execute({ id, name, description, author, price }: Request): Promise<Book> {
    const booksRepository = getCustomRepository(BooksRepository);

    const findByBook = await booksRepository.findOne({ where: { id } });
    if (!findByBook) {
      throw new AppError('This book does not exist', 401);
    }

    const book = booksRepository.create({
      id,
      name,
      description,
      author,
      price
    });

    await booksRepository.save(book);

    return book;
  }
}

export default UpdateBookService;
