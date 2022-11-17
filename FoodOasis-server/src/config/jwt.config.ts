import fs from 'fs'
import { parsedEnv } from "./index";
import { ParsedVariables } from 'dotenv-parse-variables'

class JwtConfig{
    readonly publicAccessKey: Buffer

  
    constructor(parsedEnv: ParsedVariables) {
      this.publicAccessKey = this.getPublicAccessKey()
    }

    private getPublicAccessKey(){
      const publicKeyFile = String(parsedEnv.PUBLIC_KEY_FILE)
      const publicAccessKey = fs.readFileSync(publicKeyFile)

      return publicAccessKey
    } 
}
  
export default new JwtConfig(parsedEnv);