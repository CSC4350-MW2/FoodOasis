import { ShopData, ShopsData } from "@server/modules/shop/dto/responses/shop.response"
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class BasePayload<T>{
    @IsBoolean()
    success: boolean

    @IsNumber()
    status_code: number

    @IsString()
    message: string

    @IsOptional()
    @IsString()
    error?: string

    data?: T

}