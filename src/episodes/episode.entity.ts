import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Season } from 'src/seasons/seasons.entity';

@Entity()
export class Episode {
  @PrimaryGeneratedColumn()
  Episode_id: number;

  @Column()
  Name : string; 

  @Column()
  Number : number; 

  @Column()
  Link : string; 

  @Column({ default: false })
  Deleted : boolean; 

  @ManyToOne(type => Season, season => season.episodes)
  season : Season;
}
