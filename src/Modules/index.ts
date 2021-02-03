import { Router } from "express";
import OS from "./OS";
import Equipaments from "./Equipaments";
import Auth from "../Auth";

const moduleRouter = Router();

// Main module
moduleRouter.use("/equipaments", Equipaments);
moduleRouter.use("/os", OS);

export default moduleRouter;
