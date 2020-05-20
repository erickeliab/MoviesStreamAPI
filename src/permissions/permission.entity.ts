import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Users } from 'src/users/user.entity';
import { Role } from 'src/roles/role.entity';

@Entity()
export class Permission {
  @PrimaryColumn()
  User_id : number;

  @PrimaryColumn()
  Role_id : number;
  
  @Column()
  Name : string; 

  @Column()
  Deleted : boolean;
  
  @ManyToOne(type => Users, user => user.permissions)
  @JoinColumn({name : 'User_id'})
  user : Users;
  
  @ManyToOne(type => Role, role => role.permissions)
  @JoinColumn({name : 'Role_id'})
  role : Role;
}
