import { ResponseCore } from "@core//";
import { StatusCode, Success, ErrorType } from "@utils//";
import { response } from 'express';

/**
 * @class sends not found response to client
 */
export class NotFoundResponse extends ResponseCore {
    private url: string | undefined;

    constructor(message = 'Not Found') {
        super();
        this.url = response.req?.originalUrl;
        this.success = Success.ERROR;
        this.status_code = StatusCode.NOTFOUND;
        this.message = message;
        this.error = ErrorType.NOTFOUND;
        this.prepare<NotFoundResponse>(this);
    }
}