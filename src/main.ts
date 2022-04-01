import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import compression from 'compression';
import { json } from 'express';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { validateEnvironmentVars } from './config/configuration';

const bootstrap = async () => {
  validateEnvironmentVars();
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.use(helmet());
  app.use(compression());
  app.use(json());

  const configService = app.get(ConfigService);
  const port = configService.get<number>('server.port') || 3000;

  await app.listen(port);
  Logger.log(`Application is running on: ${await app.getUrl()}`);
};

/* eslint-disable-next-line */
bootstrap();
