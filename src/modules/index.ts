import { Router } from "express";
import OS from "./OS";
import Equipaments from "./Equipaments";

import moduleUsers from "./Users";

const moduleRouter = Router();

// Main module
moduleRouter.use("/users", moduleUsers);
moduleRouter.use("/equipaments", Equipaments);
moduleRouter.use("/os", OS);

export default moduleRouter;
