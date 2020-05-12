"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class first1588798144532 {
    constructor() {
        this.name = 'first1588798144532';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" ADD "Country_id" integer NULL`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "Country_id"`, undefined);
    }
}
exports.first1588798144532 = first1588798144532;
//# sourceMappingURL=1588798144532-first.js.map