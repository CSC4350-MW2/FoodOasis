import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Conflict Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
export default class ConflictError extends ExceptionCore {
    constructor(message = 'Conflict error') {
        super(ErrorType.CONFLICT, message);
        return super.handle(this);
    }
}