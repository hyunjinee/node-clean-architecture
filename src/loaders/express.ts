import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const options: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

export default (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors(options));
  app.use(helmet());

  console.log('nodeenv', process.env.NODE_ENV);
};
