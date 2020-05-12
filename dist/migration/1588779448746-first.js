"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class first1588779448746 {
    constructor() {
        this.name = 'first1588779448746';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "country" ADD "moviesMovieId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "country" ADD CONSTRAINT "FK_c7c469f364fda56325846440a6c" FOREIGN KEY ("moviesMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "country" DROP CONSTRAINT "FK_c7c469f364fda56325846440a6c"`, undefined);
        await queryRunner.query(`ALTER TABLE "country" DROP COLUMN "moviesMovieId"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer NOT NULL`, undefined);
    }
}
exports.first1588779448746 = first1588779448746;
//# sourceMappingURL=1588779448746-first.js.map