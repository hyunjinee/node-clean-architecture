import express from 'express';

import userRouter from '@routes/user';

const router = express.Router();

router.use('/user', userRouter);

router.get('/', (req, res) => {});

export default router;
