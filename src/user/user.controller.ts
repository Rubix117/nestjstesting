import {Body, Controller, Get, Post, Param, Put, UseFilters} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './DTOs/createUser.dto';
import { UpdateUserDto } from './DTOs/updateUser.dto';
import {PostgresFilter} from "../filters/PostgresFilter";

@Controller('users')
@UseFilters(new PostgresFilter())
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<[User[], number]> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() newUser: CreateUserDto) {
      return this.userService.createNewUser(newUser);
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() updateUser: UpdateUserDto) {
    return this.userService.updateUser(id, updateUser);
  }
}
