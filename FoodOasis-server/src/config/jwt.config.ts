import fs from 'fs'
import { parsedEnv } from ".";
import { ParsedVariables } from 'dotenv-parse-variables'

/**
* @description JWT Environment Variable Configuration
* @class
*/
class JwtConfig{
    readonly privateAccessKey: Buffer
    readonly privateAccessKeyPassphrase: string
    readonly publicAccessKey: Buffer
    readonly accessTokenSecret: string;
    readonly accessTokenExpiration: string;
    readonly refreshTokenSecret: string;
    readonly refreshTokenExpiration: string;

  
    constructor(parsedEnv: ParsedVariables) {
        this.accessTokenSecret = String(parsedEnv.ACCESS_TOKEN_SECRET)
        this.privateAccessKey = this.getPrivateAccessKey()
        this.privateAccessKeyPassphrase = String(parsedEnv.PRIVATE_KEY_PASSPHRASE),
        this.publicAccessKey = this.getPublicAccessKey()
        this.accessTokenExpiration = String(parsedEnv.ACCESS_TOKEN_EXPIRATION)
        this.refreshTokenSecret = String(parsedEnv.REFRESH_TOKEN_SECRET)
        this.refreshTokenExpiration = String(parsedEnv.REFRESH_TOKEN_EXPIRATION)
    }


    /**
     * @method getPrivateAccessKey reads private key from private key file
     * @returns {Buffer} private key
     */
    private getPrivateAccessKey(): Buffer{
        const privateKeyFile = String(parsedEnv.PRIVATE_KEY_FILE)
        const privateAccessKey = fs.readFileSync(privateKeyFile)

        return privateAccessKey
    }

    /**
     * @method getPublicAccessKey reads public key from public key file
     * @returns {Buffer} public key
     */
    private getPublicAccessKey(): Buffer{
        const publicKeyFile = String(parsedEnv.PUBLIC_KEY_FILE)
        const publicAccessKey = fs.readFileSync(publicKeyFile)

        return publicAccessKey
    }
  }
  
  export default new JwtConfig(parsedEnv);