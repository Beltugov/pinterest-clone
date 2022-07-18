import { userRouter } from "./userRouter";
import { boardRouter } from "./boardRouter";
import { pinRouter } from "./pinRouter";
import { commentRouter } from "./commentRouter";

const Router = require("express");
const router = new Router();

router.use("/user", userRouter);
router.use("/board", boardRouter);
router.use("/pin", pinRouter);
router.use("/comment", commentRouter);

export default router;
