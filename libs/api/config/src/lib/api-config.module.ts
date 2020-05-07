import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration } from './app.configuration';
import { authConfiguration } from './auth.configuration';
import { dbConfiguration } from './db.configuration';
import { redisConfiguration } from './redis.configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: [
        appConfiguration,
        authConfiguration,
        dbConfiguration,
        redisConfiguration,
      ],
    }),
  ],
})
export class ApiConfigModule {}