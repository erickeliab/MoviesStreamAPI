import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  Director_id: number;

  @Column()
  Name : string; 

  @Column({ default: false })
  Deleted : boolean; 
}
