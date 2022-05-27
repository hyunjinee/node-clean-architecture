import supertest from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import expressLoader from '@loaders/express';

const app = express();

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    expressLoader(app);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 404,', () => {
        expect(true).toBe(true);
      });
    });

    describe('create product', () => {
      it('should return a 201', async () => {
        const productId = 'product-123';
        await supertest(app).get(`/api/producs/${productId}`).expect(404);
      });
    });
  });
});
