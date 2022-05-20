import 'dotenv/config';
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
