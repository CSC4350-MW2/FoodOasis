import { ResponseCore } from "@core//";
import { StatusCode, Success } from "@utils//";

/**
 * @class sends success response to client
 */
export class SuccessResponse<T> extends ResponseCore{
    constructor(message: string, data?: T) {
        super()
        this.success = Success.SUCCESS;
        this.status_code = StatusCode.SUCCESS;
        this.message = message;
        this.data = data;
        this.prepare<SuccessResponse<T>>(this);        
    }
}