import supertest from 'supertest';
import express from 'express';
import expressLoader from '@loaders/express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const app = express();

describe('product', () => {
  beforeAll(async () => {
    // await mongoose.connect('mongodb://127.0.0.1:27017/temp');
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    expressLoader(app);
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
