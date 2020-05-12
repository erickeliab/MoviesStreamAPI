"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class movieserrltn1588841621608 {
    constructor() {
        this.name = 'movieserrltn1588841621608';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" ADD "movieMovieId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Movie_id" integer NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD CONSTRAINT "FK_e062257746a30f25cd118bb52de" FOREIGN KEY ("movieMovieId") REFERENCES "movie"("Movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP CONSTRAINT "FK_e062257746a30f25cd118bb52de"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "movieMovieId"`, undefined);
    }
}
exports.movieserrltn1588841621608 = movieserrltn1588841621608;
//# sourceMappingURL=1588841621608-movieserrltn.js.map