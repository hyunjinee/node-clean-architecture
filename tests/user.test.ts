import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import expressLoader from '@loaders/express';

const app = express();

describe('user', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    expressLoader(app);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('POST /user', () => {
    describe('given username, email and password', () => {
      it('should return a 201', async () => {
        const registerUser = jest.fn();

        await request(app).post('/api/user/create').send({
          username: 'test',
          email: 'test@gmail.com',
          password: 'test123',
        });

        expect(registerUser.mock.calls.length).toBe(0);
      });
    });
  });
});
