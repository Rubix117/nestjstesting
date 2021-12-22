import {Body, Controller, Get, Post, Param, Put} from '@nestjs/common';
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {CreateUserDto} from "./DTOs/createUser.dto";
import {UpdateUserDto} from "./DTOs/updateUser.dto";


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<[User[], number]>{
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body()newUser: CreateUserDto){
        try{
            return this.userService.createNewUser(newUser);
        }catch (e) {
            throw e;
        }
    }

    @Put('/:id')
    updateUser(@Param('id') id: number,  @Body() updateUser: UpdateUserDto){
        return this.userService.updateUser(id, updateUser)
    }
}
