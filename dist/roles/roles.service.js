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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./role.entity");
let RolesService = class RolesService {
    constructor(RoleRepository) {
        this.RoleRepository = RoleRepository;
    }
    async getall() {
        return await this.RoleRepository.find();
    }
    async getOne(id) {
        return this.RoleRepository.findOne();
    }
    async add(body) {
        var role = new role_entity_1.Role();
        role = body;
        return await this.RoleRepository.save(role);
    }
    async update(body, id) {
        const role = this.RoleRepository.findOne(id);
        await this.RoleRepository.update(id, {
            Crud_users: body.Crud_users ? body.Crud_users : (await role).Crud_users,
            Crud_movies: body.Crud_movies ? body.Crud_movies : (await role).Crud_movies,
            Crud_seasons: body.Crud_seasons ? body.Crud_seasons : (await role).Crud_seasons,
            Crud_episodes: body.Crud_episodes ? body.Crud_episodes : (await role).Crud_episodes,
            Crud_countries: body.Crud_countries ? body.Crud_countries : (await role).Crud_countries,
            Crud_actors: body.Crud_actors ? body.Crud_actors : (await role).Crud_actors,
            Crud_directors: body.Crud_directors ? body.Crud_directors : (await role).Crud_directors,
            Deleted: body.Deleted ? body.Deleted : (await role).Deleted
        });
    }
    async remove(id) {
        await this.RoleRepository.delete(id);
    }
};
RolesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map