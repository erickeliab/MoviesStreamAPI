import { Entity, Column, PrimaryGeneratedColumn,ManyToOne ,OneToMany} from 'typeorm';
import { Movie } from 'src/movies/movies.entity';
import { Episode } from 'src/episodes/episode.entity';

@Entity()
export class Season {
  @PrimaryGeneratedColumn()
  Season_id: number;

  @Column()
  Name : string; 


  @Column()
  Number : string; 


  @Column({ default: false })
  Deleted : boolean; 

  @ManyToOne(type => Movie, movie => movie.seasons)
  movie : Movie;

  @OneToMany(type => Episode, episode => episode.season)
  episodes : Episode[];
}


