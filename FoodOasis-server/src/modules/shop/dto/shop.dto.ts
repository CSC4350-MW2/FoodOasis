import { CategoryDto } from '@server/modules/category/dto/category.dto';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsObject, ValidateNested } from 'class-validator'
import { AddressDto } from './address.dto';
import { ContactDto } from './contact.dto';
import { GpsDto } from './gps.dto';

export class CreateShopDto{
    @IsString()
    name?: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => GpsDto)
    gps?: GpsDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => AddressDto)
    address?: AddressDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => GpsDto)
    category?: CategoryDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    @Type(() => ContactDto)
    contact?: ContactDto;
}



export class UpdateShopDto extends CreateShopDto{}