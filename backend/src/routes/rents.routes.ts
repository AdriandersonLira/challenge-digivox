import { Router } from 'express';

const rentsRouter = Router();

rentsRouter.get('/', (request, response) => {
  return response.json({ message: 'GET - rents'});
});

rentsRouter.get('/:id', (request, response) => {
  return response.json({ message: 'GET - rents'});
});

rentsRouter.post('/', (request, response) => {
  return response.json({ message: 'POST - rents'});
});

rentsRouter.put('/:id', (request, response) => {
  return response.json({ message: 'PUT - rents'});
});

rentsRouter.delete('/:id', (request, response) => {
  return response.json({ message: 'DELETE - rents'});
});

export default rentsRouter;
