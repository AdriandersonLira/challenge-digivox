import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';
import CreateBookService from '../services/CreateBookService';

const booksRouter = Router();

booksRouter.get('/', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);

  const books = await booksRepository.find();

  return response.json(books);
});

booksRouter.get('/:id', (request, response) => {
  return response.json({ message: 'GET - books'});
});

booksRouter.post('/', async (request, response) => {
  try {
    const { name, description, author, price } = request.body;

    const createBook = new CreateBookService();

    const book = await createBook.execute({
      name,
      description,
      author,
      price,
    });

    return response.json(book);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

booksRouter.put('/:id', (request, response) => {
  return response.json({ message: 'PUT - books'});
});

booksRouter.delete('/:id', (request, response) => {
  return response.json({ message: 'DELETE - books'});
});

export default booksRouter;
