import { IsString, IsOptional } from 'class-validator'

export class ContactDto {
    @IsString()
    phone: string;

    @IsOptional()
    @IsString()
    social?: string;

    @IsOptional()
    @IsString()
    website?: string;
}

export class UpdateContactDto {
    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    social?: string;

    @IsOptional()
    @IsString()
    website?: string;
}