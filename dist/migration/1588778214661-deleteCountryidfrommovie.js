"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class deleteCountryidfrommovie1588778214661 {
    constructor() {
        this.name = 'deleteCountryidfrommovie1588778214661';
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
exports.deleteCountryidfrommovie1588778214661 = deleteCountryidfrommovie1588778214661;
//# sourceMappingURL=1588778214661-deleteCountryidfrommovie.js.map