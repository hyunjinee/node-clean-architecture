import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      swagger: '2.0',
      title: 'LogRocket Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'hyunjin',
        url: '',
        email: 'leehj0110@kakao.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  // info: {
  //   swagger: '2.0',
  // },
  apis: ['./src/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
// import { Application, Express, Request, Response } from 'express';
// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

// import { version } from '../../package.json';
// import logger from '@utils/logger';
// import config from '@config';

// const options: swaggerJsdoc.Options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'REST API DOCS',
//       version,
//     },
//     components: {
//       securitySchemas: {
//         bearerAuth: {
//           type: 'http',
//           scheme: 'bearer',
//           bearerFormat: 'JWT',
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//   apis: ['./src/routes.ts', './src/schemas/*.ts'],
// };

// const swaggerSpec = swaggerJsdoc(options);

// const swaggerDocs = (app: Express, port: number | string) => {
//   app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//   app.get('/docs.json', (req: Request, res: Response) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerSpec);
//   });

//   logger.info(`Docs available at http://localhost:${port}/docs`);
// };

// export default swaggerDocs;
