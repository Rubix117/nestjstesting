import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";
import {CreateUserDto} from "./DTOs/createUser.dto";

@Injectable()
export class UserService {
    private readonly users: User[] = [];

    createNewUser(newUser: CreateUserDto): User{
        return new User();
    }

    findAll(){
        return this.users;
    }
}
