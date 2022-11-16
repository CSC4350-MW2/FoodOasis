import { IsString, IsOptional } from 'class-validator'

export class GpsDto {
    @IsString()
    latitude: string;

    @IsString()
    longitude?: string;
}

export class UpdateGpsDto {
    @IsOptional()
    @IsString()
    latitude?: string;

    @IsOptional()
    @IsString()
    longitude?: string;
}