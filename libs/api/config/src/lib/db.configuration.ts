import { Inject } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

export const dbConfiguration = registerAs('db', () => ({
  uri: process.env.MONGO_URI || 'mongodb+srv://test:test@cluster0-uq0rx.mongodb.net/ohayojp?retryWrites=true'
}));

export const InjectDbConfig = () => Inject(dbConfiguration.KEY);
