import { Router } from "express";
import { login, profile, register } from "../controllers/auth.controller";
import { validateSchema } from "../middlewares/auth.middleware";
import { loginSchema, registerSchema } from "../schemas/auth.schema";

const router = Router();

router.get('/profile/:id', profile);

router.post('/login', validateSchema(loginSchema),login)

router.post('/register',validateSchema(registerSchema) ,register)

export { router }