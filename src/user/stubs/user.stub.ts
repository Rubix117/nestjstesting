import { User } from "../user.entity";

export const userStub = (): User => {
    return {
        email: "Dave@emailserve.com",
        id: 10,
        firstName: "Dave",
        lastName: "Matthews"
    }
}

export const newUser = (email:string, id:number, firstName:string, lastName:string): User => {
    return {
        email,
        id,
        firstName,
        lastName
    }
}
