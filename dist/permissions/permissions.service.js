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
const permission_entity_1 = require("./permission.entity");
let PermissionsService = class PermissionsService {
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async getall() {
        return await this.permissionRepository.find();
    }
    async getOne(id) {
        return this.permissionRepository.findOne();
    }
    async add(body) {
        var permission = new permission_entity_1.Permission();
        permission = body;
        return await this.permissionRepository.save(permission);
    }
    async update(body, id) {
        const permission = this.permissionRepository.findOne(id);
        await this.permissionRepository.update(id, {
            Name: body.Name ? body.Name : (await permission).Name,
            User_id: body.User_id ? body.User_id : (await permission).User_id,
            Role_id: body.Role_id ? body.Role_id : (await permission).Role_id,
            Deleted: body.Deleted ? body.Deleted : (await permission).Deleted
        });
    }
    async remove(id) {
        await this.permissionRepository.delete(id);
    }
};
PermissionsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(permission_entity_1.Permission)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map