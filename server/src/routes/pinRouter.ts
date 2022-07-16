import { PinController } from "../controllers/pinController";

const Router = require("express");
const router = new Router();

const pinController = new PinController();

router.post("/", pinController.create);
router.get("/", pinController.getAll);
router.get("/:id", pinController.getOne);
router.put("/:id", pinController.change);
router.delete("/:id", pinController.remove);

export { router as pinRouter };
