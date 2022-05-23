import { Container } from 'typedi';
import logger from '@utils/logger';

export default () => {
  Container.set('logger', logger);
};
