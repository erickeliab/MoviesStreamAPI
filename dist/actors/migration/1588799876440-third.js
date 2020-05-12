"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class third1588799876440 {
    constructor() {
        this.name = 'third1588799876440';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
    }
}
exports.third1588799876440 = third1588799876440;
//# sourceMappingURL=1588799876440-third.js.map