import express, { Response } from "express";
import { PinService } from "../service/pinService";

const pinService = new PinService();

export class PinController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { title, description, showTitle, userId } = req.body;
      const { img } = req.files;
      const pin = await pinService.create(
        title,
        Number(userId),
        showTitle,
        description,
        img
      );
      return res.json({
        pin,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async getAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { userId, perPage, page } = req.query;
      const currentPage = Number(page) || 1;
      const limit = Number(perPage) || 9;
      const offset: number = currentPage * limit - limit;
      const pins = await pinService.getAll(Number(userId), limit, offset);
      return res.json({
        status: 200,
        data: pins,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async getOne(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const pin = await pinService.getOne(Number(id));
      return res.json({
        status: 200,
        data: pin,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async change(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { title, description, showTitle } = req.body;
      const { id } = req.params;
      const pin = await pinService.change(
        Number(id),
        title,
        description,
        showTitle
      );
      return res.json({
        status: 200,
        data: pin,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async remove(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const data = await pinService.remove(Number(id));
      return res.json({
        data,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }
}
