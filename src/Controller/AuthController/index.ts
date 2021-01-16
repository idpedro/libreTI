import { Request, Response } from "express";
import Auth from "../../Auth";
import knex from "../../Database";

class AuthController {
  static async authUser(req: Request, resp: Response) {
    const { user, password } = req.body;
    if (!!user && !!password) {
      knex("users");
    }
  }
}

export default AuthController;
