import { Router } from 'express';
import booksRouter from './books.routes';
import usersRouter from './users.routes';
import rentsRouter from './rents.routes';
import reservationsRouter from './reservations.routes';

const routes = Router();

routes.use('/api/books', booksRouter);
routes.use('/api/users', usersRouter);
routes.use('/api/rents', rentsRouter);
routes.use('/api/reservations', reservationsRouter);

export default routes;
