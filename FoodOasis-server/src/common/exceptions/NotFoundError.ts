import { ExceptionCore } from "@core//";
import { ErrorType } from "@utils//";

/**
 * @class Not Found Error Exception
 * @extends { ExceptionCore } which extends JS Error base class
 */
 export default class NotFoundError extends ExceptionCore {
    constructor(message = 'Not Found') {
        super(ErrorType.NOTFOUND, message);
    }
}