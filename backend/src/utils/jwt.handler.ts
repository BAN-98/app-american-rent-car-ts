import { sign, verify } from "jsonwebtoken";
import "dotenv/config"
const JWT_TOKEN = process.env.JWT_TOKEN || "SHA256";

const generateToken = (id: string) => {
    const jwt = sign({ id: id }, JWT_TOKEN, { expiresIn: "2h" });
    return jwt;
}

const verifyToken = (jwt: string) => {
    const token = verify(jwt, JWT_TOKEN);
    return token;
}


export { generateToken, verifyToken }