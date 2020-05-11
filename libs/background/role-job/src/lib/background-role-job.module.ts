import { redisConfiguration } from '@delegatr/api/config';
import { ApiRoleModule } from '@delegatr/api/role';
import {
  queueProviderFactory,
  roleQueueName,
} from '@delegatr/background/common';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { RoleJobConsumer } from './role-job.consumer';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      inject: [redisConfiguration.KEY],
      name: roleQueueName,
      useFactory: queueProviderFactory(roleQueueName),
    }),
    ApiRoleModule,
  ],
  providers: [RoleJobConsumer],
})
export class BackgroundRoleJobModule {}
