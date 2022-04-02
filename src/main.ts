import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './config/config.interface';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  });

  // Swagger Config
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  if (swaggerConfig && swaggerConfig.enabled) {
    const sw = await import('@nestjs/swagger');
    const options = new sw.DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.version)
      .build();
    const document = sw.SwaggerModule.createDocument(app, options);

    sw.SwaggerModule.setup(swaggerConfig.path, app, document);
  }

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  // Cors
  const enableCors = configService.get<boolean>('cors.enabled');
  if (enableCors) app.enableCors();

  await app.listen(configService.get<number>('port'));
}
bootstrap();
