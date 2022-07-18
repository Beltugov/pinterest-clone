import express, { Response } from "express";
import { BoardService } from "../service/boardService";

const boardService = new BoardService();

export class BoardController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { title, userId } = req.body;
      const result = await boardService.create(title, Number(userId));
      return res.json({
        status: 200,
        data: result,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async addPin(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const { boardId } = req.body;
      const board = await boardService.addPin(Number(boardId), Number(id));
      return res.json({
        status: 200,
        data: board,
      });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }

  async removePin(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const { boardId } = req.body;
      const board = await boardService.removePin(Number(boardId), Number(id));
      return res.json({
        status: 200,
        data: board,
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
      const boards = await boardService.getAll(Number(userId), limit, offset);
      return res.json({
        status: 200,
        data: boards,
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
      const board = await boardService.getOne(Number(id));
      return res.json({
        status: 200,
        data: board,
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
      const { title } = req.body;
      const { id } = req.params;
      const board = await boardService.change(Number(id), title);
      return res.json({
        status: 200,
        data: board,
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
      const result = await boardService.remove(Number(id));
      return res.json({ result });
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }
}
