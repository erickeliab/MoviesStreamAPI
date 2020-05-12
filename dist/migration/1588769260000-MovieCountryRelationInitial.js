"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MovieCountryRelationInitial1588769260000 {
    constructor() {
        this.name = 'MovieCountryRelationInitial1588769260000';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "country" ADD "moviesMovieId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "country" ADD CONSTRAINT "FK_c7c469f364fda56325846440a6c" FOREIGN KEY ("moviesMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "country" DROP CONSTRAINT "FK_c7c469f364fda56325846440a6c"`, undefined);
        await queryRunner.query(`ALTER TABLE "country" DROP COLUMN "moviesMovieId"`, undefined);
    }
}
exports.MovieCountryRelationInitial1588769260000 = MovieCountryRelationInitial1588769260000;
//# sourceMappingURL=1588769260000-MovieCountryRelationInitial.js.map