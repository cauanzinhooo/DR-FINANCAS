import { Router } from "express";
import { NFController } from "./nf.controller";
import { validateDto } from "../../middleware/validate";
import { CreateNotaFiscalDto } from "./dto/create-nf.dto";

const router = Router();
const controller = new NFController();

router.post(
  "/",
  validateDto(CreateNotaFiscalDto),
  controller.create.bind(controller)
);

router.get("/", controller.findAll.bind(controller));

router.get("/:id", controller.findOne.bind(controller));

router.post("/:id", controller.emit.bind(controller));

export default router;
