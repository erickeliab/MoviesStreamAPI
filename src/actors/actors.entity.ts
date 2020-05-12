import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn()
  Actor_id: number;

  @Column()
  Name : string; 

  @Column({ default: false })
  Deleted : boolean; 
}
