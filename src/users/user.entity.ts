import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';
import { type } from 'os';
import { Role } from 'src/roles/role.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  User_id: number; 

  @Column()
  Name : string; 

  @Column()
  Phone: string;

  @Column()
  Email: string;

  @Column()
  Password : string;
    
  @Column()
  Verifymail : string;


  @Column({ default: false , nullable : true})
  Deleted : boolean; 

  @OneToMany(type => Permission, perm => perm.user)
  permissions : Permission[];

}