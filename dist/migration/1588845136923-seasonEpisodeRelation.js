"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class seasonEpisodeRelation1588845136923 {
    constructor() {
        this.name = 'seasonEpisodeRelation1588845136923';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "episode" ADD "seasonSeasonId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" character varying NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" ADD CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab" FOREIGN KEY ("seasonSeasonId") REFERENCES "season"("Season_id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "episode" DROP CONSTRAINT "FK_f9ea5a7c4b70052993c6763b4ab"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" DROP COLUMN "Number"`, undefined);
        await queryRunner.query(`ALTER TABLE "season" ADD "Number" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "episode" DROP COLUMN "seasonSeasonId"`, undefined);
    }
}
exports.seasonEpisodeRelation1588845136923 = seasonEpisodeRelation1588845136923;
//# sourceMappingURL=1588845136923-seasonEpisodeRelation.js.map