import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';

import config from '@config';
import loaders from '@loaders';
import logger from '@utils/logger';

const startServer = async () => {
  const app = express();
  await loaders(app);

  app.listen(config.port, () => {
    logger.info(`Server Listening on port ${config.port}`);
  });
};

startServer();

// https://rsbh.dev/blog/rest-api-with-express-typescript
