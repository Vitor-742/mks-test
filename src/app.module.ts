import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppCacheModule } from './cache/cache.module';

@Module({
  imports: [DatabaseModule, MoviesModule, UsersModule, AuthModule, AppCacheModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
