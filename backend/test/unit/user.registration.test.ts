import app from "../../src/app";
import request from "supertest"
import UserModel from "../../src/models/user.model";
import http from "http"


describe("POST /auth/register", () => {

    let server = http.createServer();
    
    beforeAll(() => {
      server = app.listen(3003)
    });

    
    it("should register a user", async () => {
        const user = {
            user_name: "Bayron Andres Rosero Castro",
            email: 'test@example.com',
            password: "testpassword",
            address: "testaddress",
            phone: "testphone",
        };

        const res = await request(app)
            .post("/auth/register")
            .send(user)
            .expect(201);
    });

    afterAll(async () => {
        const user = {
            email: 'test@example.com',
        };
        await UserModel.deleteOne(user);
       await new Promise(resolve => server.close(resolve));
    });
});
