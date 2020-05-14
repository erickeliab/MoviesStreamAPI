import { Entity, Column, PrimaryGeneratedColumn,OneToMany, JoinTable } from 'typeorm';
import { Movie } from 'src/movies/movies.entity';


@Entity()
export class Movie_Genre  {
  @PrimaryGeneratedColumn()
  Movie_Genre_id: number;

  Movie_id: number;

  
  
}
