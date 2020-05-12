import { Entity, Column, PrimaryGeneratedColumn,ManyToMany } from 'typeorm';
import { Movie } from 'src/movies/movies.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  Genre_id: number;

  @Column()
  Name : string; 

  @Column({ default: false })
  Deleted : boolean; 

  @ManyToMany(type => Movie)
  movies : Movie[];
}
