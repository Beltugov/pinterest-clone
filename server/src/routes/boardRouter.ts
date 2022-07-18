import { BoardController } from "../controllers/boardController";

const Router = require("express");
const router = new Router();

const boardController = new BoardController();

router.post("/", boardController.create);
router.put("/addPin/:id", boardController.addPin);
router.put("/removePin/:id", boardController.removePin);
router.put("/:id", boardController.change);
router.get("/", boardController.getAll);
router.get("/:id", boardController.getOne);
router.delete("/:id", boardController.remove);

export { router as boardRouter };
