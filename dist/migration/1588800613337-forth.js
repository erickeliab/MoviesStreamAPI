"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class forth1588800613337 {
    constructor() {
        this.name = 'forth1588800613337';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Movie_id"`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "season" ADD COLUMN "Movie_id"`, undefined);
    }
}
exports.forth1588800613337 = forth1588800613337;
//# sourceMappingURL=1588800613337-forth.js.map