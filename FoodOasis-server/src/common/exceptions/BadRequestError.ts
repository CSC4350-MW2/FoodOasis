import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Bad Request Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
export default class BadRequestError extends ExceptionCore {
    constructor(message = 'Bad Request') {
        super(ErrorType.BADREQUEST, message);
        return super.handle(this);
    }
}