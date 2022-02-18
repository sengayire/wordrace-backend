import express, { Express, Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
import http, { Server } from 'http';
import createError, { HttpError } from 'http-errors';
import cors from 'cors';
import dbConfigs from 'src/database/model';

import { HTTP_NOT_FOUND, HTTP_SERVER_ERROR } from './constants/httpStatusCode';
import routes from '../src/routes';

dotenv.config();

const app: Express = express();
const server: Server = http.createServer(app);

//DB connection
dbConfigs();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);



app.use((_: Request, __: Response, next) => {
  next(createError(HTTP_NOT_FOUND));
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction): void => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || HTTP_SERVER_ERROR);
  const response = { message: err.message, error: err.status };
  res.send(response);
  next();
});

export { app, server };
