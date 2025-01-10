// api.test.js (Supertest)
const request = require('supertest');
const app = require('./app'); // Express app

describe("POST /profile", () => {
    it("should create a profile successfully", async () => {
        const response = await request(app)
            .post('/profile')
            .send({
                name: "John Doe",
                age: 25,
                gender: "Male",
            });
        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Profile created successfully");
    });

    it("should return error for missing fields", async () => {
        const response = await request(app)
            .post('/profile')
            .send({ name: "John Doe" });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("Missing required fields");
    });
});

describe("POST /login", () => {
    it("should login successfully with valid credentials", async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: "test", password: "password" });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Login successful");
    });

    it("should fail login with invalid credentials", async () => {
        const response = await request(app)
            .post('/login')
            .send({ username: "wrong", password: "wrong" });
        expect(response.status).toBe(401);
        expect(response.body.error).toBe("Invalid credentials");
    });
});
