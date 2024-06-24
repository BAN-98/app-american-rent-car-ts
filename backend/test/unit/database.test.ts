import { dbConnect, disconnectDb } from "../../src/config/monogo"

describe("Connection to MongoDB", () => {

    afterAll(async () => await disconnectDb())
    it("Should connect to MongoDB", async () => {
        const response = await dbConnect();
        expect(response).toBe('Connection established')
    })
})