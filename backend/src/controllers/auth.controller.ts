import { Request, Response } from "express"
import { registerService, verifyUserExist } from "../services/auth.service"
import { errorHandle } from "../utils/error.handle"
import { verified } from "../utils/password.handle"
import { generateToken } from "../utils/jwt.handler"

const register = async ({ body }: Request, res: Response) => {
    try {
        /* verificamos la existencia del usuario */
        const userExist = await verifyUserExist(body.email)
        if (userExist) return res.status(409).send({ message: "El usuario ya existe" })

        /* Registramos el usuario */
        const response = await registerService(body)
        res.status(201).send(response);
    } catch (error) {
        errorHandle(res, "Error on creating a new user", error)
    }
}

const login = async ({ body: { email, password } }: Request, res: Response) => {
    try {
        /* verificamos la existencia del usuario */
        const userExist = await verifyUserExist(email)
        if (!userExist) { return res.status(401).send({ message: "El usuario no se encuentra registrado" }) }

        /* Registramos el usuario */
        const isVerified = await verified(userExist.password, password)
        if (!isVerified) { return res.status(401).send({ message: "Credenciales incorrectas" }) }
        res.status(202).send({
            user: userExist,
            token: generateToken(userExist.email)
        })
    } catch (error) {
        errorHandle(res, "Error on loggin User", error)
    }

}

const profile = (req: Request, res: Response) => {
    res.status(200).send(req.body)
}

export { login, register, profile }