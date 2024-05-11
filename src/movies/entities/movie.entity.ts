import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    constructor(movie: Partial<Movie>) {
        Object.assign(this, movie)
    }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  releaseYear: number;

  @Column({ default: true })
  isGood: boolean;
}