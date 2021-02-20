import { NextFunction, Request, Response } from "express";
import Auth from "../../Auth";
import bcrypt from "bcrypt";
import UsersDao from "../../Daos/UsersDao";
class AuthController {
  static async authUser(req: Request, resp: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (!!email && !!password) {
        const foundUser = await UsersDao.getUserByEmail(email);
        const isValidPass = await bcrypt.compare(password, foundUser.password);
        foundUser.password = undefined;
        if (isValidPass) {
          const token = Auth.generateAccessToken(foundUser);
          resp.json({ success: true, token, user: { name: foundUser.name } });
        } else {
          resp
            .status(403)
            .json({ success: false, message: "Invalid  credentials" });
        }
      }
    } catch (erro) {
      console.log(erro);
      next({ code: 400, message: "Invalid  credentials" });
    }
  }
}

export default AuthController;
