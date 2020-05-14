import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';
import { type } from 'os';

@Entity()
export class User {
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


  @Column({ default: false })
  Deleted : boolean; 

  @ManyToOne(type => Permission, perm => perm.users)
  permission : Permission;

}