import { IsString, IsOptional, IsNumber } from 'class-validator'


export class AddressDto{
    @IsString()
    street: string;

    @IsString()
    city: string;

    @IsOptional()
    @IsString()
    state?: string;
    
    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsNumber()
    zipCode?: number;
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