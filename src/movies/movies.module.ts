import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [TypeOrmModule.forFeature([Movie]),
  AuthModule,
  UsersModule,
  PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ MoviesController],
  providers: [ MoviesService],
  exports : []
})
export class MoviesModule {
  
}
