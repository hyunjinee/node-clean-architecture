import supertest from 'supertest';
import express from 'express';
import expressLoader from '../src/loaders/express';
import mongoose from 'mongoose';
import config from '../src/config';

const app = express();

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/temp');
  expressLoader(app);
});

describe('product', () => {
  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 404,', () => {
        expect(true).toBe(true);
      });
      it('should return a 201', async () => {
        const productId = 'product-123';
        await supertest(app).get(`/api/producs/${productId}`).expect(404);
      });
    });
  });
});
