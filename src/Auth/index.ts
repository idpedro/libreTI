import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";

interface UserPayloadData {
  id: Number;
  name: string;
  type: Number;
}

const Auth = {
  generateAccessToken: (user: UserPayloadData) => {
    return jwt.sign(user, process.env.TOKEN_SECRET as string, {
      expiresIn: "1800s",
    });
  },
  verifyAccessToken: (req: Request, resp: Response, next: NextFunction) => {
    const authHeader = req.headers["Authorization"] as string;
    const token = authHeader?.split("")[1];
    if (token)
      jwt.verify(token, process.env.TOKEN_SECRET as string, (error, user) => {
        if (error) resp.status(403).json("Invalid Credentials");
        return user;
      });
    resp.status(401).json("no auth");
  },
};

export default Auth;
