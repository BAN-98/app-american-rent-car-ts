import { Router } from "express";
import { checkToken } from "../middlewares/session.middleware";

const router = Router();

router.get('/',checkToken, );

export { router } 