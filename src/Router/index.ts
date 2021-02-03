import { Router } from "express";
import Auth from "../Auth";
import AuthController from "../Controller/AuthController";
import moduleRouter from "../Modules";
import UsersRouter from "./UsersRouter";

const mainRouter = Router();

mainRouter.post("/api/v1/auth", AuthController.authUser);

mainRouter.use(Auth.verifyAccessToken);

//
mainRouter.use("/api/v1/users", UsersRouter);

// Load Module Router
mainRouter.use("/api/v1/modules", moduleRouter);

export default mainRouter;
