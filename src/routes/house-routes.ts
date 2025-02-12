import { Router } from "express";
import { HouseController } from "@controllers/house-controller";

const router = Router();
const houseController = new HouseController();

router.post("/", houseController.create);
router.get("/", houseController.get);
router.get("/id/:id", houseController.getById);
router.get("/address", houseController.getByAddress);
router.post("/many", houseController.createMany);
router.get("/withFilters", houseController.withFilters);

export default router;
