import { Application } from 'express';

import logger from '@utils/logger';
import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async (app: Application) => {
  await mongooseLoader();
  logger.info('DB CONNECTED');

  expressLoader(app);
  logger.info('Express INITIALIZED');
  logger.info('Docs are available at /docs');
};
