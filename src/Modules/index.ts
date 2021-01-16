import { NextFunction, Request, Response, Router } from "express";
import OS from "./OS";
import Equipaments from "./Equipaments";

import moduleUsers from "../Controller/UsersController";

const moduleRouter = Router();

const getToken = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.headers);
  next();
};

// Main module
moduleRouter.use("/equipaments", Equipaments);
moduleRouter.use("/os", OS);

export default moduleRouter;
