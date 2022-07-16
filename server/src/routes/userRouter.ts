import { regValidation } from "../validation/registration";
import { UserController } from "../controllers/userController";
import { loginValidation } from "../validation/login";
import { authMiddleware } from "../middleware/authMiddleware";
import { updateValidation } from "../validation/update";

const Router = require("express");
const router = new Router();

const userController = new UserController();

router.post("/registration", regValidation, userController.registration);
router.post("/login", loginValidation, userController.login);
// router.post("/logout", userController.logout);
router.get("/auth", authMiddleware, userController.check);
router.put("/change", updateValidation, userController.change);
router.delete("/remove", userController.remove);

export { router as userRouter };
