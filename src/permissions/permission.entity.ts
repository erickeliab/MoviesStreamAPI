import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Role } from 'src/roles/role.entity';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  Permission_id: number;

  @Column()
  Name : string; 


  @Column({ default: false })
  Deleted : boolean; 

  @OneToMany(type => User, user => user.permission)
  users : User[];


  @OneToMany(type => Role, role => role.permission)
  roles : Role[];
  
}
