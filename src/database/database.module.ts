import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'roundhouse.proxy.rlwy.net',
      port: 17587,
      username: 'postgres',
      password: 'fyWRVYNfXVIaYKMNLIpImcikANzzFmKu',
      database: 'railway',
      entities: [Movie, User],
      synchronize: true,
    }),
  ],
})

export class DatabaseModule {}