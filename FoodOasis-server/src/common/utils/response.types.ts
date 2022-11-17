import { UserData } from "@server/modules/user/dto/response/user.response"
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class BasePayload{
    @IsBoolean()
    success: boolean

    @IsNumber()
    status_code: number

    @IsString()
    message: string

    @IsOptional()
    @IsString()
    error?: string

    data?: ResponsesData

}

export type ResponsesData = UserData