import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './utils/http-exception.filter';
import { ErrorFilter } from './utils/error.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.enableCors({
    origin: 'https://www.linkedin.com',
  });
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ErrorFilter(), new HttpExceptionFilter());
  await app.listen(port, () => {
    new Logger('NestApplication').log(
      `Listening at http://localhost:${port}`,
    );
  });
}

bootstrap();
