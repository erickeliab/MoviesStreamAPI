import { Entity, Column, PrimaryGeneratedColumn, ManyToOne , OneToMany, ManyToMany,JoinTable } from 'typeorm';
import { Country } from 'src/countries/countries.entity';
import { Season } from 'src/seasons/seasons.entity';
import { Genre } from 'src/genres/genre.entity';
import { Director } from 'src/directors/director.entity';
import { User } from 'src/users/user.entity';
import { Actor } from 'src/actors/actors.entity';
import { Permission } from 'src/permissions/permission.entity';


@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  Movie_id: number;

  @Column()
  Name : string; 

  @Column()
  Description : string; 


  @Column()
  IMDB : string; 

  @Column()
  User_id : number; 

  @Column()
  Link : string; 

  @Column()
  Cover : string; 

  @Column()
  Photo : string; 

  @Column({ default: false })
  Deleted : boolean; 

  @ManyToOne(type => Country, country => country.movies)
  country : Country;


  @OneToMany(type => Season, season => season.movie)
  seasons : Season[];


  @ManyToMany(type => Director)
  @JoinTable()
  directors : Director[];

  @ManyToMany(type => Actor)
  @JoinTable()
  actors : Actor[];


  @ManyToMany(type => Genre)
  @JoinTable()
  genres : Genre[];
}