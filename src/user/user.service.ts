import { Injectable } from '@nestjs/common';
import {User} from "./user.entity";

@Injectable()
export class UserService {
    private readonly users: User[] = [];
    findAll(){
        return this.users;
    }
}
