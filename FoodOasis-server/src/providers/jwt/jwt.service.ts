import { Service } from 'typedi'
import jwt, { Secret, VerifyErrors, VerifyOptions } from 'jsonwebtoken';

import { LoggerInterface, Logger } from '@logger//'
import { UnauthorizedError } from '@exceptions//';
import { IJwtService } from './jwt-service.interface';

@Service()
export default class JWTService implements IJwtService{
    constructor(@Logger(__dirname) private log: LoggerInterface){}

    verify<T>(token: string, secret: Secret): T {
        return jwt.verify(token, secret) as T;
    }

    async verifyAsync<T>(token: string, key: Secret, opts?: VerifyOptions): Promise<T> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, key, opts, (error: VerifyErrors | any, decoded) => {
                if (error && error.name === 'TokenExpiredError'){
                    this.log.error(`${error} at ${error.expiredAt}`)
                    return reject(new UnauthorizedError('Token Expired'));
                }
                if (decoded) return resolve(decoded as unknown as T);
                
                this.log.error(`${error}`)
                return reject(new UnauthorizedError('Token Malfunctioned'));
            });
        });
    }

}