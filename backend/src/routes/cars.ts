import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/car.controller";
import { logMiddleware } from "../middlewares/log.middleware";

const router = Router();

router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', logMiddleware, postItem)

router.delete('/:id', deleteItem);

router.put('/:id', updateItem);



export { router };