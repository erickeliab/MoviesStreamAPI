import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Movie} from '../movies/movies.entity';
@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  Country_id: number;

  @Column()
  Name : string; 

  @Column({ default: false })
  Deleted : boolean; 

  @OneToMany(type => Movie, movie => movie.country)
  movies : Movie[]

}
