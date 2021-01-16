import { Router } from "express";
import EquipamentTypesController from "./Controller/EquipamentTypesController";

const TypesRouter = Router();

TypesRouter.get("/", EquipamentTypesController.getAll);
TypesRouter.post("/", EquipamentTypesController.insert);

TypesRouter.get("/:id", EquipamentTypesController.getById);
TypesRouter.put("/:id", EquipamentTypesController.update);

export default TypesRouter;
