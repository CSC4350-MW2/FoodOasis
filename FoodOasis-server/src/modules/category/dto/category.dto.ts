import { IsString, IsOptional } from 'class-validator'

export class CategoryDto{
    @IsString()
    name: string;
}

export class UpdateCategoryDto{
    @IsOptional()
    @IsString()
    name?: string;
}