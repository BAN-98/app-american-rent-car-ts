import { Schema, model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const carSchema = new Schema<Car>({
    brand: { type: String, required: true, },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuel_type: { type: String, required: true },
    passenger_Capacity: { type: Number, required: true },
    equipment: { type: Boolean, required: false },
    transmission: { type: String, required: true },
    thumbnail: { type: String, required: false },
    price: { type: String, required: false },

}, {
    timestamps: true,
    versionKey: false
}
);

const CarModel = model<Car>("Car", carSchema);

export default CarModel;