import { Application } from 'express';

import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async (app: Application) => {
  await mongooseLoader();
  console.log('DB CONNECTED');
  expressLoader(app);
  console.log('Express INITIALIZED');
};
