import { Router } from "express";
import TypesRouter from "./TypesRouter";
import EquipamentsController from "./Controller/EquipamentController";

const Equipaments = Router();
Equipaments.use("/types", TypesRouter);
Equipaments.get("/", EquipamentsController.getAll);
Equipaments.get("/:id", EquipamentsController.getById);

Equipaments.post("/", EquipamentsController.inset);
Equipaments.put("/:id", EquipamentsController.update);

export default Equipaments;
