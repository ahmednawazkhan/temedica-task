import { Injectable } from '@nestjs/common';
import * as convict from 'convict';
import * as dotenv from 'dotenv';
import { Config } from './config.interface';
import { Schema } from './config.schema';

@Injectable()
export class ConfigService {
  config: convict.Config<Config>;

  constructor() {
    this.config = convict(Schema);

    const dotEnvFile = dotenv.config().parsed;
    if (dotEnvFile) {
      this.config.load(dotenv.config().parsed);
    }
    this.config.validate({ allowed: 'warn' });
  }

  get<K extends convict.PathValue<Config, convict.Path<Config>>>(
    configName: convict.Path<Config>,
  ) {
    return this.config.get(configName) as K;
  }

  getBaseConfigObject() {
    return this.config;
  }
}
