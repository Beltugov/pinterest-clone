import { PinController } from "../controllers/pinController";

const Router = require("express");
const router = new Router();

const pinController = new PinController();

// router.use("/comment", commentRouter);
//
// router.post("/", pinController.addAll());
// router.get("/", pinController.addAll());
// router.get("/:id", pinController.addAll());
// router.put("/:id", pinController.addAll());
// router.delete("/:id", pinController.addAll());

export { router as pinRouter };
