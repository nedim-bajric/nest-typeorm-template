import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { config } from 'dotenv';

import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { Swagger } from './shared/constants/swagger.constants';

config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);

  await app.listen(process.env.APP_PORT);

  Logger.log(`Application is running on port: ${process.env.APP_PORT} `);
  Logger.log(`Swagger is running on path: ${Swagger.PATH} `);
}
bootstrap();
