import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { EntityManager, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepository: Repository<Movie>,

    private readonly entityManager: EntityManager,

  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const new_movie = new Movie(createMovieDto);

    await this.entityManager.save(new_movie);
  }

  async findAll(): Promise<Movie[]> {

    return this.moviesRepository.find();
  }

  findOne(id: number): Promise<Movie | null> {
    return this.moviesRepository.findOneBy({ id });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(id, updateMovieDto);
  }

  async remove(id: number): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}
