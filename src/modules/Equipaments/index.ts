import { Router } from "express";
import TypesRouter from "./TypesRouter";
import EquipamentsController from "./Controller/EquipamentController";

const Equipaments = Router();
Equipaments.use("/types", TypesRouter);
Equipaments.post("/", EquipamentsController.create);

export default Equipaments;
