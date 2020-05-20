import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { GenresModule } from '../genres/genres.module';
import { GenresService } from '../genres/genres.service';


@Module({
  imports: [TypeOrmModule.forFeature([Movie]),GenresModule],
  controllers: [ MoviesController],
  providers: [ MoviesService],
  exports : []
})
export class MoviesModule {
  
}
