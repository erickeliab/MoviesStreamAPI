import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './episode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Episode])],
  controllers: [ EpisodesController],
  providers: [ EpisodesService],
})
export class EpisodesModule {}
