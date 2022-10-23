import { Service } from 'typedi'
import { ValidationError } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

import { LoggerService } from '@providers/logger';
import { BadRequestError, UnauthorizedError } from '@exceptions//'

/**
 * @class Error middleware after all API requests
 * @implements { ExpressErrorMiddlewareInterface } which extends Routing Controllers Error Middleware Interface
 */
@Service()
@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
    private log = new LoggerService(__dirname);

    /**
     * @param error 
     * @param request 
     * @param response 
     * @param next 
     * @returns returns custom uncaught errors
     */
    async error(error: any, request: Request, response: Response, next:NextFunction){
        // Catch all validation errors
        if(error.errors && error.errors[0] instanceof ValidationError){
            let message: string = ''
            for(const i in error.errors[0].constraints){
                message = error.errors[0].constraints[i]
            }
            if(error.errors[0].children?.length !== 0){
                error.errors[0].children?.map((child) => {
                    let messageObj;
                    messageObj = child.constraints as Object
                    message = Object.values(messageObj)[0]
                })
            }

            response.json(new BadRequestError(message))
            return next();
        }
        // Return all other errors
        if(error.error) {
            response.json(error)
            return next()
        }

        this.log.error(error)
        response.json(new UnauthorizedError()) 
        
        return next();
  }
}