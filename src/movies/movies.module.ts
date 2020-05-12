import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [ MoviesController],
  providers: [ MoviesService],
})
export class MoviesModule {}
