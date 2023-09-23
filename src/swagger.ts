import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { Swagger } from '@constants';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle(Swagger.TITLE)
    .setDescription(Swagger.DESCRIPTION)
    .setVersion(Swagger.VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(Swagger.PATH, app, document);
}
