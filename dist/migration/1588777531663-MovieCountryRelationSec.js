"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MovieCountryRelationSec1588777531663 {
    constructor() {
        this.name = 'MovieCountryRelationSec1588777531663';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "country" ADD "moviesMovieId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD "countriesCountryId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "country" ADD CONSTRAINT "FK_c7c469f364fda56325846440a6c" FOREIGN KEY ("moviesMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_7ccd7bcb0dc8688920a790446fb" FOREIGN KEY ("countriesCountryId") REFERENCES "country"("Country_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_7ccd7bcb0dc8688920a790446fb"`, undefined);
        await queryRunner.query(`ALTER TABLE "country" DROP CONSTRAINT "FK_c7c469f364fda56325846440a6c"`, undefined);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "countriesCountryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "country" DROP COLUMN "moviesMovieId"`, undefined);
    }
}
exports.MovieCountryRelationSec1588777531663 = MovieCountryRelationSec1588777531663;
//# sourceMappingURL=1588777531663-MovieCountryRelationSec.js.map