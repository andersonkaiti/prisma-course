import { Router } from "express";
import { houseController } from "@controllers/house-controller";

const router = Router();

router.post("/", houseController.create);
router.get("/", houseController.get);
router.get("/id/:id", houseController.getById);
router.get("/address", houseController.getByAddress);
router.post("/many", houseController.createMany);
router.get("/withFilters", houseController.withFilters);

export default router;
