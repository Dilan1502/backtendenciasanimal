import { Module } from '@nestjs/common';
import { animalsController } from './animals.controller';
import { animalsService } from './animals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from './animals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  controllers: [animalsController],
  providers: [animalsService]
})
export class AnimalesModule {}
