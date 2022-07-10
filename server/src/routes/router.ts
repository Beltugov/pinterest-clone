import { userRouter } from "./userRouter";
import { pinRouter } from "./pinRouter";

const Router = require("express");
const router = new Router();

router.use("/user", userRouter);
router.use("/pin", pinRouter);

export default router;
