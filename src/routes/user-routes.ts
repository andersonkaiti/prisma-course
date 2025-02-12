import { Router } from "express";
import { UserController } from "@controllers/user-controller";

const router = Router();
const userController = new UserController();

router.get("/", userController.get);
router.post("/", userController.create);
router.put("/:id", userController.updateById);
router.delete("/:id", userController.deleteById);

export default router;
