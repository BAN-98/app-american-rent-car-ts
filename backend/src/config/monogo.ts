
import 'dotenv/config'
import { connect, disconnect } from 'mongoose';
async function dbConnect(): Promise<string> {
    const DB_URI = <string>process.env.DB_URI
    try {
        await connect(DB_URI)
        return "Connection established"
    } catch (error) {
        throw new Error(" connection failed")
    }
}


async function disconect(): Promise<string> {
    try {
        await disconnect();
        return "Connection closed"
    } catch (error) {
        throw new Error(" connection failed")
    }
}

export { dbConnect,disconect }