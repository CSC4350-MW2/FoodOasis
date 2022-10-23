import { ApiResponse } from "@core/response.core";
import { StatusCode, Success, ErrorType } from "@utils/";

/**
 * @class sends forbidden response to client
 */
export class ForbiddenResponse extends ApiResponse {
    constructor(message = 'Forbidden') {
        super();
        this.success = Success.ERROR;
        this.status_code = StatusCode.FORBIDDEN;
        this.message = message;
        this.error = ErrorType.FORBIDDEN;
        this.prepare<ForbiddenResponse>(this);
    }
}