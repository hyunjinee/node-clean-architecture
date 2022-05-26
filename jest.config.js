/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  forceExit: true,
  moduleNameMapper: {
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@loaders/(.*)': '<rootDir>/src/loaders/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@controllers/(.*)': '<rootDir>/src/controllers/$1',
    '@middlewares/(.*)': '<rootDir>/src/middlewares/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@schemas/(.*)': '<rootDir>/src/schemas/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
};
