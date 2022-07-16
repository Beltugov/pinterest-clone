import { CommentController } from "../controllers/commentController";

const Router = require("express");
const router = new Router();

const commentController = new CommentController();

router.post("/", commentController.create);
router.get("/", commentController.getAll);
router.delete("/:id", commentController.remove);

export { router as commentRouter };
