import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'GET - users' });
});

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'GET - users' });
});

usersRouter.post('/', (request, response) => {
  return response.json({ message: 'POST - users' });
});

usersRouter.put('/', (request, response) => {
  return response.json({ message: 'PUT - users' });
});

usersRouter.delete('/', (request, response) => {
  return response.json({ message: 'DELETE - users' });
});

export default usersRouter;
