import { Router } from 'express';

const reservationsRouter = Router();

reservationsRouter.get('/', (request, response) => {
  return response.json({ message: 'GET - reservations' });
});

reservationsRouter.get('/:id', (request, response) => {
  return response.json({ message: 'GET - reservations' });
});

reservationsRouter.post('/', (request, response) => {
  return response.json({ message: 'POST - reservations' });
});

reservationsRouter.put('/:id', (request, response) => {
  return response.json({ message: 'PUT - reservations' });
});

reservationsRouter.delete('/:id', (request, response) => {
  return response.json({ message: 'DELETE - reservations' });
});

export default reservationsRouter;
