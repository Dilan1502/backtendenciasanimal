import { ValidationOptions } from "class-validator";


export function minLengthValidationOption(validationOption?: ValidationOptions) {
    return {
        message:
            "El atributo $property debe ser mayor o igual a $constraint1 caracteres",
    };
}

export function IsNotEmptyValidationOption(validationOption?: ValidationOptions) {
    return {
        message:
            "El atributo $property no debe ser null, vacio o undefined",
    };
}

export function IsStringValidationOption(validationOption?: ValidationOptions) {
    return {
        message:
            "El atributo $property no debe ser de tipo string",
    };
}

export function IsNumberValidationOption(validationOption?: ValidationOptions) {
    return {
        message:
            "El atributo $property no debe ser de tipo numerico",
    };
}