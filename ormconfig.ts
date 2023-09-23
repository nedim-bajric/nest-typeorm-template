import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: ['src/shared/database/enities/**/*.ts'],

  migrations: ['src/shared/database/migrations/**/*.ts'],
  subscribers: ['src/shared/database/migrations/**/*.ts'],
});
