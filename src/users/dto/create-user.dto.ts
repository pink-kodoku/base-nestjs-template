import {IsDefined, IsEmail, IsString, MinLength} from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email: string;

    @IsString()
    @IsDefined()
    name: string;

    @MinLength(7)
    @IsString()
    @IsDefined()
    password: string;
}
