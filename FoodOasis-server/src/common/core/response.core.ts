import { response, Response } from 'express';
import { StatusCode, ErrorType, ResponsesData } from '@utils//';

/**
* @class @abstract 
* @arg { Response } res - Express Response object
* @arg { Boolean } success - Success status i.e. true / false
* @arg { StatusCode } status_code - The status code for responses
* @arg { string } message - The response message to client
* @arg { ErrorType | string } error - The error type
* @arg { ResponsesData } data - The data payload to be send to client
*/
export abstract class ResponseCore{
    public res?: Response;
    public success: boolean;
    public status_code: StatusCode;
    public message: string;
    public error?: ErrorType | string;
    public data?: ResponsesData;

    constructor(){
        this.res = response
    }

    /**
    * @method prepare sets status code and sends response
    * @param { T extends ResponseCore } response - The response class instance
    * @return { T } the JSON response to client
    */
    protected prepare<T extends ResponseCore>(response: T): T{
        this.res?.status(this.status_code)
        return ResponseCore.sanitize(response)   
    }

    /**
    * @method sanitize removes undefined properties from response
    * @param { T extends ResponseCore } response - The response class instance
    * @return { T } The cleaned response object, without undefined fields
    */
    private static sanitize<T extends ResponseCore>(response: T): T{
        const clone: T = {} as T;
        delete response.res;
        Object.assign(clone, response);
        
        for (const i in clone) if (typeof clone[i] === 'undefined') delete clone[i];
        return clone;
    }
}