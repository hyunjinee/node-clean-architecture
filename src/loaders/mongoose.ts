import mongoose from 'mongoose';

import config from '@config';
import logger from '@utils/logger';

export default async () => {
  try {
    await mongoose.connect(config.mongoURL);
  } catch (error) {
    logger.info(
      'MongoDB connection error. Please make sure MongoDB is running.'
    );
    process.exit(1);
  }
};
