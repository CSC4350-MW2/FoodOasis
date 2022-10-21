import dotenvExtended from 'dotenv-extended'
import dotenvParseVariables, { ParsedVariables } from 'dotenv-parse-variables'
 
/**
* @description Loads appropriate env file depending on the environment eg.. production, development
*/
const env = dotenvExtended.load({
  path: process.env.ENV_FILE,
  defaults: './config/.env.defaults',
  schema: './config/.env.schema',
  includeProcessEnv: true,
  silent: false,
  errorOnMissing: true,
  errorOnExtra: true
})

/**
 * @returns parsed env variables
 */
export const parsedEnv: ParsedVariables = dotenvParseVariables(env)

export { default as AppConfig } from './app.config';
export { default as DBConfig } from './db.config';
export { default as JwtConfig } from './jwt.config';
export { default as SwaggerConfig } from './swagger.config'

