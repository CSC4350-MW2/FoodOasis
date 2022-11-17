import { Secret, VerifyOptions } from "jsonwebtoken";

export interface IJwtService{
    verify<T>(token: string, secret: string): T;
    verifyAsync<T>(token: string, key: Secret, opts?: VerifyOptions): Promise<T>;
}