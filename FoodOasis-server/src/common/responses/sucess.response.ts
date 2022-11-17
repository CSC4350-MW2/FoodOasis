import { ResponseCore } from "@core//";
import { ResponsesData, StatusCode, Success } from "@utils//";

/**
 * @class sends success response to client
 */
export class SuccessResponse<T extends ResponsesData> extends ResponseCore{
    constructor(message: string, data?: T) {
        super()
        this.success = Success.SUCCESS;
        this.status_code = StatusCode.SUCCESS;
        this.message = message;
        this.data = data;
        this.prepare<SuccessResponse<T>>(this);        
    }
}