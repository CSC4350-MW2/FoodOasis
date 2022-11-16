import { CategoryDto } from '@server/modules/category/dto/category.dto';
import { CreateShopDto } from '@server/modules/shop/dto/shop.dto';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsObject, ValidateNested } from 'class-validator'

export class CreateUserDto{
    @IsOptional()
    @IsString()
    userId: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => CreateShopDto)
    shop?: CreateShopDto;
}



export class UpdateUserDto extends CreateUserDto{}