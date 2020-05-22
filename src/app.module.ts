import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { SeasonsModule } from './seasons/seasons.module';
import { EpisodesModule } from './episodes/episodes.module';
import { GenresModule } from './genres/genres.module';
import { DirectorsModule } from './directors/directors.module';
import { CountriesModule } from './countries/countries.module';
import { ActorsModule } from './actors/actors.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AuthModule } from './auth/auth.module';
import { Connection } from  'typeorm';


@Module({
  imports: [MoviesModule,SeasonsModule,PermissionsModule,RolesModule,
    UsersModule,ActorsModule,CountriesModule, DirectorsModule,GenresModule,
    EpisodesModule,
    TypeOrmModule.forRoot(),
    AuthModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
