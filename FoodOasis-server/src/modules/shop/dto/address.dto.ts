import { IsString, IsOptional } from 'class-validator'


export class AddressDto{
    @IsString()
    street: string;

    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    zipCode?: string;
}

export class UpdateAddressDto{
    @IsOptional()
    @IsString()
    street?: string;

    @IsOptional()
    @IsString()
    city?: string;

    @IsOptional()
    @IsString()
    state?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsString()
    zipCode?: string;
}