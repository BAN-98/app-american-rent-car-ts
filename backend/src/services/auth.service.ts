import UserModel from "../models/user.model"
import {  User } from "../interfaces"
import { encrypter } from "../utils/password.handle"

const registerService = async (authUser: User) => {
    const passwordHashed = await encrypter(authUser.password)
    const response = await UserModel.create({ ...authUser, password: passwordHashed })
    return response;
}


const verifyUserExist = async (email: string): Promise<User | null> => {
    const response = await UserModel.findOne({ email: email })
    return response;
}


export { registerService, verifyUserExist }