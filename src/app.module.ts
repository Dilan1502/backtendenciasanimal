import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalesModule } from './animals/animals.module';
import { AnimalEntity } from './animals/animals.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'tap',
      entities: [AnimalEntity],
      synchronize: true,
    }),
    AnimalesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
