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
const countries_entity_1 = require("../countries/countries.entity");
const seasons_entity_1 = require("../seasons/seasons.entity");
let Movie = class Movie {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Movie.prototype, "Movie_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "Name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "Description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "IMDB", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Movie.prototype, "User_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "Link", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "Cover", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "Photo", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Movie.prototype, "Deleted", void 0);
__decorate([
    typeorm_1.ManyToOne(type => countries_entity_1.Country, country => country.movies),
    __metadata("design:type", countries_entity_1.Country)
], Movie.prototype, "country", void 0);
__decorate([
    typeorm_1.OneToMany(type => seasons_entity_1.Season, season => season.movie),
    __metadata("design:type", Array)
], Movie.prototype, "seasons", void 0);
Movie = __decorate([
    typeorm_1.Entity()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movies.entity.js.map