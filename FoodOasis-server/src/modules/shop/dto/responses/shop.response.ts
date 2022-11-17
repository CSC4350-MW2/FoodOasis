import { BasePayload } from "@server/common/utils/response.types"
import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { UpdateShopDto } from "../shop.dto"


export class ShopData {
    @ValidateNested()
    @Type(() => UpdateShopDto)
    shop?: UpdateShopDto
}

export class ShopResponse extends BasePayload{
    @ValidateNested()
    @Type(() => ShopData)
    data?: ShopData
}