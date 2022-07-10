import express, { Response } from "express";
import { validationResult } from "express-validator";
import { TypedRequestBody } from "../types/request";
import { IUser } from "../types/user";
import { UserService } from "../service/userService";

const userService = new UserService();

export class UserController {
  async registration(
    req: TypedRequestBody<IUser>,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await userService.registration(req.body);
      return res.json({
        status: 200,
        data: user,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async login(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      userService.login(req.body);
      return res.json({
        status: 200,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  //
  // async check(req, res, next) {
  //   const { id } = req.query;
  //   if (!id) {
  //     return next(ApiError.badRequest("Пользователь не найден"));
  //   }
  //   return res.json(id);
  // }
  //
  // async change(req, res) {}
  //
  // async delete(req, res) {}
}
