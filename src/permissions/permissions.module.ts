import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './permission.entity';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [ PermissionsController],
  providers: [PermissionsService, PermissionsService],
})
export class PermissionsModule {}
