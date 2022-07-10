const Router = require("express");
const router = new Router();

const UserController = require("../controllers/userController");

router.post("/", UserController.registration);
router.post("/login", UserController.login);
router.put("/update", UserController.login);
router.get("/", UserController.check);
router.delete("/delete", UserController.check);

export { router as boardRouter };