import { regValidation } from "../validation/registration";
import { UserController } from "../controllers/userController";
import { loginValidation } from "../validation/login";

const Router = require("express");
const router = new Router();

const userController = new UserController();

// router.use("/board", boardRouter);

router.post("/registration", regValidation, userController.registration);
router.post("/login", loginValidation, userController.login);
// router.put("/update", regValidation, UserController.login);
// router.get("/auth", UserController.check);
// router.delete("/delete", UserController.check);

export { router as userRouter };
