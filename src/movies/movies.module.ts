import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { GenresModule } from '../genres/genres.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]),GenresModule],
  controllers: [ MoviesController],
  providers: [ MoviesService],
  exports : [Connection]
})
export class MoviesModule {
  constructor(private connection: Connection) {}
}
