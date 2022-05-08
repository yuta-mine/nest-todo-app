import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function exportOpenApi(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder().setTitle('Todo app').build();
  const document = SwaggerModule.createDocument(app, options);

  const schema = JSON.stringify(document, null, 2);
  fs.writeFileSync(path.resolve(__dirname, 'openapi.schema'), schema);

  process.exit();
}

exportOpenApi();
