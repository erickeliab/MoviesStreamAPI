import { Module } from '@nestjs/common';
import { DirectorsController } from './directors.controller';
import { DirectorsService } from './directors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Director } from './director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  controllers: [ DirectorsController],
  providers: [ DirectorsService],
})
export class DirectorsModule {}
