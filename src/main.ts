import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('tendencias actuales de programacion')
    .setDescription('DOCUMENTATION')
    .setVersion('1.0')
    .addTag('EXAMPLE OF NESTJS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/sebas', app, document);
  app.useGlobalPipes(new ValidationPipe(
    {
      errorHttpStatusCode:422,
      stopAtFirstError:true,
      whitelist: true, //es para q no acepte mas campos q no esten en el dto
      forbidNonWhitelisted:true, //manda mensaje q no vale esa propiedad extra q no esta en el dto
      transformOptions:{
        enableImplicitConversion:true
      }
    }
  ));
  await app.listen(3000);
}
bootstrap();
