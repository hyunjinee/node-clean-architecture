export default {
  port: process.env.PORT ?? 3000,
  mongoURL: process.env.MONGODB_URL!,
  jwtSecret: process.env.JWT_SECRET!,
};
