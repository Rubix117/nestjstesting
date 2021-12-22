import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { userStub } from './stubs/user.stub';
import { updateUserStub } from './stubs/updateUser.stub';
import { expect, jest } from '@jest/globals';

describe('UserService tests', () => {
  let service: UserService;
  let userRepo: Repository<User>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  test('UserService should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('test get all users', () => {
    test('Should return 1 user with a count of 1', () => {
      jest.spyOn(userRepo, 'findAndCount').mockResolvedValue([[userStub()], 1]);
      expect(service.findAll()).resolves.toEqual([[userStub()], 1]);
    });
  });

  describe('Update User', () => {
    test('Should be defined', () => {
      expect(service.updateUser).toBeDefined();
    });

    test('Should Accept updateUserDTO as a paramater', () => {
      const updatedUser = updateUserStub();
      jest.spyOn(userRepo, 'update').mockReturnThis();
      service.updateUser(1, updatedUser);
    });

    test('Should return the updatedUserDTO', () => {});
  });
});
