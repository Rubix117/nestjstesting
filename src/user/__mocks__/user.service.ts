import {userStub} from "../stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
    findAll: jest.fn().mockReturnValue([userStub()]),
    createNewUser: jest.fn().mockReturnValue(userStub())
})
