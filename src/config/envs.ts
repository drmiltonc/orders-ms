import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  //PRODUCTS_MICROSERVICE_HOST: string;
  //PRODUCTS_MICROSERVICE_PORT: number;
  //DATABASE_URL: string;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  //PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
  //PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
  //DATABASE_URL: joi.string().required(),
})
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  //productHost: envVars.PRODUCTS_MICROSERVICE_HOST,
  //productPort: envVars.PRODUCTS_MICROSERVICE_PORT,
  //databaseUrl: envVars.DATABASE_URL,
};