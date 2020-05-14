import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMovieGenreTableMigration1589365138648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "type" ("Type_Id" SERIAL NOT NULL,"movie_id" SERIAL NOT NULL,"genre_id" SERIAL NOT NULL, CONSTRAINT "PK_0157b8fb7680742852df644d9b2" PRIMARY KEY ("Type_Id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "type" ADD CONSTRAINT "FK_0341b111ca59ba411aa1902fd20" FOREIGN KEY ("movie_id") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "type" ADD CONSTRAINT "FK_0341b111ca59ba411aa190rfd20" FOREIGN KEY ("genre_id") REFERENCES "genre"("Genre_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "type"`, undefined);
        await queryRunner.query(`ALTER TABLE "type" DROP CONSTRAINT "FK_0341b111ca59ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "type" DROP CONSTRAINT "FK_0341b111ca59ba411aa190rfd20"`, undefined);


    }

}
