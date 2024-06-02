import {regValidation} from "../validation/registration";
import {UserController} from "../controllers/userController";
import {loginValidation} from "../validation/login";
import {updateValidation} from "../validation/update";
import {authMiddleware} from "../middleware/authMiddleware";

const Router = require("express");
const router = new Router();

const userController = new UserController();

router.post("/registration", regValidation, userController.registration);
router.post("/login", loginValidation, userController.login);
router.get("/auth", authMiddleware, userController.check);
router.put("/change", updateValidation, userController.change);
router.delete("/remove", userController.remove);

export {router as userRouter};
