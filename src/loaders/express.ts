import express, { Application } from 'express';
import cors from 'cors';

const options: cors.CorsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

export default (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors(options));

  console.log('nodeenv', process.env.NODE_ENV);
};
