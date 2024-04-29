export interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    fuel_type: string;
    fuelType: "gasoline" | "diesel" | "electric" | "Hybrid" ;
    passenger_Capacity: number;
    equipment: boolean;
    transmission: "manual" | "automatic";
    thumbnail: string;
    price: string;
}