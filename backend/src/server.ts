import 'reflect-metadata';

import express from 'express';
import console from 'console';

import './database';
import routes from './routes';
import logRequests from './middlewares/logRequests.middleware';

const app = express();

app.use(express.json());

app.use(logRequests);

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
