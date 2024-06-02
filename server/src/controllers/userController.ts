import express, {Response} from "express";
import {validationResult} from "express-validator";
import {IUser} from "../types/user";
import {UserService} from "../service/userService";

const userService = new UserService();

export class UserController {

    async registration(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): Promise<Response | void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const result = await userService.registration(req.body);
            return res.json({
                result,
            });

        } catch (e) {
            return next(res.status(500).json({errors: e}));
        }
    }

    async login(
        req: express.Request<IUser>,
        res: express.Response,
        next: express.NextFunction
    ): Promise<Response | void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const result = await userService.login(req.body);
            return res.json({
                result,
            });
        } catch (e) {
            return next(res.status(500).json({errors: e}));
        }
    }

    async check(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): Promise<Response | void> {
        try {
            const token = await userService.auth(req.body.user);
            return res.json({
                status: 200,
                token: token,
            });
        } catch (e) {
            return next(res.status(500).json({errors: e}));
        }
    }

    async change(
        req: express.Request<IUser>,
        res: express.Response,
        next: express.NextFunction
    ): Promise<Response | void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const token = await userService.change(req.body);
            return res.json({
                status: 200,
                token: token,
            });
        } catch (e) {
            return next(res.status(500).json({errors: e}));
        }
    }

    async remove(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): Promise<Response | void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
            const result = await userService.remove(req.body);
            return res.json({
                result,
            });
        } catch (e) {
            return next(res.status(500).json({errors: e}));
        }
    }
}
