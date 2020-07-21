import { getCustomRepository } from 'typeorm';

import Book from '../models/Book';
import BooksRepository from '../repositories/BooksRepository';

interface Request {
  name: string;
  description: string;
  author: string;
  price: number;
}

class CreateBookService {
  public async execute({ name, description, author, price }: Request): Promise<Book> {
    const booksRepository = getCustomRepository(BooksRepository);

    const book = booksRepository.create({
      name,
      description,
      author,
      price
    });

    await booksRepository.save(book);

    return book;
  }
}

export default CreateBookService;
