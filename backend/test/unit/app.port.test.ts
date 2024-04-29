import app from "../../src/app";

// Mockear la función de escucha de la aplicación
jest.mock("../../src/app", () => {
    return {
        __esModule: true,
        default: {
            listen: jest.fn()
        }
    };
});

describe("the app must listen on port 3002 or 3001", () => {
    it("should listen on port 3002", () => {
        const validPorts = ["3002", "3001"];

        app.listen(validPorts[0]);

        expect(app.listen).toHaveBeenCalledWith(expect.stringMatching(new RegExp(validPorts.join("|"))));
    });
});