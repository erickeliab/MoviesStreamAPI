import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';
import { Users } from 'src/users/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  Role_id: number; 

  @Column()
  Crud_users : boolean; 

  @Column()
  Crud_movies : boolean; 

  @Column()
  Crud_seasons : boolean; 

  @Column()
  Crud_episodes : boolean; 

  @Column()
  Crud_countries : boolean; 

  @Column()
  Crud_actors : boolean; 

  @Column()
  Crud_directors : boolean; 


  @Column({ default: false })
  Deleted : boolean; 

  @OneToMany(type => Permission, perm => perm.role)
  permissions : Permission[];

  
 
}

