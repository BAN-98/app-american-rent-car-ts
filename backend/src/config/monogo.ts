import 'dotenv/config';
import { connect, disconnect } from 'mongoose';

async function dbConnect(): Promise<string> {
    const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/app-american-rent-car-db";
    if (!DB_URI) {
        throw new Error("DB_URI is not defined in the ENV variables");
    }
    try {
        await connect(DB_URI);
        console.log("Connected to MongoDB");
        return "Connection established";
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Connection failed");
    }
}

async function disconnectDb(): Promise<string> {
    try {
        await disconnect();
        console.log("Disconnected from MongoDB");
        return "Connection closed";
    } catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
        throw new Error("Disconnection failed");
    }
}
export { dbConnect, disconnectDb };