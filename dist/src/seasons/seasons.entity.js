"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const movies_entity_1 = require("../movies/movies.entity");
const episode_entity_1 = require("../episodes/episode.entity");
let Season = class Season {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Season.prototype, "Season_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Season.prototype, "Name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Season.prototype, "Number", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Season.prototype, "Deleted", void 0);
__decorate([
    typeorm_1.ManyToOne(type => movies_entity_1.Movie, movie => movie.seasons),
    __metadata("design:type", movies_entity_1.Movie)
], Season.prototype, "movie", void 0);
__decorate([
    typeorm_1.OneToMany(type => episode_entity_1.Episode, episode => episode.season),
    __metadata("design:type", Array)
], Season.prototype, "episodes", void 0);
Season = __decorate([
    typeorm_1.Entity()
], Season);
exports.Season = Season;
//# sourceMappingURL=seasons.entity.js.map