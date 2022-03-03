import {BadRequestException, Injectable, Logger, UseFilters} from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTOs/createUser.dto';
import { UpdateUserDto } from './DTOs/updateUser.dto';
import {PostgresFilter} from "../filters/PostgresFilter";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  createNewUser(newUser: CreateUserDto): Promise<User> {
    return this.userRepository.save(newUser);
  }

  findAll(): Promise<[User[], number]> {
    return this.userRepository.findAndCount();
  }

  updateUser(id: number, details: Partial<UpdateUserDto>) {
    return this.userRepository.update(id, details);
  }
}
