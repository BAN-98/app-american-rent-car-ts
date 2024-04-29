import { Request, Response } from "express";


const something = (req: Request, res: Response) => {
    res.send({ data: "authorized", user: req.headers.authorization });
}

export { something };