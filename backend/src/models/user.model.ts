import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    user_name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: String},
    DNI: { type: String, required: false },
}, {
    timestamps: true,
    versionKey: false

})

const UserModel = model('User', userSchema)

export default UserModel;