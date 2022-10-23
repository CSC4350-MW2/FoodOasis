import { ErrorType } from '@utils//';
import {
    UnauthorizedResponse,
    InternalServerResponse,
    NotFoundResponse,
    BadRequestResponse,
    ForbiddenResponse,
    ConflictResponse
} from '../responses'
import { AppConfig } from '@config/';

/**
* @class @abstract 
* @extends { Error } extends the main Error Object 
* @constructor super Error class
* @param { ErrorType } type - Type of Error
* @param { string } message - The Error Message
* @param { error } type - Custom Error Type Message
*/
export abstract class ExceptionCore extends Error {
    constructor(public type: ErrorType, public message: string = 'error', public error?: string) {
        super(type);
    }

    protected handle(err: ExceptionCore): any {

        switch (err.type) {
            case ErrorType.UNAUTHORIZED:
                return new UnauthorizedResponse(err.message)
            case ErrorType.INTERNAL:
                return new InternalServerResponse(err.message)
            case ErrorType.CONFLICT:
                return new ConflictResponse(err.message)
            case ErrorType.NOTFOUND:
            case ErrorType.NOENTRY:
            case ErrorType.NODATA:
                return new NotFoundResponse(err.message);
            case ErrorType.BADREQUEST:
                return new BadRequestResponse(err.message);
            case ErrorType.FORBIDDEN:
                return new ForbiddenResponse(err.message);
            default: {
                let message = err.message;
                // Do not send failure message in production as it may send sensitive data
                if (AppConfig.env === 'production') message = 'Something wrong happened.';
                return new InternalServerResponse(message);
            }
        }
    }
}