/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import 'dotenv/config';
import express from 'express';

import config from './config';

const startServer = async () => {
  const app = express();

  app.listen(config.port, () => {
    console.log(`Server Started on port ${config.port}`);
  });
};

startServer();
