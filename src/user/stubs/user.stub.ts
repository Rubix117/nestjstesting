import { User } from "../user.entity";

export const userStub = (): User => {
    return {
        email: "Dave@emailserve.com",
        id: 10,
        firstName: "Dave",
        lastName: "Matthews"
    }
}
