import express from 'express';
import { processRequestBody } from 'zod-express-middleware';

import { registerUser } from '@controllers/user';
import { registerUserSchema } from '@schemas/user';

const router = express.Router();

router.post(
  '/create',
  processRequestBody(registerUserSchema.body),
  registerUser
);

export default router;
