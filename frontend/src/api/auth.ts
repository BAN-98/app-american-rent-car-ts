import axios from "axios";
import { FieldValues } from "react-hook-form";




const API_PATH = "http://localhost:3002/auth"

export const registerUser = (data: FieldValues) => axios.post(`${API_PATH}/register`, data)
export const authUser = (data: FieldValues) => axios.post(`${API_PATH}/login`, data)