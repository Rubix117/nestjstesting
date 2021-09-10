import {Test, TestingModule} from '@nestjs/testing';
import {getRepositoryToken} from '@nestjs/typeorm'
import {UserService} from './user.service';
import {Repository} from "typeorm";
import {User} from "./user.entity";
import {userStub} from "./stubs/user.stub";


describe('UserService tests', () => {
  let service: UserService;
  let userRepo: Repository<User>
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Get All Users', () =>{

    jest.spyOn(userRepo, 'findAndCount').mockResolvedValue([[userStub()], 1])

    expect(service.findAll()).resolves.toEqual([[userStub()], 1])
  })
});
