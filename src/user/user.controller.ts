import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "./DTOs/createUser.dto";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): User[]{
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body('user')newUser: CreateUserDto){
        return this.userService.createNewUser(newUser);
    }
}
