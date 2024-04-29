import { dbConnect, disconect } from "../../src/config/monogo"

describe("Connection to MongoDB", () => {

    afterAll(async () => await disconect())
    it("Should connect to MongoDB", async () => {
        const response = await dbConnect();
        expect(response).toBe('Connection established')
    })
})