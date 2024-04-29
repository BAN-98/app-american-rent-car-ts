import axios from "axios";
import { Iuser } from "../interfaces";

const API_PATH = "http://localhost:3002/auth"

export const registerUser = (user: Iuser) =>  axios.post(`${API_PATH}/register`, user)