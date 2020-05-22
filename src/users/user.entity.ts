import { 
      Entity,
      Column, 
      PrimaryGeneratedColumn,
      CreateDateColumn,
      BeforeInsert,
      OneToMany
     } from 'typeorm';
import { Permission } from 'src/permissions/permission.entity';
import * as bcrypt from 'bcrypt';

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

  @CreateDateColumn() createdOn?: Date;
  @CreateDateColumn() updatedOn?: Date;

  @Column({ default: false })
  Deleted : boolean; 

  @OneToMany(type => Permission, perm => perm.user)
  permissions : Permission[];

  @BeforeInsert()  async hashPassword() {
    this.Password = await bcrypt.hash(this.Password, 10);  
  }
  
}