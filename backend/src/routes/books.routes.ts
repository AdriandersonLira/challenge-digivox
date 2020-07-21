import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import BooksRepository from '../repositories/BooksRepository';
import IndexBookService from '../services/Book/IndexBookService';
import CreateBookService from '../services/Book/CreateBookService';
import UpdateBookService from '../services/Book/UpdateBookService';
import DeleteBookService from '../services/Book/DeleteBookService';

const booksRouter = Router();

booksRouter.get('/', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);

  const books = await booksRepository.find();

  return response.json(books);
});

booksRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const indexBook = new IndexBookService();

  const book = await indexBook.execute(id);

  return response.json(book);
});

booksRouter.post('/', async (request, response) => {
  const { name, description, author, price } = request.body;

  const createBook = new CreateBookService();

  const book = await createBook.execute({
    name,
    description,
    author,
    price,
  });

  return response.json(book);
});

booksRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, description, author, price } = request.body;

  const updateBook = new UpdateBookService();

  const book = await updateBook.execute({ id, name, description, author, price });

  return response.json(book);
});

booksRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteBook = new DeleteBookService();

  const book = await deleteBook.execute(id);

  return response.json(book);
});

export default booksRouter;
