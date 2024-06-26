import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisClientOptions } from 'redis';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      password: 'rXwdeQVXalVeEJBugUytUZbPCZBsbAYk',
      username: 'default',
      socket: {
        host: 'roundhouse.proxy.rlwy.net',
        port:  26041,
      },
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class AppCacheModule {}