import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1589964930869 implements MigrationInterface {
    name = 'InitialMigration1589964930869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "country" ("Country_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_bd6a0d651912674712383615cd5" PRIMARY KEY ("Country_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "episode" ("Episode_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Number" integer NOT NULL, "Link" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "seasonSeasonId" integer, CONSTRAINT "PK_bc55b0bc9c30ab6e55ee4fff134" PRIMARY KEY ("Episode_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "season" ("Season_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Number" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "movieMovieId" integer, CONSTRAINT "PK_934dc209ec89cc720d8c90c678e" PRIMARY KEY ("Season_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "genre" ("Genre_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_0157b8fb7680742952df644d9b2" PRIMARY KEY ("Genre_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "director" ("Director_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_df70ca3cc5dd58bb3343c15e228" PRIMARY KEY ("Director_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "movie" ("Movie_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "IMDB" character varying NOT NULL, "User_id" integer NOT NULL, "Link" character varying NOT NULL, "Cover" character varying NOT NULL, "Photo" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "countryCountryId" integer, CONSTRAINT "PK_36c0f1834c623672f4826ba5950" PRIMARY KEY ("Movie_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "actor" ("Actor_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d7fc99a987c8f725ed6e23f7bbf" PRIMARY KEY ("Actor_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "movie__genre" ("Movie_Genre_id" SERIAL NOT NULL, CONSTRAINT "PK_22c01ed2dd02a5e908c25fa718f" PRIMARY KEY ("Movie_Genre_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "users" ("User_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Phone" character varying NOT NULL, "Email" character varying NOT NULL, "Password" character varying NOT NULL, "Verifymail" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "permissionPermissionId" integer, CONSTRAINT "PK_37806be2a46a9e6a8d00a6bdd2a" PRIMARY KEY ("User_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("Role_id" SERIAL NOT NULL, "Crud_users" boolean NOT NULL, "Crud_movies" boolean NOT NULL, "Crud_seasons" boolean NOT NULL, "Crud_episodes" boolean NOT NULL, "Crud_countries" boolean NOT NULL, "Crud_actors" boolean NOT NULL, "Crud_directors" boolean NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "permissionPermissionId" integer, CONSTRAINT "PK_567b8d287e39bd991550d504b08" PRIMARY KEY ("Role_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "permission" ("Permission_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_5805479359fd09f0afb525339cc" PRIMARY KEY ("Permission_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type" ("genreGenreId" integer NOT NULL, "movieMovieId" integer NOT NULL, CONSTRAINT "PK_4cdcdf0600ff7560f81ed3db778" PRIMARY KEY ("genreGenreId", "movieMovieId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_127c62e8e14a476a6646687647" ON "type" ("genreGenreId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_2c869dda40ba00e72696fb90d1" ON "type" ("movieMovieId") `, undefined);
        await queryRunner.query(`CREATE TABLE "movie_directors_director" ("movieMovieId" integer NOT NULL, "directorDirectorId" integer NOT NULL, CONSTRAINT "PK_d9f8e16109e3bed0a422da1417d" PRIMARY KEY ("movieMovieId", "directorDirectorId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_93ea3d507dbf73da7c95df483e" ON "movie_directors_director" ("movieMovieId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_6c451b156204cbbcc17002148a" ON "movie_directors_director" ("directorDirectorId") `, undefined);
        await queryRunner.query(`CREATE TABLE "movie_actors_actor" ("movieMovieId" integer NOT NULL, "actorActorId" integer NOT NULL, CONSTRAINT "PK_b74c2416670f1a563ae8a386b30" PRIMARY KEY ("movieMovieId", "actorActorId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_c97ad33f2ad62f033c9b37a7ca" ON "movie_actors_actor" ("movieMovieId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ba1a377fe3ea8b9424e312489e" ON "movie_actors_actor" ("actorActorId") `, undefined);
        await queryRunner.query(`ALTER TABLE "episode" ADD CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab" FOREIGN KEY ("seasonSeasonId") REFERENCES "season"("Season_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD CONSTRAINT "FK_e062257746a30f25cd118bb52de" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_0391b111ca59ba411aa1902fd20" FOREIGN KEY ("countryCountryId") REFERENCES "country"("Country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0d6946816b5673f50e0b90a0339" FOREIGN KEY ("permissionPermissionId") REFERENCES "permission"("Permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "FK_53ab246650fe7260173ab5bede9" FOREIGN KEY ("permissionPermissionId") REFERENCES "permission"("Permission_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "type" ADD CONSTRAINT "FK_127c62e8e14a476a6646687647f" FOREIGN KEY ("genreGenreId") REFERENCES "genre"("Genre_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "type" ADD CONSTRAINT "FK_2c869dda40ba00e72696fb90d14" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_directors_director" ADD CONSTRAINT "FK_93ea3d507dbf73da7c95df483ee" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_directors_director" ADD CONSTRAINT "FK_6c451b156204cbbcc17002148ab" FOREIGN KEY ("directorDirectorId") REFERENCES "director"("Director_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_c97ad33f2ad62f033c9b37a7ca9" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" ADD CONSTRAINT "FK_ba1a377fe3ea8b9424e312489e2" FOREIGN KEY ("actorActorId") REFERENCES "actor"("Actor_id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_ba1a377fe3ea8b9424e312489e2"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_actors_actor" DROP CONSTRAINT "FK_c97ad33f2ad62f033c9b37a7ca9"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_directors_director" DROP CONSTRAINT "FK_6c451b156204cbbcc17002148ab"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie_directors_director" DROP CONSTRAINT "FK_93ea3d507dbf73da7c95df483ee"`, undefined);
        await queryRunner.query(`ALTER TABLE "type" DROP CONSTRAINT "FK_2c869dda40ba00e72696fb90d14"`, undefined);
        await queryRunner.query(`ALTER TABLE "type" DROP CONSTRAINT "FK_127c62e8e14a476a6646687647f"`, undefined);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "FK_53ab246650fe7260173ab5bede9"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0d6946816b5673f50e0b90a0339"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_0391b111ca59ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP CONSTRAINT "FK_e062257746a30f25cd118bb52de"`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" DROP CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ba1a377fe3ea8b9424e312489e"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_c97ad33f2ad62f033c9b37a7ca"`, undefined);
        await queryRunner.query(`DROP TABLE "movie_actors_actor"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_6c451b156204cbbcc17002148a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_93ea3d507dbf73da7c95df483e"`, undefined);
        await queryRunner.query(`DROP TABLE "movie_directors_director"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_2c869dda40ba00e72696fb90d1"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_127c62e8e14a476a6646687647"`, undefined);
        await queryRunner.query(`DROP TABLE "type"`, undefined);
        await queryRunner.query(`DROP TABLE "permission"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
        await queryRunner.query(`DROP TABLE "movie__genre"`, undefined);
        await queryRunner.query(`DROP TABLE "actor"`, undefined);
        await queryRunner.query(`DROP TABLE "movie"`, undefined);
        await queryRunner.query(`DROP TABLE "director"`, undefined);
        await queryRunner.query(`DROP TABLE "genre"`, undefined);
        await queryRunner.query(`DROP TABLE "season"`, undefined);
        await queryRunner.query(`DROP TABLE "episode"`, undefined);
        await queryRunner.query(`DROP TABLE "country"`, undefined);
    }

}
