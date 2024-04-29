import { Auth } from "./auth.interface";

export interface User extends Auth{
    user_name: string;
    address: string;
    phone: string;
    birthday: string;
    DNI: string
}