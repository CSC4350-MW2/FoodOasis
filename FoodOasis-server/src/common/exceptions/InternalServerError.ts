import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Internal Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
export class InternalServerError extends ExceptionCore {
    constructor(message = 'Internal error', error?: string) {
        super(ErrorType.INTERNAL, message, error);
        return super.handle(this)
    }
}