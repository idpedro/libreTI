import { Router, Request, Response, NextFunction } from "express";
import AuthController from "../Controller/AuthController";
import moduleRouter from "../Modules";
import UsersRouter from "./UsersRouter";
const mainRouter = Router();

mainRouter.post("/api/v1/auth", AuthController.authUser);
moduleRouter.use("api/v1/users", UsersRouter);

mainRouter.use("/api/v1", moduleRouter);

export default mainRouter;
