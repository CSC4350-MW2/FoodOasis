import { ResponseCore } from "@core/";
import { StatusCode, Success, ErrorType } from "@utils/";

/**
 * @class sends Internal Server response to client
 */

export class ConflictErrorResponse extends ResponseCore {
    constructor(message = 'Conflict Error') {
        super();
        this.success = Success.ERROR;
        this.status_code = StatusCode.CONFLICT;
        this.message = message;
        this.error = ErrorType.CONFLICT;
        this.prepare<ConflictErrorResponse>(this);
    }
}