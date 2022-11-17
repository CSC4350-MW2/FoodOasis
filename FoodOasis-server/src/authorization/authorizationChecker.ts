import { Container } from 'typedi';
import { Connection } from 'typeorm';
import { Action } from 'routing-controllers';
import { VerifyOptions, JwtPayload } from 'jsonwebtoken';

import { JwtConfig } from '@config//';
import { TokenHelper } from '@helpers//';
import { JWTService } from '@jwt//';
import { LoggerService } from '@logger//';
import { UnauthorizedError } from '@exceptions//';


export function authorizationChecker(connection: Connection): (action: Action, roles: any[]) => Promise<boolean> | boolean {
    const log = new LoggerService(__dirname);
    const jwtService = Container.get<JWTService>(JWTService);

    return async function innerAuthorizationChecker(action: Action, roles: string[]): Promise<boolean> {
        
        const accessToken = TokenHelper.getTokenFromHeader(action.request.headers)

        if(!accessToken) {
            log.warn('No token provided')
            return false
        }

        try {
            const publicKey = JwtConfig.publicAccessKey

            const verifyOptions: VerifyOptions = {
                algorithms: ['RS256']
            }

            const data = await jwtService.verifyAsync<JwtPayload>(
                accessToken,
                publicKey,
                verifyOptions
            );

            action.request.currentUser = {
                userId: data.userId,
            };

            return true;
        } 
        catch (err: any) { throw new UnauthorizedError(err.message) }
    };
}