import { BasePayload } from "@server/common/utils/response.types"
import { Type } from "class-transformer"
import { ValidateNested } from "class-validator"
import { UpdateUserDto } from "../user.dto"


export class UserData {
    @ValidateNested()
    @Type(() => UpdateUserDto)
    user: UpdateUserDto
}

export class UserResponse extends BasePayload{
    @ValidateNested()
    @Type(() => UserData)
    data?: UserData
}