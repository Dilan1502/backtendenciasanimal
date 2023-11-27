import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsNotEmptyValidationOption, IsNumberValidationOption, IsStringValidationOption } from "src/common/messegeDTO";

export class animalDTO {
    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    name: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    race: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    size: number;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    specie: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    gender: string;

    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsNumber({},IsNumberValidationOption())
    age: number;

    
    @IsNotEmpty(IsNotEmptyValidationOption())
    @IsString(IsStringValidationOption())
    clasification: string;

    
}