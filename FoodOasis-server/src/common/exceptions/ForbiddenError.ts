import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Forbidden Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
export class ForbiddenError extends ExceptionCore {
    constructor(message = 'Permission denied') {
        super(ErrorType.FORBIDDEN, message);
        return super.handle(this)
    }
}