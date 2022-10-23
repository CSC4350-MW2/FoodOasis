export enum StatusCode {
    SUCCESS = 200,
    BADREQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOTFOUND = 404,
    INTERNALERROR = 500,
    CONFLICT = 409
}

export enum ErrorType {
    UNAUTHORIZED = 'AuthFailureError',
    INTERNAL = 'InternalError',
    NOTFOUND = 'NotFoundError',
    BADREQUEST = 'BadRequestError',
    FORBIDDEN = 'ForbiddenError',
    CONFLICT = 'ConflictError',
}