import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from "./user.service";
import {User} from "./user.entity";

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

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
    const user: User = {id: 1, email: 'DaveTest@email.com', firstName: 'Dave', lastName: 'M'};

    const testResult = [user];

    jest.spyOn(userService, 'findAll').mockImplementation(() => testResult);
    expect(await controller.findAll()).toEqual(testResult)
  });
});
