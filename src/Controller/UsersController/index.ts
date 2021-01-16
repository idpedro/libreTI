import { Request, response, Response } from "express";
import UsersDao from "../../Daos/UsersDao";
import TypeCheck from "../../Helper/TypeCheck";

class UsersController {
  public static async getAll(req: Request, resp: Response) {
    const users = await UsersDao.getAll();
    resp.json(users);
  }
  public static async getById(req: Request, resp: Response) {
    const { id } = req.params;
    if (TypeCheck.isInteger(id)) {
      try {
        const user = await UsersDao.getById(Number(id));
        resp.json(user);
      } catch (error) {
        resp.status(404).json({ message: error.message });
      }
    }
  }
  public static insert(req: Request, resp: Response) {
    resp.json(req.body);
  }
}

export default UsersController;
