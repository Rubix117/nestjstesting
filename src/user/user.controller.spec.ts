import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from "./user.service";
import {User} from "./user.entity";
import {CreateUserDto} from "./DTOs/createUser.dto";

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  const user: User = {id: 1, email: 'DaveTest@email.com', firstName: 'Dave', lastName: 'M'};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return an array of Users', async () => {


    const testResult = [user];

    jest.spyOn(userService, 'findAll').mockImplementation(() => testResult);
    expect(await controller.findAll()).toEqual(testResult)
  });

  it('Create new User', async () =>{
    const createUser: CreateUserDto = {firstName: "Dave", lastName: "Matthews", email: "DM117"}

    jest.spyOn(userService, "createNewUser").mockImplementation(() =>  user)

    expect(await controller.createUser(createUser)).toEqual(user);
  });
});
