import { ShopData } from "@server/modules/shop/dto/responses/shop.response"
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

export type ResponsesData = ShopData