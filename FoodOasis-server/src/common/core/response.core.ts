import { Response } from 'express';
import { StatusCode, ErrorType, DataResponses } from '@utils/';

export abstract class ApiResponse{
    public res: Response;
    public success: boolean;
    public status_code: StatusCode;
    public message: string;
    public error?: ErrorType;
    public data?: DataResponses;

    constructor(){}

    protected prepare<T extends ApiResponse>(response: T){
        this.res.status(this.status_code)
        return ApiResponse.sanitize(response)   
    }

    private static sanitize<T extends ApiResponse>(response: T){
        const clone: T = {} as T;
        Object.assign(clone, response);
        
        for (const i in clone) if (typeof clone[i] === 'undefined') delete clone[i];
        return clone;
    }
}