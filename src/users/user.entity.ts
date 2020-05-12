import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  User_id: number; 

  @Column()
  Name : string; 

  @Column()
  Phone: number;

  @Column()
  Email: string;


  @Column({ default: false })
  Deleted : boolean; 

  @ManyToOne(type => Permission, permission => permission.users)
  permission : Permission;
}