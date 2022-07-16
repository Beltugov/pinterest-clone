import express, { Response } from "express";
import { CommentService } from "../service/commentService";

const commentService = new CommentService();

export class CommentController {
  async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<Response | void> {
    try {
      const { pinId, userId, text } = req.body;
      const comment = await commentService.create(pinId, userId, text);
      return res.json({
        status: 200,
        data: comment,
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
      const { pinId, perPage, page } = req.query;
      const currentPage = Number(page) || 1;
      const limit = Number(perPage) || 9;
      const offset: number = currentPage * limit - limit;
      const comments = await commentService.getAll(
        Number(pinId),
        limit,
        offset
      );
      return res.json({
        status: 200,
        data: comments,
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
      await commentService.remove(Number(id));
    } catch (e) {
      return next(res.status(500).json({ errors: e }));
    }
  }
}
