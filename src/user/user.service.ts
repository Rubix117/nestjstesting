import {Injectable} from '@nestjs/common';
import {User} from "./user.entity";
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    createNewUser(newUser: User): Promise<User>{
        return this.userRepository.save(newUser)
    }

    findAll(): Promise<[User[], number]>{
        return this.userRepository.findAndCount();
    }
}
