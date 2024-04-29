import { Response } from "express";

const errorHandle = (res: Response, error: string, errorRaw?: any) => {
    console.log(errorRaw);
    res.status(500)
    res.send({ error })
}


export { errorHandle };