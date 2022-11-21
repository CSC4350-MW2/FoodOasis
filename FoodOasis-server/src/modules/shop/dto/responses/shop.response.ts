import { BasePayload } from "@server/common/utils/response.types"
import { Type } from "class-transformer"
import { IsArray, ValidateNested } from "class-validator"
import { UpdateShopDto } from "../shop.dto"


export class ShopData {
    @ValidateNested()
    @Type(() => UpdateShopDto)
    shop?: UpdateShopDto
}

export class ShopsData {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => UpdateShopDto)
    shops?: UpdateShopDto[];
}

export class ShopResponse extends BasePayload<ShopData>{
    @ValidateNested()
    @Type(() => ShopData)
    data?: ShopData
}

export class ShopsResponse extends BasePayload<ShopsData>{
    @ValidateNested()
    @Type(() => ShopData)
    data?: ShopsData
}