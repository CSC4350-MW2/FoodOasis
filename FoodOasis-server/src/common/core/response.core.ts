import { Response } from 'express';
import { StatusCode, ErrorType, DataResponses } from '@utils/';

/**
* @class @abstract 
* @arg { Response } res - Express Response object
* @arg { Boolean } success - Success status i.e. true / false
* @arg { StatusCode } status_code - The status code for responses
* @arg { string } message - The response message to client
* @arg { ErrorType | string } error - The error type
* @arg { DataResponses } data - The data payload to be send to client
*/
export abstract class ApiResponse{
    public res: Response;
    public success: boolean;
    public status_code: StatusCode;
    public message: string;
    public error?: ErrorType | string;
    public data?: DataResponses;

    constructor(){}

    /**
    * @method prepare sets status code and sends response
    * @param { T extends ApiResponse } response - The response class instance
    * @return { T } the JSON response to client
    */
    protected prepare<T extends ApiResponse>(response: T): T{
        this.res.status(this.status_code)
        return ApiResponse.sanitize(response)   
    }

    /**
    * @method sanitize removes undefined properties from response
    * @param { T extends ApiResponse } response - The response class instance
    * @return { T } The cleaned response object, without undefined fields
    */
    private static sanitize<T extends ApiResponse>(response: T): T{
        const clone: T = {} as T;
        Object.assign(clone, response);
        
        for (const i in clone) if (typeof clone[i] === 'undefined') delete clone[i];
        return clone;
    }
}