import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

import baseRouter from '@routes/index';

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
  app.use(express.static('public'));

  app.get('/ping', (req, res) => {
    res.send({ message: 'pong' });
  });

  app.use('/api', baseRouter);
  // app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
      },
    })
  );
};
