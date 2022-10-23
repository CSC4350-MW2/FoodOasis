import { ResponseCore } from "@core/";
import { StatusCode, Success, ErrorType } from "@utils/";

/**
 * @class sends Internal Server response to client
 */
export class InternalServerResponse extends ResponseCore {
    constructor(message = 'Internal Error') {
        super();
        this.success = Success.ERROR;
        this.status_code = StatusCode.INTERNALERROR;
        this.message = message;
        this.error = ErrorType.INTERNAL;
        this.prepare<InternalServerResponse>(this);
    }
}