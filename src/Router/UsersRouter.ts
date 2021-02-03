import { Router, Request, Response, NextFunction } from "express";
import Auth from "../Auth";
import ControllerUsers from "../Controller/UsersController";

const UsersRouter = Router();

UsersRouter.use((req: Request, resp: Response, next: NextFunction) => {
  const { token } = Auth.getToken(req.headers.authorization as string);
  const userInfo = Auth.getPayload(token);
  if (userInfo?.idType != 1) {
    next({ code: 401, message: "Unautorized" });
  }
  next();
});

UsersRouter.get("/", ControllerUsers.getAll);
UsersRouter.post("/", ControllerUsers.create);

UsersRouter.get("/:id", ControllerUsers.getById);

export default UsersRouter;
