import { NextFunction, Response } from "express";
import { UserService } from "../services/UserService";
import { CreateUserRequest } from "../types";
import createHttpError from "http-errors";
import { Logger } from "winston";
import { validationResult } from "express-validator";
import { Roles } from "../constants";

export class UserController {
    constructor(
        private userService: UserService,
        private logger: Logger,
    ) {}

    async create(req: CreateUserRequest, res: Response, next: NextFunction) {
        // Validation
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return next(createHttpError(400, result.array()[0].msg as string));
        }

        const { firstName, lastName, email, password } = req.body;
        try {
            const user = await this.userService.create({
                firstName,
                lastName,
                email,
                password,
                role: Roles.MANAGER,
            });
            res.status(201).json({ id: user.id });
        } catch (err) {
            next(err);
        }
    }
}
