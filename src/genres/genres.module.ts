import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './genre.entity';
import { GenresService } from './genres.service';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [ GenresController],
  providers: [ GenresService, GenresService],
  exports: [GenresService]
})
export class GenresModule {}
