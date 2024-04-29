import { Response } from "express";
import { Car } from "../interfaces/car.interface";
import CarModel from "../models/cars.model";

const insertCar = async (car: Car): Promise<Car> => {
    const response = await CarModel.create(car);
    return response;
}

const getCars = async () => {
    const response = await CarModel.find({})
    return response;
}

const getCar = async (id: string) => {
    const response = await CarModel.findById(id)
    return response;
}

const updateCar = async (id: string, car: Car) => {
    const response = await CarModel.findByIdAndUpdate({ _id: id }, car, { new: true })
    return response;
}

const deleteCar = async (id: string) => {
    const response = await CarModel.findByIdAndDelete(id)
    return response;
}

export { insertCar, getCars, getCar, updateCar, deleteCar };