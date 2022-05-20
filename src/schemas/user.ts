import { object, string, TypeOf } from 'zod';

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: 'username is required',
    }),
    email: string({
      required_error: 'email is required',
    }),
    password: string({
      required_error: 'password is required',
    })
      .min(6, 'password must be at least 6 characters long')
      .max(64, "password can't be longer than 64 characters"),
    confirmPassword: string({
      required_error: 'confirmPassword is required',
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }),
};
