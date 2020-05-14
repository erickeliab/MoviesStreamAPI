import { Entity, Column, PrimaryGeneratedColumn,ManyToMany } from 'typeorm';
import { Movie } from 'src/movies/movies.entity';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  Director_id: number;

  @Column()
  Name : string; 

  @Column({ default: false })
  Deleted : boolean; 

  @ManyToMany(type => Movie)
  movies : Movie[];
}
