import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import { json } from 'express';
import helmet from 'helmet';

import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.use(helmet());
  app.use(compression());
  app.use(json());

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
};

/* eslint-disable-next-line */
bootstrap();
