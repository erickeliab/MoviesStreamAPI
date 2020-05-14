import {MigrationInterface, QueryRunner} from "typeorm";

export class createCastTableMigration1589366623964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "cast" ("Cast_id" SERIAL NOT NULL,"movieMovieId" SERIAL NOT NULL,"actorId" SERIAL NOT NULL, CONSTRAINT "PK_0157b7fb7680742852df644d9b2" PRIMARY KEY ("Cast_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "cast" ADD CONSTRAINT "FK_0341b111ca49ba411aa1902fd20" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "cast" ADD CONSTRAINT "FK_0341b111ca49ba411aa1902fd10" FOREIGN KEY ("actorId") REFERENCES "actor"("Actor_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "cast"`, undefined);
        await queryRunner.query(`ALTER TABLE "cast" DROP CONSTRAINT "FK_0341b111ca49ba411aa1902fd20"`, undefined);
        await queryRunner.query(`ALTER TABLE "cast" DROP CONSTRAINT "FK_0341b111ca49ba411aa1902fd10"`, undefined);


    }

}
