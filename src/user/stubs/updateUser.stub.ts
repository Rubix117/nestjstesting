import { UpdateUserDto } from '../DTOs/updateUser.dto';

export const updateUserStub = (): UpdateUserDto => {
  return {
    email: 'Dave@emailserve.com',
    firstName: 'Dave',
    lastName: 'Matthews',
  };
};
