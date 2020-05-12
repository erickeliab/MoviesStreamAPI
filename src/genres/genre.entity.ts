import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Movie } from 'src/movies/movies.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  Genre_id: number;

  @Column()
  Name: string;

  @Column({ default: false })
  Deleted: boolean;

  @ManyToMany(type => Movie)
  movies: Movie[];

  /* manytomany relationship requires and intermediate table
  In this case which would hold movieId and genreId 
  with foreign constraints referencing movie and genere respectively

    @ManyToMany(
    type => Movie,
    movie => movie.genre,
    { nullable: false },
  )
  @JoinTable({ name: 'moviegeneres' })
  movies: Movie[];
}

  */
}
