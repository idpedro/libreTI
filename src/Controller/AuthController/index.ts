import { Request, Response } from "express";
import Auth from "../../Auth";
import bcrypt from "bcrypt";
import UsersDao from "../../Daos/UsersDao";
class AuthController {
  static async authUser(req: Request, resp: Response) {
    const { email, password } = req.body;
    if (!!email && !!password) {
      const user = await UsersDao.getUserByEmail(email);
      console.log(user.password);
      const isValidPass = await bcrypt.compare(password, user.password);
      user.password = undefined;
      if (isValidPass) {
        const token = Auth.generateAccessToken(user);
        resp.json({ success: true, token });
      } else {
        resp
          .status(403)
          .json({ success: false, message: "Invalid  credentials" });
      }
    }
  }
}

export default AuthController;
