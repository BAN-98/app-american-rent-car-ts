import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handler";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestToken = req.headers.authorization || null;
        const token = requestToken?.split(' ').pop();
        if (!token) {
            return res.status(401).send({
                message: 'No token provided'
            });
        }
        const authorized = verifyToken(`${token}`)
        if (!authorized) {
            return res.status(401).send({
                message: 'Invalid token'
            });
        }
        next();
    } catch (error) {
        res.status(401).send({ message: "Invalid access Token, session no validate" })
    }
}

export { checkToken }