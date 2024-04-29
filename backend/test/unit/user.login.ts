import request from "supertest"
import app from "../../src/app"

describe("POST auth/login", () => {
    it("Should login a user", () => {
        const user = {
            email: "ryshen98@outlook.com",
            password: "123456",
        }

        const res = request(app)
            .post('auth/login')
            .send(user)
            .expect(200)
    })
})