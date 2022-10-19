import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import process from 'process';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get("PORT")
  app.enableCors()
  await app.listen(port);
}
bootstrap();
