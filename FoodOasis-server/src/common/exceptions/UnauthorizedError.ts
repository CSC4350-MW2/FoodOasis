import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Unauthorized Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
 export class UnauthorizedError extends ExceptionCore {
    constructor(message = 'Unauthorized User') {
        super(ErrorType.UNAUTHORIZED, message);
        return super.handle(this)
    }
}