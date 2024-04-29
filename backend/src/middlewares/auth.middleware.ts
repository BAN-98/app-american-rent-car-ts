import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

const validateSchema = (schema: ZodSchema<object>) => ({ body }: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(body);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ error: error.errors.map(err => err.message) });
        }
        return res.status(500).json({ error: "Internal error server " })
    }
}

export { validateSchema };