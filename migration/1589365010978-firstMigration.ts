import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigration1589365010978 implements MigrationInterface {
    name = 'firstMigration1589365010978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "actor" ("Actor_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d7fc99a987c8f725ed6e23f7bbf" PRIMARY KEY ("Actor_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "season" ("Season_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Number" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "movieMovieId" integer, CONSTRAINT "PK_934dc209ec89cc720d8c90c678e" PRIMARY KEY ("Season_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "movie" ("Movie_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Description" character varying NOT NULL, "IMDB" character varying NOT NULL, "User_id" integer NOT NULL, "Link" character varying NOT NULL, "Cover" character varying NOT NULL, "Photo" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, "countryCountryId" integer, CONSTRAINT "PK_36c0f1834c623672f4826ba5950" PRIMARY KEY ("Movie_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "country" ("Country_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_bd6a0d651912674712383615cd5" PRIMARY KEY ("Country_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "director" ("Director_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_df70ca3cc5dd58bb3343c15e228" PRIMARY KEY ("Director_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "episode" ("Episode_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Number" integer NOT NULL, "Link" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_bc55b0bc9c30ab6e55ee4fff134" PRIMARY KEY ("Episode_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "genre" ("Genre_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_0157b8fb7680742952df644d9b2" PRIMARY KEY ("Genre_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "permission" ("Permission_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "User_id" integer NOT NULL, "Role_id" integer NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_5805479359fd09f0afb525339cc" PRIMARY KEY ("Permission_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "role" ("Role_id" SERIAL NOT NULL, "Crud_users" boolean NOT NULL, "Crud_movies" boolean NOT NULL, "Crud_seasons" boolean NOT NULL, "Crud_episodes" boolean NOT NULL, "Crud_countries" boolean NOT NULL, "Crud_actors" boolean NOT NULL, "Crud_directors" boolean NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_567b8d287e39bd991550d504b08" PRIMARY KEY ("Role_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("User_id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Phone" character varying NOT NULL,"Password" character varying NOT NULL,"Verifymail" character varying NOT NULL, "Email" character varying NOT NULL, "Deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_37806be2a46a9e6a8d00a6bdd2a" PRIMARY KEY ("User_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" ADD "seasonSeasonId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD CONSTRAINT "FK_e062257746a30f25cd118bb52de" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_0391b111ca59ba411aa1902fd20" FOREIGN KEY ("countryCountryId") REFERENCES "country"("Country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" ADD CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab" FOREIGN KEY ("seasonSeasonId") REFERENCES "season"("Season_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "episode" DROP CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_0391b111ca59ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP CONSTRAINT "FK_e062257746a30f25cd118bb52de"`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" DROP COLUMN "seasonSeasonId"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
        await queryRunner.query(`DROP TABLE "permission"`, undefined);
        await queryRunner.query(`DROP TABLE "genre"`, undefined);
        await queryRunner.query(`DROP TABLE "episode"`, undefined);
        await queryRunner.query(`DROP TABLE "director"`, undefined);
        await queryRunner.query(`DROP TABLE "country"`, undefined);
        await queryRunner.query(`DROP TABLE "movie"`, undefined);
        await queryRunner.query(`DROP TABLE "season"`, undefined);
        await queryRunner.query(`DROP TABLE "actor"`, undefined);
    }

}
