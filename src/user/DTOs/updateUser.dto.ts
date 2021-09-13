import {IsEmail, IsOptional, IsString} from "class-validator";


export class UpdateUserDto{

    @IsOptional()
    @IsEmail()
    readonly email: string;

    @IsOptional()
    @IsString()
    readonly firstName: string;

    @IsOptional()
    @IsString()
    readonly lastName: string;

}
