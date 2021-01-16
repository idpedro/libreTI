import { Router } from "express";
import ControllerUsers from "../Controller/UsersController";

const UsersRouter = Router();

UsersRouter.get("/", ControllerUsers.getAll);
UsersRouter.get("/:id", ControllerUsers.getById);
UsersRouter.post("/", ControllerUsers.insert);

export default UsersRouter;
