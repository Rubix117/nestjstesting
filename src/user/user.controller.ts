import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "./DTOs/createUser.dto";
import { plainToClass } from 'class-transformer';


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<[User[], number]>{
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body()newUser: CreateUserDto){
        console.log('Creating User');
        const userToCreate = plainToClass(User, newUser)
        return this.userService.createNewUser(userToCreate);
    }
}
