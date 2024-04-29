import { Request, Response } from "express"
import { errorHandle } from "../utils/error.handle"
import { deleteCar, getCar, getCars, insertCar, updateCar } from "../services/cars.service"

const getItem = async ({ params: { id } }: Request, res: Response) => {
    try {
        const response = await getCar(id)
        const data = response ? response : 'Car not found'
        res.send(data)
    } catch (error) {
        errorHandle(res, "Error on getting car", error)
    }
}
const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars()
        res.send(response)
    } catch (error) {
        errorHandle(res, "Error on getting cars", error)
    }
}
const postItem = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertCar(body);
        res.send(response);
    } catch (error) {
        errorHandle(res, "Error on posting car", error)
    }
}
const updateItem = async ({ params: { id }, body }: Request, res: Response) => {
    try {
        const response = await updateCar(id, body)
        res.send(response)
    } catch (error) {
        errorHandle(res, "Error on updating car")
    }
}
const deleteItem = async ({ params: { id } }: Request, res: Response) => {
    try {
        const response = await deleteCar(id);
        res.send(response);
    } catch (error) {
        errorHandle(res, "Error on delete car")
    }
}

export {
    getItem,
    getItems,
    postItem,
    updateItem,
    deleteItem
}