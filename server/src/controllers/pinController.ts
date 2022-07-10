import express, { Response } from "express";

export class PinController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {}

  async addAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {}

  async add(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {}

  async change(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {}

  async delete(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {}
}
