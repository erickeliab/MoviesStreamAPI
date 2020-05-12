import { Module } from '@nestjs/common';
import { ActorsController } from './actors.controller';
import { ActorsService } from './actors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './actors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Actor])],
  controllers: [ ActorsController],
  providers: [ ActorsService],
})
export class ActorsModule {}
