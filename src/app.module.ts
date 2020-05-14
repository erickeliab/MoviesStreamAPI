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
import { Movie } from  './movies/movies.entity';
import { Season } from './seasons/seasons.entity';
import { Permission } from  './permissions/permission.entity';
import { Role } from './roles/role.entity';
import { User } from  './users/user.entity';
import { Actor } from './actors/actors.entity';
import { Country } from  './countries/countries.entity';
import { Director } from './directors/director.entity';
import { Genre } from  './genres/genre.entity';
import { Episode } from './episodes/episode.entity';
import { Connection } from  'typeorm';


@Module({
  imports: [MoviesModule,SeasonsModule,PermissionsModule,RolesModule,
    UsersModule,ActorsModule,CountriesModule, DirectorsModule,GenresModule,
    EpisodesModule,
    TypeOrmModule.forRoot()
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
