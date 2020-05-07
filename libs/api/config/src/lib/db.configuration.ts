import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const dbConfiguration = registerAs('db', () => ({
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017/delegatr-local',
}));

export const InjectDbConfig = () => Inject(dbConfiguration.KEY);
export type DbConfig = ConfigType<typeof dbConfiguration>;
