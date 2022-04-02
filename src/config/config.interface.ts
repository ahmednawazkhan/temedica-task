export interface Config {
  port: number;
  cors: CorsConfig;
  swagger?: SwaggerConfig;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}
