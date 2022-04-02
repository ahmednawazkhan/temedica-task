import * as Convict from 'convict';
import { Config } from './config.interface';

export const Schema: Convict.Schema<Config> = {
  swagger: {
    enabled: {
      doc: 'swagger enabled',
      format: 'Boolean',
      default: true,
      env: 'SAF_TSI_SWAGGER_ENABLED',
    },
    title: {
      doc: 'swagger title',
      format: String,
      default: 'Medication Wiki',
      env: 'SWAGGER_TITLE',
    },
    description: {
      doc: 'swagger description',
      format: String,
      default: 'rest api endpoints for medication wiki',
      env: 'SWAGGER_DESCRIPTION',
    },
    version: {
      doc: 'swagger version',
      format: String,
      default: '1.0',
      env: 'SWAGGER_VERSION',
    },
    path: {
      doc: 'swagger url path',
      format: String,
      default: 'api',
      env: 'SWAGGER_URL_PATH',
    },
  },
  port: {
    doc: 'port to bind',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  cors: {
    enabled: {
      doc: 'cors enabled',
      format: 'Boolean',
      default: true,
      env: 'CORS_ENABLED',
    },
  },
};
