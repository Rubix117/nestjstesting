import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './DTOs/createUser.dto';
import { userStub } from './stubs/user.stub';
import { jest } from '@jest/globals';
//Will find the dir __mocks__ and will mock the service/class
jest.mock('./user.service.ts');

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  const user: User = userStub();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should return an array of Users', async () => {
    const testResult = [userStub()];
    expect(await controller.findAll()).toEqual(testResult);
  });

  it('Create new User', async () => {
    const createUser: CreateUserDto = {
      firstName: 'Dave',
      lastName: 'Matthews',
      email: 'DM117',
    };

    expect(await controller.createUser(createUser)).toEqual(user);
  });

  it('User exists error', () => {
    const createUser: CreateUserDto = {
      firstName: 'Dave',
      lastName: 'Matthews',
      email: 'DM117@test.com',
    };
    jest.spyOn(userService, 'createNewUser').mockRejectedValue(
      new Error('UserExists'),
    );

    expect(controller.createUser(createUser)).rejects.toThrow('UserExists');
  });
});
