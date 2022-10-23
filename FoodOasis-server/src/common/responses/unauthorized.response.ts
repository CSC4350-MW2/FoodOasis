import { ResponseCore } from "@core//";
import { StatusCode, Success, ErrorType } from "@utils//";

/**
 * @class sends unauthorized response to client
 */
export class UnauthorizedResponse extends ResponseCore {
    constructor(message = 'Authentication Failure') {
        super();
        this.success = Success.ERROR;
        this.status_code = StatusCode.UNAUTHORIZED;
        this.message = message;
        this.error = ErrorType.UNAUTHORIZED;
        this.prepare<UnauthorizedResponse>(this);
    }
}