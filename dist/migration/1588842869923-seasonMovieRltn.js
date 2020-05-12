"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class seasonMovieRltn1588842869923 {
    constructor() {
        this.name = 'seasonMovieRltn1588842869923';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" ADD "Movie_id" integer`, undefined);
    }
}
exports.seasonMovieRltn1588842869923 = seasonMovieRltn1588842869923;
//# sourceMappingURL=1588842869923-seasonMovieRltn.js.map