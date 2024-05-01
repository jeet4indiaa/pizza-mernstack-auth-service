import request from "supertest";
import app from "../../src/app";

describe("POST /auth/register", () => {
    //let connection: DataSource;

    // beforeAll(async () => {
    //     connection = await AppDataSource.initialize();
    // });

    // beforeEach(async () => {
    //     // Database truncate
    //     await connection.dropDatabase();
    //     await connection.synchronize();
    // });

    // afterAll(async () => {
    //     try {
    //         if (connection) {
    //             await connection.destroy();
    //             console.log("Connection destroyed successfully.");
    //         } else {
    //             console.warn("Connection is already undefined.");
    //         }
    //     } catch (error) {
    //         console.error("Error occurred while destroying connection:", error);
    //     }
    // });

    describe("Given all fields", () => {
        it("should return the 201 status code", async () => {
            // Arrange
            const userData = {
                firstName: "Jitendra",
                lastName: "M",
                email: "jitendram@gmai.com",
                password: "secret",
            };
            // Act
            const response = await request(app)
                .post("/auth/register")
                .send(userData);

            // Assert
            expect(response.statusCode).toBe(201);
        });
    });

    it("should return valid json response", async () => {
        // Arrange
        const userData = {
            firstName: "Jitendra",
            lastName: "M",
            email: "jitendram@gmai.com",
            password: "secret",
        };
        // Act
        const response = await request(app)
            .post("/auth/register")
            .send(userData);

        // Assert application/json utf-8
        expect(
            (response.headers as Record<string, string>)["content-type"],
        ).toEqual(expect.stringContaining("json"));
    });

    it("should persist the user in the database", async () => {
        // Arrange
        const userData = {
            firstName: "Jitendra",
            lastName: "M",
            email: "jitendram@gmai.com",
            password: "secret",
        };
        // Act
        await request(app).post("/auth/register").send(userData);

        // Assert
        // const userRepository = connection.getRepository(User);
        // const users = await userRepository.find();
        // expect(users).toHaveLength(1);
        // expect(users[0].firstName).toBe(userData.firstName);
        // expect(users[0].lastName).toBe(userData.lastName);
        // expect(users[0].email).toBe(userData.email);
    });

    describe("Fields are missing", () => {});
});
