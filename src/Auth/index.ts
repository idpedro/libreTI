import { Request, Response, NextFunction, response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

interface UserPayloadData {
  id: Number;
  name: string;
  role: string;
  type: Number;
}

const Auth = {
  getToken: (authHeader: string) => {
    const [prefix, token] = authHeader.split(" ");
    if (prefix === "Bearer" && token) return { prefix, token };
    throw new JsonWebTokenError("Invalid Auth Header");
  },
  generateAccessToken: (user: UserPayloadData) => {
    return jwt.sign(user, process.env.TOKEN_SECRET as string, {
      expiresIn: process.env.TOKEN_DURATION,
    });
  },
  verifyAccessToken: (req: Request, resp: Response, next: NextFunction) => {
    try {
      if (req.headers["authorization"]) {
        const { token } = Auth.getToken(req.headers["authorization"]);
        jwt.verify(token, process.env.TOKEN_SECRET as string, (error, user) => {
          if (error) next({ code: 406, message: "Invalid token" });
          else next();
        });
      } else {
        next({ code: 401, message: "No auth" });
      }
    } catch (error) {
      next({ code: 401, message: error.message });
    }
  },
  getPayload(token: string) {
    return jwt.decode(token, { json: true });
  },
};

export default Auth;
