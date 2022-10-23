import { ResponseCore } from "@core//";
import { StatusCode, Success, ErrorType } from "@utils//";

/**
 * @class sends bad request response to client
 */
export class BadRequestResponse extends ResponseCore {
    constructor(message = 'Bad Parameters') {
        super();
        this.success = Success.ERROR;
        this.status_code = StatusCode.BADREQUEST;
        this.message = message;
        this.error = ErrorType.BADREQUEST;
        this.prepare<BadRequestResponse>(this);
    }
}