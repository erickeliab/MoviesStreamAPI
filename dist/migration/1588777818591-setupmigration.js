"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class setupmigration1588777818591 {
    constructor() {
        this.name = 'setupmigration1588777818591';
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
exports.setupmigration1588777818591 = setupmigration1588777818591;
//# sourceMappingURL=1588777818591-setupmigration.js.map